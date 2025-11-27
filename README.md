![Logo](/.github/cirro-guides-banner.png)

# Cirro Guides

[![GitHub Workflow Deploy Status](https://img.shields.io/github/actions/workflow/status/test-IO/cirro-guides/deploy.yml?label=Deploy&logo=github&style=flat-square)](https://github.com/test-IO/cirro-guides/actions/workflows/deploy.yml)
[![GitHub Workflow Build Status](https://img.shields.io/github/actions/workflow/status/test-IO/cirro-guides/build.yml?label=Build&logo=github&style=flat-square)](https://github.com/test-IO/cirro-guides/actions/workflows/build.yml)
[![GitHub Workflow Lint Status](https://img.shields.io/github/actions/workflow/status/test-IO/cirro-guides/lints.yml?label=Lints&logo=github&style=flat-square)](https://github.com/test-IO/cirro-guides/actions/workflows/lints.yml)

Live website at: [https://guides.cirro.io](https://guides.cirro.io)

> Cirro Guides for anyone - business or developer - to learn about Cirro and how to use it.
> This is a [Next.js](https://nextjs.org/) project using [Tailwind CSS](https://tailwindcss.com/) and [Markdoc](https://markdoc.dev/).

## Contributing

### Update the change log

When you make changes to the Cirro Guides, please update the change log list in the `src/pages/index.md` file. Add a new entry at the top of the list with the date and a brief description of the changes you made.

### Writing Content

To write content for the Cirro Guides, you need to have a basic understanding of Markdown (more precisely Markdoc) and Git. If you are not familiar with these, please read the following guides:

- [Markdown Guide](https://www.markdownguide.org/)
- [Git Handbook](https://guides.github.com/introduction/git-handbook/)
- [Git Handbook - Pull Requests](https://guides.github.com/activities/forking/#making-a-pull-request)
- [Markdoc](https://markdoc.dev/)

You will find all the content in the `src` folder. The content is written in Markdown and is organized in folders and files. The folder structure is as follows:

```bash
├── src
│   ├── pages   # Markdown files for the pages
│   ├── images  # Images for the pages
│   ├── data    # Sidebar navigation links
```

---

If you want to embed **code snippets**, you can use the following syntax:

````Markdown
{% code language="ruby" showLineNumbers=true %}
```
x = 7.days.ago
```
{% /code %}
````

---

All pages by default show a **table of contents** on the right. You can disable this by adding `hideTableOfContents: true` to the frontmatter of the page:

```Markdown
---
title: "Page Title"
hideTableOfContents: true
---
```

This will expand the content to the full width of the page.

---

### Writing Code

To contribute to the Cirro Guides application (this repository), you need to have a basic understanding of JavaScript (Next.js), Markdoc, TailwindCSS, and Yarn. Git(Hub) proficiency is presumed. If you are not familiar with these, please read the following guides:

- [Next.js](https://nextjs.org/docs/getting-started)
- [Yarn](https://yarnpkg.com/getting-started)
- [Markdoc](https://markdoc.dev/)
- [Tailwind CSS](https://tailwindcss.com/docs)

To get started, first run `bin/setup`. This will install all dependencies and set up the project. Then run `yarn dev` to start the development server. You can now access the application at [http://localhost:3000](http://localhost:3000).
To run the linter, run `bin/lint`. This requires markdownlint to be installed. To install it via Homebrew, run `brew install markdownlint-cli`.

All the commands that you can use
`yarn dev` runs the development server on localhost:3000 without the need to compile
`yarn build` compiles the application for production use, must be used before `yarn start`
`yarn start` starts a production server with the compiled application, available on your machine's public IP
`yarn lint` runs the bin/lint that will check and **fix** code style issues(if any, changes can be seen with `git status`)
`yarn lint:next` runs `next lint` to check for linting issues in the codebase
`yarn lint:markdown` runs `markdownlint` to check for linting issues in markdown files
`yarn format` lists files that are not formatted according to Prettier rules
`yarn format:check` checks formatting without making changes (useful for CI)
`yarn format:fix` automatically fixes formatting issues

### Search

The search is powered by [Algolia](https://www.algolia.com/). The search index is updated by running a crawler on the deployed guides. This crawler is Python based and lives in its own (private) [repository](https://github.com/test-IO/cirro-guides-scraper). All instructions on how to run the crawler can be found in that repositories [README](https://github.com/test-IO/cirro-guides-scraper#readme).

### JavaScript

<p>
  <img src="https://img.shields.io/badge/node-20.x.x-blue.svg" />
  <img src="https://img.shields.io/badge/yarn-1.22.x-blue.svg" />
</p>

## Authors

👤 **Jan Schwenzien**
