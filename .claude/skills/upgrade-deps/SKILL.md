---
name: upgrade-deps
description: Upgrade every dependency in cirro-guides (npm packages, GitHub Actions, Node) to its latest version, majors included, except packages held back by the .github/dependabot.yml ignore rules. It verifies build, lint, formatting and audit, reports what changed, and commits in the format GitHub uses to autofill the PR. Never pushes. Use when the user types /upgrade-deps or asks to "upgrade all dependencies", "clear dependabot", or "bump everything".
---

# upgrade-deps

Take every dependency to its latest published version in one pass. Don't stop at what Dependabot or the security alerts flag, and don't stop at the minimum patched version. Majors are included, so don't ask whether to skip them. **Never push** and never run `gh pr create`.

## 1. Record the starting state and back up files

```bash
mkdir -p /tmp/deps-backup && cp package.json yarn.lock /tmp/deps-backup/
gh pr list --author app/dependabot --json number,title --jq '.[]|"#\(.number) \(.title)"' | tee /tmp/deps-backup/dependabot-prs.txt
gh api repos/{owner}/{repo}/dependabot/alerts --paginate --jq '.[]|select(.state=="open")|[.dependency.package.name,.security_advisory.severity,.security_vulnerability.first_patched_version.identifier]|@tsv' | sort -u > /tmp/deps-backup/alerts.tsv
yarn build && rm -rf /tmp/out-before && cp -r out /tmp/out-before
```

## 2. Load the held-back list

The held-back list is the `ignore` rules in `.github/dependabot.yml`, and nothing else. Read it now. Each ignored package goes to the highest version below its ignored range (e.g. `versions: [">=10"]` means the newest 9.x). Don't re-test it, because the comment explains why it's held.

## 3. Upgrade libraries

- Run `yarn add <pkg>@latest` for every entry in `dependencies`, and `yarn add -D <pkg>@latest` for every entry in `devDependencies`. For held-back packages, use `<pkg>@^<highest allowed major>` instead.
- Bump every `resolutions` entry in `package.json` to its latest version. Keep the resolution only while the upstream pin it overrides still exists.
- Regenerate the lockfile from scratch so transitive dependencies refresh: `rm -rf yarn.lock node_modules && yarn install`.
- Fix every `unmet peer dependency` warning by adding the missing peer at its latest compatible version. Yarn's `trying to unpack in the same destination` cache notices are harmless.

## 4. Majors

For each major bump, read the changelog or migration guide and use the official codemod or upgrade tool where one exists. For example, `npx @tailwindcss/upgrade` must run while the old major is still installed. Then fix the code. Check the "Already migrated" section below first, so you don't redo work that's already done.

If something truly can't run at its latest version because the rest of the ecosystem isn't ready, keep it on the last version that works. Add a `.github/dependabot.yml` `ignore` rule whose comment gives the version to keep, the exact error, and the date.

## 5. Actions and runtime

- For every `uses:` in `.github/workflows/*.yml`, run `gh api repos/<owner>/<action>/releases/latest --jq .tag_name`. Move to the latest major tag (e.g. `@v7`), read the release notes for breaking inputs, and skip actions held by the ignore rules.
- Move `.node-version`, every workflow `node-version:`, and the README node badge to the current LTS: `curl -s https://nodejs.org/dist/index.json | node -e 'console.log(JSON.parse(require("fs").readFileSync(0)).find(x=>x.lts).version)'`.

## 6. Verify

Loop until everything passes:

```bash
rm -rf node_modules .next out && yarn install --frozen-lockfile
yarn lint:next && yarn lint:markdown && yarn format:check && yarn build
yarn outdated   # only packages held by the ignore rules may remain
```

- `yarn lint` (`bin/lint`) silently runs `format:fix` when the check fails, so after running it, review `git diff`. Fix malformed content (such as broken Markdown tables) instead of accepting an ugly reformat.
- A broken Markdoc setup still builds green, so compare against the baseline. Every HTML file in `/tmp/out-before` must have the same `<title>` and the same `<h1-3>` count in `out/`.

## 7. Audit

