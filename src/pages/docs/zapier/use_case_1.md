---
title: "Use Case 1: Export Test IO Bug to Notion"
description: Learn how to create a Zap to export a Test IO bug to Notion.
---

## Overview

The [Bug Report Export Requested trigger](/docs/zapier/triggers#bug-report-export-requested) in the Test IO Zapier app, combined with the [Fetch Bug action](/docs/zapier/actions#fetch-bug), lets you export Test IO bugs to any system with a Zapier integration.

We'll demonstrate how to export a Test IO bug to Notion using the {% link href="https://zapier.com/apps/test-io/integrations" target="_blank" %}Test IO{% /link %} and {% link href="https://zapier.com/apps/notion/integrations" target="_blank" %}Notion{% /link %} Zapier apps.

## Configure export trigger (Test IO)

1. Search for and select the Test IO Zapier app.
2. Choose "Bug Report Export Requested" as the Event(required) field and press **Continue**.
   {% screenshot src="/assets/zapier/use_case_1/1.png" caption="Screenshot 1. Select a trigger" /%}
3. **(Account Tab)** Authenticate with your Test IO API token.
   {% screenshot src="/assets/zapier/use_case_1/2.png" caption="Screenshot 2. Authentication" /%}
4. **(Trigger Tab)** Select the product and section (use 'default-section' if your product doesn't have sections). Press **Continue**.
   {% screenshot src="/assets/zapier/use_case_1/3.png" caption="Screenshot 3. Select product and sections" /%}
5. **(Test Tab)** Press **Test trigger**. Inspect the sample data and press **Continue with selected record**.
   {% screenshot src="/assets/zapier/use_case_1/4.png" caption="Screenshot 4. Test trigger" /%}

## Configure fetch bug search (Test IO)

Now that the trigger is set up, let's fetch the bug's details from Test IO:

1. Search for and select the Test IO Zapier app.
2. Select the "Fetch Bug" action and press **Continue**.
   {% screenshot src="/assets/zapier/use_case_1/5.png" caption="Screenshot 5. Select an action" /%}
3. **(Account Tab)** Press **Continue** (or sign in if needed).
4. **(Action Tab)** In the Bug ID field, select "Bug Report Id" from the previous trigger's output. Press **Continue**.
   {% screenshot src="/assets/zapier/use_case_1/6.png" caption="Screenshot 6. Configure action" /%}
5. Press "Skip test" as the bug with Bug ID provided in step 4 doesn't exists in Test IO. Sample data will be used for the next steps.
   {% screenshot src="/assets/zapier/use_case_1/7.png" caption="Screenshot 7. Test trigger" /%}

## Configure create database item action (Notion)

Let's create a new Notion database item using the fetched bug data:

1. Search for and select the Notion Zapier app.
2. Select "Create Database Item" and press **Continue**.
   {% screenshot src="/assets/zapier/use_case_1/8.png" caption="Screenshot 8. Select an action" /%}
3. **(Account Tab)** Authenticate with your Notion account and grant access to your database.
4. **(Action Tab)** Select your database. Fill database fields with data received from Test IO.
   {% screenshot src="/assets/zapier/use_case_1/10.png" caption="Screenshot 9. Fill the fields" /%}
5. Choose "markdown" for Content Format. Use markdown syntax in the Content field to format the bug details. Many fields in Test IO bug data contains both versions: markdown and html. For example, Steps and Steps Html, Attachments and Attachments Html and etc. Press **Continue**.
   {% screenshot src="/assets/zapier/use_case_1/11.png" caption="Screenshot 10. Fill content with markdown" /%}

6. **(Test Tab)** Press "Test step" to create a new record in your Notion database.
   {% screenshot src="/assets/zapier/use_case_1/12.png" caption="Screenshot 11. Test action" /%}
7. In Notion, verify the formatting of the new bug.
   {% screenshot src="/assets/zapier/use_case_1/13.png" caption="Screenshot 12. New record in Notion" /%}
8. Click "Open" to view the formatted bug details.
   {% screenshot src="/assets/zapier/use_case_1/14.png" caption="Screenshot 13. Bug details 1" /%}
   {% screenshot src="/assets/zapier/use_case_1/15.png" caption="Screenshot 14. Bug details 2" /%}
9. Finally, publish your Zap.
   {% screenshot src="/assets/zapier/use_case_1/16.png" caption="Screenshot 15. Publish Zap" /%}

**Congratulations!** You've successfully integrated Test IO and Notion. To export to other systems, simply replace Notion with the corresponding Zapier app (Jira, AzureDevOps, GitHub, etc.).

---
