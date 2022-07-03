---
title: 'Project structure using Next.JS, Contentful and Apollo Graphql'
metaTitle: 'Project structure using Next.JS, Contentful and Apollo Graphql'
metaDesc: 'Basic start project structure using Next.JS, Contentful and Apollo Graphql. '
date: '2022-07-04'
keywords:
- Contentful
- Next.js
- react
- Apollo graphql
- project structure
---

For this tutorial we're going to use:
 - Next.js
 - Contentful -> as CMS, to write the articles
 - Apollo Graphql -> to make the communication between Next.JS and Contentful.

All pages are created on build time using Next.js `getStaticPaths` and `getStaticProps` for a better performance,
and ability to scale the project using CDN.  
Before we'll start, make sure you've logged in Contentful, and have already created a space.

### 1. Clone the repository
You can clone the repository from [here](https://github.com/EliseiNicolae/Example-Contentful-Next.js-Graphql) or by
pasting in the Terminal the following command:
```
git clone https://github.com/EliseiNicolae/Example-Contentful-Next.js-Graphql
```

After that you need to create `.env.local` file, where you'll populate them with your `Space ID` and 
`Content Delivery API - access token`:

```
NEXT_PUBLIC_APP_SPACE_ID=
CONTENT_DELIVERY_API=
```

### 2. Create Content model & Content
Must have 2 content models:
 - Blog Post

![blog post content model](/images/blog-post-content-model.png)


 - SEO Metadata  

![seo metadata content model](/images/seo-metadata-content-model.png)

### 3. Install packages
```
npm install
```


### 4. Run the project
```
npm run dev
```
