---
title: 'Update all the Node.js dependencies to their latest version'
description: 'Best way to upgrade the dependencies from package.json with terminal commands.'
date: '2022-06-22'
keywords:
- nodejs
- package.json
- upgrade dependecies
- node.js
- nextjs
- angular
- vue
- react
---


1. Install `npm-check-updates`
```js
npm install -g npm-check-updates
```
2. Update all packages with:
```js
   ncu -u
```
3. Check your package.json file, and then run `npm install`
