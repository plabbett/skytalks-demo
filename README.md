# SKYTALKS
 
SKYTALKS demo website built using [Tailwind CSS](https://tailwindcss.com) and [Next.js](https://nextjs.org).

## Blog Posts

To add a new blog post, create a new Markdown file in `src/content/blog`, such as `src/content/blog/my-great-post.md`

Then edit your `my-great-post.md` file with Markdown. You can add blog metadata using the [Frontmatter format](https://www.markdownlang.com/advanced/frontmatter.html).

```markdown
---
title: My Great Post
description: This shows as the description for the blog post in lists and in metadata.
date: YYYY-MM-DD
author: Author name (or use SKYTALKS Team)
---

Your **markdown-based** [blog post](/blog) content goes here!

```

## Running Locally

To get started, first install the dependencies:

```bash
pnpm install
```

Next, run the development server:

```bash
pnpm run dev
```

Finally, open [http://localhost:3000](http://localhost:3000) in your browser to view the website.

## Customizing

You can start editing by modifying the files in the `/src` folder. The site will auto-update as you edit these files.

## License

The SKYTALKS demo website is open for contribution, but the source code itself uses a commercial template and is therefore not licensed under any open-source license. 
Forking this project as a base for your own projects is not permitted under the license of the original template.
