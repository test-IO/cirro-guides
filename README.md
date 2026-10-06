![Logo](/.github/cirro-guides-banner.png)

# Cirro Guides

[![Deploy](https://github.com/test-IO/cirro-guides/actions/workflows/deploy.yml/badge.svg)](https://github.com/test-IO/cirro-guides/actions/workflows/deploy.yml)
[![Build](https://github.com/test-IO/cirro-guides/actions/workflows/build.yml/badge.svg)](https://github.com/test-IO/cirro-guides/actions/workflows/build.yml)
[![Lints](https://github.com/test-IO/cirro-guides/actions/workflows/lints.yml/badge.svg)](https://github.com/test-IO/cirro-guides/actions/workflows/lints.yml)
![Node](https://img.shields.io/badge/node-24.x-blue?style=flat-square&logo=nodedotjs)
![Yarn](https://img.shields.io/badge/yarn-1.22.x-blue?style=flat-square&logo=yarn)

**Website:** <https://guides.cirro.io/>

## About

Cirro is (more than a) backend as a service: it provides everything needed to build a Crowd based platform, from user management to payments. Cirro Guides is its public documentation site, for anyone - business or developer - who wants to learn what Cirro does and how to use it.

The site covers:

- **Introduction**: getting started, the scope of Cirro, terminology, an example Space, webhooks and idempotency keys.
- **Main features**: authentication (incl. the Okta configuration guide), Gigs & Invitations, and Results & Rewards.
- **Secondary features**: notifications, Space invitations, Skill Sync and AI Access.

It has full-text search (⌘K), a dark mode, and links to the [API Reference](https://api-docs.cirro.io/) and the [Developer Portal](https://cirro.io/developers). A change log of the guides is kept on the home page.

This is a [Next.js](https://nextjs.org/) project using [Tailwind CSS](https://tailwindcss.com/) and [Markdoc](https://markdoc.dev/), exported as a static site and deployed to GitHub Pages by the `deploy.yml` workflow.

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
To run the linter, run `bin/lint`.

All the commands that you can use
`yarn dev` runs the development server on localhost:3000 without the need to compile
`yarn build` compiles the application for production use, must be used before `yarn start`
`yarn start` starts a production server with the compiled application, available on your machine's public IP
`yarn lint` runs the bin/lint that will check and **fix** code style issues(if any, changes can be seen with `git status`)
`yarn lint:next` runs ESLint to check for linting issues in the codebase
`yarn lint:markdown` runs `markdownlint` to check for linting issues in markdown files
`yarn format` lists files that are not formatted according to Prettier rules
`yarn format:check` checks formatting without making changes (useful for CI)
`yarn format:fix` automatically fixes formatting issues

### Search

The search is powered by [Algolia](https://www.algolia.com/). The search index is updated by running a crawler on the deployed guides. This crawler is Python based and lives in its own (private) [repository](https://github.com/test-IO/cirro-guides-scraper). All instructions on how to run the crawler can be found in that repositories [README](https://github.com/test-IO/cirro-guides-scraper#readme).

The search bar reads the `NEXT_PUBLIC_DOCSEARCH_APP_ID`, `NEXT_PUBLIC_DOCSEARCH_API_KEY` and `NEXT_PUBLIC_DOCSEARCH_INDEX_NAME` [repository variables](https://github.com/test-IO/cirro-guides/settings/variables/actions) at build time. They must point at the same Algolia application and index as the crawler (`cirro_guides`). Use the application's **Search-Only API Key**, never the crawler's write key: these values are shipped to every visitor's browser. To have search locally, put the same three variables in `.env.local`.

### Claude Code skills

The repository ships [Claude Code](https://claude.com/claude-code) skills in `.claude/skills/`. Run them from Claude Code in the repository root:

- `/upgrade-deps`: upgrades every npm package, GitHub Action and the Node version to its latest release, majors included, except packages held back by the `ignore` rules in `.github/dependabot.yml`. It migrates code for major bumps, verifies lint, formatting, build and audit, reports what changed, and commits on a `deps/upgrade-YYYY-MM-DD` branch in the format GitHub uses to autofill the PR. It asks before branching and committing, and never pushes.

### JavaScript

<p>
  <img src="https://img.shields.io/badge/node-24.x.x-blue.svg" alt="Node 24" />
  <img src="https://img.shields.io/badge/yarn-1.22.x-blue.svg" alt="Yarn 1.22" />
</p>

## Authors

👤 **Jan Schwenzien**
