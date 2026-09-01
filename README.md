# BOKUJI Web Presentation

A 19-slide, browser-based proposal deck designed for an in-person 16:9 presentation. This first implementation includes the shared navigation system and five visual reference slides: 01, 05, 07, 10 and 19.

## 一番簡単なプレビュー方法（GitHub Pages）

`main`ブランチへ変更が入ると、GitHub Actionsがプレゼンテーションを自動的にビルドしてGitHub Pagesへ公開します。コード操作は必要ありません。

初回のみ、GitHubのリポジトリ画面で次の設定を確認してください。

1. **Settings**をクリックします。
2. 左側の**Pages**をクリックします。
3. **Build and deployment**の**Source**で**GitHub Actions**を選択します。
4. 上部の**Actions**を開き、**Publish presentation to GitHub Pages**が完了するまで待ちます。
5. 完了したワークフロー内の公開URL、またはSettings → Pagesの**Visit site**をクリックします。

公開URLは通常、`https://<GitHubユーザー名>.github.io/<リポジトリ名>/`です。一度設定すれば、以降は`main`の更新ごとに自動更新されます。

## ローカルでのプレビュー（開発者向け）

```bash
npm install
npm run dev
```

ターミナルに表示されたURL（通常は`http://localhost:5173/`）をブラウザで開きます。

## Controls

- `←` / `→` (or Space): previous / next slide
- Swipe horizontally: previous / next slide
- `Esc` or the BOKUJI grid button: slide overview
- On-screen arrows: previous / next slide
- Center control button: fullscreen

## Content and images

Slide titles, summaries, type assignments, and image paths are centralized in `src/data/slides.js`. See `docs/IMAGE_INVENTORY.md` for current assignments and missing photography.
