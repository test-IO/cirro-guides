---
title: Configure Notion as Bug Tracker
description: How Notion Plugin integrates with Test IO.
---

## Integration overview
In this guide, we’re going to build an [internal Notion integration](https://developers.notion.com/docs/getting-started#internal-integrations) that can export bugs to your database.

Before diving in, let’s quickly review Notion integrations. They need to be authorized (i.e., given explicit permission) to make any changes your workspace.

## Requirements
To follow along with this guide, you will need:

- A [Notion account](https://www.notion.so/signup).
- To be a [Workspace Owner](https://www.notion.so/help/add-members-admins-guests-and-groups) in the workspace you’re using. You can create a new workspace for testing purposes otherwise.

### Create your integration in Notion
The first step to building any internal integration is to create a new integration in Notion’s integrations dashboard: https://www.notion.com/my-integrations.

1. Click `+ New integration`
2. Enter the integration name.
3. Update the `Capabilities` to allow comment interactions.

{% screenshot src="/assets/notion/create_token.gif" caption="Create notion token" /%}


### Get your API secret
API requests require an API secret to be successfully authenticated. Visit the `Secrets` tab to get your integration’s API secret (or “Internal Integration Secret”).

{% screenshot src="/assets/notion/token_details.png" caption="Fetch notion token" /%}

{% callout type="warning" %}

**Keep your API secret a secret!**

Any value used to authenticate API requests should always be kept secret. Use environment variables and avoid committing sensitive data to your version control history.

If you do accidentally expose it, remember to “refresh” your secret.

[//]: # (The **Jira Server plugin** should be updated to **version 3.6.3** and above.)

{% /callout %}

### Give your integration page permissions
The database that we’re about to create will be added to a parent Notion page in your workspace. For your integration to interact with the page, it needs explicit permission to read/write to that specific Notion page.

To give the integration permission, you will need to:

1. Pick (or create) a Notion page.
2. Click on the `...` More menu in the top-right corner of the page.
3. Scroll down to `+ Add Connections`.
4. Search for your integration and select it.
5. Confirm the integration can access the page and all of its child pages.

{% screenshot src="/assets/notion/give_permissions.gif" caption="Connect integration with database" /%}

Your integration can now make API requests related to this Notion page and any of its children.

`🚧 If your API requests are failing, confirm you have given the integration permission to the page you are trying to update. This is a common cause of API request errors.`