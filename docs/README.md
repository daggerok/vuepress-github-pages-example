# Documentation example

[[toc]]

## vuepress-github-pages-example

[![CI](https://github.com/daggerok/vuepress-github-pages-example/actions/workflows/ci.yaml/badge.svg)](https://github.com/daggerok/vuepress-github-pages-example/actions/workflows/ci.yaml)

VuePress GitHub Pages quick documentation example

You can run npm scripts outside npm project folder:

```bash
npx degit daggerok/vuepress-github-pages-example app && cd $_ 

npm i -C docs
npm start -C docs
npm run dev -C docs
npm run build-github-pages -C docs
```

or quick getting started in target project:

```bash
npx degit daggerok/vuepress-github-pages-example /tmp/app
mv /tmp/app/.github ./
mv /tmp/app/docs ./

npm i -C docs
npm start -C docs
npm run dev -C docs
npm run build-github-pages -C docs
```

## Code Snippets

@[code lang=kotlin transcludeWith=::my-code-snippet](@/../src/main/kotlin/daggerok/App.kt)

This file can be found here: `src/main/kotlin/daggerok/App.kt`
