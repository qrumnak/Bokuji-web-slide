# GitHub Pagesでプレゼンテーションを見る

このリポジトリは、`main`ブランチが更新されるとBOKUJI Webプレゼンテーションを自動公開します。

## 初回だけ必要な設定

1. GitHubのリポジトリ画面で **Settings** を開きます。
2. 左側の **Pages** を開きます。
3. **Build and deployment** の **Source** で **GitHub Actions** を選択します。
4. 上部の **Actions** を開きます。
5. **Publish presentation to GitHub Pages** が緑色のチェックになるまで待ちます。
6. 完了した画面の公開URL、または **Settings → Pages → Visit site** をクリックします。

公開URLは通常、次の形式です。

```text
https://qrumnak.github.io/Bokuji-web-slide/
```

初回設定後は、`main`ブランチが更新されるたびに公開ページも自動更新されます。Actions画面の **Run workflow** から手動で再公開することもできます。
