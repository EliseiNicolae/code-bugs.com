---
title: "Example of Next.JS /api with error handling"
description: "Here's an example of catching the errors and the response from an API using Next.js 🚀"
date: '2022-07-16'
keywords:
- Next.JS
- Error
- Handling
- Fetch
- Api
- catch
---

🔥 Bellow API ([https://jsonplaceholder.typicode.com/users](https://jsonplaceholder.typicode.com/users)) will return **200** status:
```
import { NextApiRequest, NextApiResponse } from "next";

export default async (req: NextApiRequest, res: NextApiResponse) => {
  try {
    await fetch(`https://jsonplaceholder.typicode.com/users`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json, text/plain, */*",
      },
    }).then(response => {
      if (response.status >= 400) {
        response.json().then(e => console.error("Response error: ", e));
        return res.status(response.status).json(response.statusText);
      }

      return response
        .json()
        .then(data => res.status(response.status).json(data));
    });
  } catch (e) {
    console.error(e);
  }
};
```

