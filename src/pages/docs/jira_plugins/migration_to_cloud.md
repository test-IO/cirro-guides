---
title: Migrate Jira Server to Jira Cloud Plugin
description: How to perform Jira Server to Cloud Plugin migration.
---

## Introduction

Support for Atlassian Server products **ends on Feb. 15, 2024**. [Atlassian migration guide](https://www.atlassian.com/migration/assess/journey-to-cloud) has detailied instructions on how to migrate from Server to Cloud.

Test IO Jira Server Plugin provides a possiblity to migrate data to Cloud and continue using Test IO Jira Cloud Plugin.

## Atlassian migration

This video provided by Atlassian shows how to migrate from Jira Server to Cloud. The step is required before proceeding with Test IO Jira plugin data migration.

{% youtube title="YouTube video player" src="https://www.youtube.com/embed/pvdWQctPMM4?si=J3xmKMR8KF79X0nj" width="560px" /%}

## Test IO migration

After Atlassian migration is done and Jira Cloud has migrated data (Projects, Issues and etc), we can start migrating Test Io plugin data.

1. Install Test IO Cloud Plugin from [Atlassian Marketplace](https://marketplace.atlassian.com/apps/1217073/qa-service-for-jira?hosting=cloud&tab=overview).

2. **In Jira Cloud** Go to "Authentication" page and fill in your Test IO api key.

{% image src="/assets/migration_to_cloud/1_authentication.png" alt="screenshot" /%}

3. **In Jira Server** Open **"Manage apps"** section in Jira Administration then go to **"Maintenance page"** for Test IO Plugin and open **"Migration to Cloud"** tab.

{% image src="/assets/migration_to_cloud/2_maintenance.png" alt="screenshot" /%}

4. **Select cloud plugin installation**

5. **Select migration type** depending on your Altassian Jira migration type:

- **full migration** if you migrated Jira using [Migrate all data at once](https://support.atlassian.com/migration/docs/migrate-all-jira-data-at-once-using-the-assistant/)

- **partial migration** if you migrated Jira using [Choose what to migrate](https://support.atlassian.com/migration/docs/choose-what-jira-data-to-migrate-using-the-assistant/)

{% image src="/assets/migration_to_cloud/1_migration.png" alt="screenshot" /%}

6. Check **Jira Projects** and **Configurations** to migrate. For each configuration the target Project in Jira Cloud should be selected.

{% image src="/assets/migration_to_cloud/3_migration.png" alt="screenshot" /%}

7. Click **Execute Migration for Test IO Issues** to proceed with migration.

8. After successful migration, the configuration should appear in the Jira Cloud Plugin.

Please check if **"Issue Type & Field Mapping"** and **"Advanced Integration"** tabs are similar with configurations in the Test IO Jira Server Plugin.

{% image src="/assets/migration_to_cloud/6_migration.png" alt="screenshot" /%}

9. This is a **final step**. At this step, all migrated configurations should already exist in the Jira Cloud Test IO Plugin, but it requires some time to migrate all Test IO bugs.

In Jira Server Plugin, you can check if there any issues with migration. If **failed bugs** are present, please **contact your CSM** and provide the list of failed bugs.

{% image src="/assets/migration_to_cloud/5_migration.png" alt="screenshot" /%}
