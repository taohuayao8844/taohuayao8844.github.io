---
title: 开启我的第一篇帖子
description: 2024年11月16日夜至17日7点通宵解决搭建问题✨
date: 2040-03-09T00:00:00+08:00
tags:
  - Start
  - DO
---

## Getting Started

Download the [codebase](https://github.com/ladit/astro-blog-zozo) first. [Bun](https://bun.sh) is recommended for this project.

```shell
# let bun to create a local repo using this template
bun create ladit/astro-blog-zozo
bun install
```

### populate your content

To craft your own site further, check the folders below and modify anything as you wish. Markdown post with frontmatters is supported.

```
public              # favicons here
├── apple-touch-icon.png
├── favicon.ico
src
├── assets
│   ├── logo.svg    # site logo read in components/Header.astro
│   ├── og-logo.png # logo image for OG generation. Check src/utils/openGraphImage.tsx for detail
├── config.ts       # main config
├── content         # markdown posts and attachments go here
│   ├── attachments
│   └── posts
├── pages
│   ├── index.astro # index page written in Astro component
│   └── about.astro # about page written in Astro component
giscus.example.json # rename to giscus.json for advanced giscus configurations
```

All frontmatter fields except title are optional. Date field is under ISO 8601 format without quotation marks.
The posts frontmatter describes as:

```yaml
---
slug: my-custom-slug
title: My awesome title
description: some desc
image: ../attachments/100.jpg # hero & social image
date: 2024-02-26T23:30:47+08:00
lastmod: 2024-02-26T23:30:47+08:00
hidden: false # set this to true to make this post hidden from posts list. But the uri is still accessable.
tags:
  - demo
  - theme
hide: # set a element list to hide in the post page
  - title
  - date
  - lastmod
  - tags
  - readingTime
  - toc
  - comments
---
```

Note: to use the Astro `Content Collection` feature, the site content must be placed at `src/content`. In fact, I linked the `src/content` folder to my Obsidian vault for better editing experience.

### comments

Post comments is powered by [giscus](https://github.com/giscus/giscus). So your blog visitors should login Github to leave a comment. Follow instructions [here](https://giscus.app/) to initialize your Github repo, install giscus app, enable discussion and get your parameters to fill in `src/config.ts: GiscusConfig`.

To restrict the domains that can load giscus with your repository's discussions, rename `giscus.example.json` to `giscus.json` and modify it. Document is [here](https://github.com/giscus/giscus/blob/main/ADVANCED-USAGE.md).

### preview

Build it first by `bun run build` and preview it by `bun run preview` or `bun run preview:wrangler`.

`wrangler` is a cli from Cloudflare. You may install it first.

### deploy to Cloudflare Pages

Refer to [Cloudflare Pages doc](https://developers.cloudflare.com/pages/). You can use `wrangler` cli to upload from local or git integration.

Build settings:

Framework: Astro

Build command: `bun install && bun run build`

Evironments:

```shell
BUN_VERSION=latest
NODE_VERSION=v22.11.0
```

To add a custom domain, check [the doc](https://developers.cloudflare.com/pages/configuration/custom-domains/).

### deploy to Github Pages

Follow [this doc](https://docs.github.com/en/pages/getting-started-with-github-pages/creating-a-github-pages-site).

You must have a `<username>.github.io` repo in Github for deploying. You can rename this repo.

In the repository, go to Settings > Pages > Build and deployment. Select `Github Actions` as Source.

Github workflow(`.github/workflows/pages.yaml`) will deploy for you everytime you push to the default branch.

To add a custom domain, check [the doc](https://docs.github.com/en/pages/configuring-a-custom-domain-for-your-github-pages-site/about-custom-domains-and-github-pages).

### deploy to Vercel

Link your Github account to Vercel and import your blog repo to it.

Build settings:

Framework: Astro

Build command overwrite: `bun run build`

To add a custom domain, check [the doc](https://vercel.com/docs/projects/domains/add-a-domain).
