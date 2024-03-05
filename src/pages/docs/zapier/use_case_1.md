---
title: "Use case 1: Export Test IO Bug to Notion"
description: Learn how to create Zap to export Test IO bug to Notion.
---

## Overview

[Bug Report Export Requested trigger](/docs/zapier/triggers#bug-report-export-requested) in combination with [Fetch Bug action](/docs/zapier/actions#fetch-bug) allows you to build a workflow that exports Test IO bug to any other system which has a Zapier app.

In this use case we will demonstrate how to export a bug from Test IO to Notion using Test IO and Notion Zapier apps.

## Configure export trigger (Test IO)

1. Search for and select Test IO Zapier app.
2. Select "Bug Report Export Requested" for the Event (required) field and press Continue button.
   {% screenshot src="/assets/zapier/use_case_1/1.png" caption="Screenshot 1. Select a trigger" /%}

3. On the Account tab, sign in with your Test IO API token.
   {% screenshot src="/assets/zapier/use_case_1/2.png" caption="Screenshot 2. Authentication" /%}

4. On the Trigger tab, select Test IO product and section. Select 'default-section' if a product doesn't have sections defined. Press Continue button.
   {% screenshot src="/assets/zapier/use_case_1/3.png" caption="Screenshot 3. Select product and sections" /%}

5. On the Test tab, press Test trigger button. You can inspect the data comming from Test IO. Press Continue with selected record.
   {% screenshot src="/assets/zapier/use_case_1/4.png" caption="Screenshot 4. Test trigger" /%}

## Configure fetch bug search (Test IO)

Now we have a trigger configured which will be triggered when a bug is exported from Test IO, the next step is to fetch all the information about this bug from Test IO.

1. Search for and select Test IO Zapier app.
2. Select "Fetch Bug" action for the Event (required) field and press Continue button.
   {% screenshot src="/assets/zapier/use_case_1/5.png" caption="Screenshot 5. Select an action" /%}

3. On the Account tab, press Continue button or Sign In with your Test IO API token if not signed in.
4. On the Action tab, fill the Bug ID (required) field with the "Bug Report Id" field coming from the previous trigger. Press Continue button.
   {% screenshot src="/assets/zapier/use_case_1/6.png" caption="Screenshot 6. Configure action" /%}

5. Press "Skip test" button as the bug with Bug ID provided in step 4 doesn't exists in Test IO. Although, the sample bug data will be available for the next steps.

{% screenshot src="/assets/zapier/use_case_1/7.png" caption="Screenshot 7. Test trigger" /%}

## Configure create database item action (Notion)

At the previous step we fetched all the data for a bug from Test IO, the next step is to create a new database item in Notion using the received bug data.

1. Search for and select Notion Zapier app.
2. Select "Create Database Item" action for the Event (required) field and press Continue button.
   {% screenshot src="/assets/zapier/use_case_1/8.png" caption="Screenshot 8. Select an action" /%}

3. On the Account tab, press Continue button or Sign In with your Notion account. Provide access to the page, containing your database.
4. On the Action tab, select Notion database and fill all the fields available for your database with data received in the previous Test IO Zapier step.
   {% screenshot src="/assets/zapier/use_case_1/10.png" caption="Screenshot 9. Fill the fields" /%}

5. The last fields in Notion are Content and Content Format, these fields allows to nicely display information of Test IO bug. Select markdown for Content Format field and use markdown syntax to compose the Content field. Many fields in Test IO bug data contains both versions: markdown and html. For example, Steps and Steps Html, Attachments and Attachments Html and etc. Press Continue button.
   {% screenshot src="/assets/zapier/use_case_1/11.png" caption="Screenshot 10. Fill content with markdown" /%}

6. On the Test tab, press Test step button. This will actually create a new record in your Notion database.
   {% screenshot src="/assets/zapier/use_case_1/12.png" caption="Screenshot 11. Test action" /%}

7. Go to Notion database and validate that the bug has the desired formatting.
   {% screenshot src="/assets/zapier/use_case_1/13.png" caption="Screenshot 12. New record in Notion" /%}

8. Press Open button as displayed on the previous screenshot and you will be able to see the formatted bug details.
   {% screenshot src="/assets/zapier/use_case_1/14.png" caption="Screenshot 13. Bug details 1" /%}
   {% screenshot src="/assets/zapier/use_case_1/15.png" caption="Screenshot 14. Bug details 2" /%}

9. The last step is to publish the created Zap.
   {% screenshot src="/assets/zapier/use_case_1/16.png" caption="Screenshot 15. Publish Zap" /%}

**Congratulations**, you've created a new integration with Test IO using Test IO Zapier App.
If you have a need to export Test IO bugs to any other systems, you can replace **Notion** with **other Zapier app**. There are Zapier Apps for **Jira, AzureDevOps, Github, Monday, Asana** and many more.
