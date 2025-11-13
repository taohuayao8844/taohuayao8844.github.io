---
title: a hidden post
slug: my-hidden-post
description: some desc
date: 2024-02-27T23:30:47+08:00
lastmod: 2024-02-27T23:30:47+08:00
hidden: true
tags:
  - sample post
  - hidden
---

# This post is hidden

It will not be shown in RSS and sitemap. But you can still access it at `/posts/my-hidden-post`.

Note that if you deploy on public Github repo, hidden posts may be seen in build output such as workflow artifacts.

| **slug** | 自定义 URL 片段 | 决定最终访问地址：如果站点 `permalinks` 规则里用了 `:slug`，则文章 URL 变成 `/my-hidden-post/`；否则 Hugo 仍用默认规则（如 `/posts/2024-02/my-hidden-post/`）。 |
| -------- | --------------- | ------------------------------------------------------------ |
|          |                 |                                                              |