Aim for 0 vulnerabilities:

- `yarn audit`. It must report a non-zero "Packages audited" count; 0 means it didn't actually run.
- Cross-check with npm: copy `package.json` into a temp dir, convert `resolutions` to `overrides`, run `npm i --package-lock-only --ignore-scripts --legacy-peer-deps`, then `npm audit`.
- Every package in `/tmp/deps-backup/alerts.tsv` must be at or above its patched version in `yarn.lock`, or be gone from the tree.

## 8. Report

Show:

- A `package | old | new` table covering every changed dependency, action, and runtime version (compare against `/tmp/deps-backup`).
- The code and config changes made for the migrations.
- What was held back and why (the ignore rules, plus any added this run).
- The Dependabot PRs and alerts this clears.

## 9. Commit

1. Ask for an optional Jira ticket (`EPMTIOOPS-NNNNN`).
2. Ask before creating the branch `deps/upgrade-YYYY-MM-DD` from `main`.
3. As the very last action before committing, run `yarn format:fix && yarn format:check`, so files edited late (this SKILL.md included) pass the CI formatter.
4. Ask before committing. Make it one commit so GitHub autofills the PR:
   - **Subject** (becomes the PR title): `Upgrade all dependencies to latest versions`, prefixed with `[EPMTIOOPS-NNNNN] ` if a ticket was given.
   - **Body** (becomes the PR description): flat `- ` bullets. Write one per major bump, one per code or config change, one per workflow or runtime change, and one grouped bullet for all minor and patch bumps. Each bullet starts with a capitalized imperative verb, is at most 64 characters, and has no trailing period.
   - No Co-Authored-By, no emoji, no AI attribution.
5. Don't suggest a PR title, description, or labels; the commit is the PR text. Never push.

## 10. Always last

Ask the user to run the app locally (`yarn dev`) and check it visually: the home page, a docs page, dark mode, and the search pop-up (⌘K).

## Already migrated, don't redo

These were done on 2026-09-29. Keep them as they are unless the reason no longer applies.

- **Tailwind 3 → 4**: `tailwind.config.js` became CSS (`@theme`, `@plugin`, `@custom-variant dark`) in `src/styles/tailwind.css`. `postcss.config.js` uses `@tailwindcss/postcss`, and `autoprefixer` and `postcss-import` were removed. A v3 border-color compatibility block is in `tailwind.css`. `prettier.config.js` sets `tailwindStylesheet`.
- **Next 15 → 16**:
  - `next lint` and the `eslint` key in `next.config.js` no longer exist.
  - `dev` and `build` pass `--webpack`, and so does `deploy.yml`, which calls `next build` directly. Turbopack breaks `@markdoc/next.js`: no `pagesDir` reaches the loader, and the `markdoc/` schema doesn't resolve. Pages then lose their frontmatter (titles, table of contents, homepage cards), and the build still succeeds.
  - `transpilePackages: ["@docsearch/react"]`, because `@algolia/autocomplete-core` exposes its ESM only via `"module"` and SSR fails with `does not provide an export named 'createAutocomplete'`.
- **ESLint 8 → 9 flat config**: `.eslintrc.json` became `eslint.config.mjs` (spreading `eslint-config-next`), and `lint:next` is `eslint .`. `typescript` is a dev dependency because `eslint-config-next` needs it. `react-hooks/set-state-in-effect` is off, because the components deliberately read browser-only state on mount.
- **Prettier 2 → 3**: plugins are listed as strings in `prettier.config.js`.
- **React 18 → 19**: no code changes were needed.
- **markdownlint**: the `markdownlint` library (which has no CLI) became `markdownlint-cli`. The `lint:markdown` glob is `src/pages/**/*.md`; it used to be `pages/…`, which matched nothing.
- **Peers added**: `postcss`, `search-insights`, `@algolia/client-search`.
- **Resolution**: `@tailwindcss/typography/postcss-selector-parser`, because typography pins the vulnerable 6.0.10. On 7.x the built CSS is byte-identical.
- **Node 20 → 24 LTS**: in `.node-version`, the workflows, and the README badge.
