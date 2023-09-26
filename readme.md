---
title: Vite + React
description: The default Vite + React starter, utilizing `Caddy` to serve the built app
tags:
  - node
  - vite
  - react
---

# Vite + React + Caddy

This is a [Vite + React](https://vitejs.dev/guide/#trying-vite-online) starter that uses [Caddy](https://caddyserver.com/).

## ✨ Features

- Vite + React
- [Caddy](https://caddyserver.com/)

## 💁‍♀️ How to use

- Install required dependencies with `npm install`
- Start the server for local development `npm run dev`

## Using `Caddy` when deploying to Railway

Caddy is a powerful, enterprise-ready, open source web server, and therefore Caddy is far better suited to serve websites than Vite is, using Caddy will result in much less memory and cpu usage compared to serving with Vite (much lower running costs too)

**Relevant Caddy documentation:**

- [The Caddyfile](https://caddyserver.com/docs/caddyfile)
- [Caddyfile Directives](https://caddyserver.com/docs/caddyfile/directives)
- [root](https://caddyserver.com/docs/caddyfile/directives/root)
- [encode](https://caddyserver.com/docs/caddyfile/directives/encode)
- [file_server](https://caddyserver.com/docs/caddyfile/directives/file_server)
- [try_files](https://caddyserver.com/docs/caddyfile/directives/try_files)

# Tailwind

- Tailwind defines css classes for you, so that you can additively write css directly into your jsx code
- This kind of structure is preferred as you do not need to spend time managing, naming, css classes
- The workflow is much faster as well as you can design and implement pages directly on the jsx
- Using predefined tailwind colours allow us to have consistent colour schemes, text sizes, etc...

# Flowbite Tailwind Components

- Flowbite components are essentially template javascript+tailwind components that you can copy paste into your website
- As imported component libraries are often opiniated and hinder flexbility and adaptability in projects
- Using Flowbite, you have the benefits of flexibility and at the same time the ease of using pre-built components, best of both worlds!
- Bonus benefit of the ability to learn how to build encapsulated and reusable components as time goes on!
