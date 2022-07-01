---
title: "Module not found: Can't resolve 'fs'"
metaTitle: "Can't resolve 'fs' solution"
metaDesc: "./node_modules/image-size/dist/index.js:13:0
Module not found: Can't resolve 'fs'"
date: '2022-07-01'
keywords:
- next.js
- react
- angular
- fs
- can't resolve 'fs'
---

![img.png](../images/cannot-resolve-fs.png)

## Solution: 

To fix this error add this code in your `package.json`:
```
  "browser": {
    "fs": false,
    "path": false,
    "os": false
  }
```

🚀  Enjoy!
