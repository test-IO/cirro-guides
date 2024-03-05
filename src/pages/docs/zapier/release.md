---
title: Release notes
pageTitle: Test IO Zapier App - Release notes
description: Learn about new releases of Test IO Zapier App.
---

## Version 1.2.0 (2024-02-21)

New actions let you do more with the Test IO platform:

- **Fetch Test IO Bug by External ID** - e.g. search for a bug in Test IO which is exported to Jira by Issue Id in Jira.
- **Mark Bug as Known** - mark bug in Test IO as known if you already know about it.
- **Mark Bug as Fixed** - e.g. mark bug as fixed when Issue status in Jira has changed to Done.
- **Create Bug Comment** - create a comment for a bug in the Test IO.

## Version 1.1.1 (2024-02-16)

Triggers now use ISO8601 format instead of Unix timestamp for the 'performed_at' field.

## Version 1.1.0 (2023-11-14)

**[BREAKING CHANGE]** Our Zapier app now includes a new action step that allows users to easily select a specific product from their Test IO account and create a Zap. Please note that any Zaps created with Test IO Zapier App triggers will need to be updated manually.
