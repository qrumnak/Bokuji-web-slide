import { access, readFile, readdir } from 'node:fs/promises';
import path from 'node:path';

const projectBase = '/Bokuji-web-slide/';
const distDirectory = path.resolve('dist');
const indexPath = path.join(distDirectory, 'index.html');

async function filesBelow(directory) {
  const entries = await readdir(directory, { withFileTypes: true });
  const nestedFiles = await Promise.all(entries.map((entry) => {
    const entryPath = path.join(directory, entry.name);
    return entry.isDirectory() ? filesBelow(entryPath) : [entryPath];
  }));
  return nestedFiles.flat();
}

function localAssetReferences(source) {
  const references = new Set();
  const patterns = [
    /(?:src|href)=["']([^"']+)["']/g,
    /["'](\/Bokuji-web-slide\/assets\/[^"']+)["']/g,
    /url\(["']?([^)'"\s]+)["']?\)/g,
  ];

  for (const pattern of patterns) {
    for (const match of source.matchAll(pattern)) {
      if (match[1].startsWith(projectBase)) references.add(match[1]);
    }
  }
  return references;
}

const indexHtml = await readFile(indexPath, 'utf8');
if (indexHtml.includes('/src/')) {
  throw new Error('dist/index.html still references a source module instead of a built bundle.');
}

const entryReferences = [...indexHtml.matchAll(/(?:src|href)=["']([^"']+)["']/g)]
  .map((match) => match[1])
  .filter((reference) => !reference.startsWith('http'));

if (!entryReferences.length || entryReferences.some((reference) => !reference.startsWith(`${projectBase}assets/`))) {
  throw new Error(`Every generated entry must use the GitHub Pages base ${projectBase}`);
}

const outputFiles = await filesBelow(distDirectory);
const inspectableFiles = outputFiles.filter((file) => /\.(?:html|css|js)$/.test(file));
const references = new Set(entryReferences);

for (const file of inspectableFiles) {
  const source = await readFile(file, 'utf8');
  for (const reference of localAssetReferences(source)) references.add(reference);
}

for (const reference of references) {
  const relativePath = decodeURIComponent(reference.slice(projectBase.length));
  await access(path.join(distDirectory, relativePath));
}

console.log(`Verified ${references.size} generated references below ${projectBase}`);
