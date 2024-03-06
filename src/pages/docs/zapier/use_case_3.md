---
title: "Use case 3: Sync Jira Issue status"
description: Learn how to sync Jira Issue status when a positive bug fix confirmation is received.
---

## Overview

{% callout type="info" %}
This integration only makes sense for bugs **already exported** from **Test IO** to **Jira Cloud or any other bug tracker**.
{% /callout %}

[Bug Fix Confirmation Status Changed trigger](/docs/zapier/triggers#bug-fix-confirmation-status-changed) in combination with [Fetch Bug action](/docs/zapier/actions#fetch-bug) allows you to build a workflow that updates status of the bug in bug tracker when a positive bug fix confirmation comes from Test IO.

In this use case we will demonstrate how to sync Jira Issue status when a positive bug fix confirmation comes from Test IO using {% link href="https://zapier.com/apps/test-io/integrations" target="_blank" %}Test IO{% /link %} and {% link href="https://zapier.com/apps/jira-software-cloud/integrations" target="_blank" %}Jira Software Cloud{% /link %} Zapier apps

## Configure Bug Fix Confirmation Status Changed trigger (Test IO)

1. Search for and select Test IO Zapier app.
2. Select "Bug Fix Confirmation Status Changed" for the Event (required) field and press Continue button.
   {% screenshot src="/assets/zapier/use_case_3/1.png" caption="Screenshot 1. Select a trigger" /%}

3. On the Account tab, sign in with your Test IO API token.

4. On the Trigger tab, select Test IO product and section. Select 'default-section' if a product doesn't have sections defined. Press Continue button.
   {% screenshot src="/assets/zapier/use_case_3/2.png" caption="Screenshot 2. Select product and sections" /%}

5. On the Test tab, press Test trigger button. You can inspect the data comming from Test IO. For the testing purpose we need to find a record with Bug Fix Confirmation Status: "passed". Press Find new records button untill a bug fix confirmation with "passed" status is received. Press Continue with selected record.
   {% screenshot src="/assets/zapier/use_case_3/3.png" caption="Screenshot 3. Test trigger" /%}

## Configure Filter by Zapier (Zapier)

1. Search for and select Filter by Zapier app.
2. Select "Bug Fix Confirmation Status" from the previous trigger, select "(Text) Exactly matches" with "passed" value as displayed on the Screenshot 4. Press Continue button.
   {% screenshot src="/assets/zapier/use_case_3/4.png" caption="Screenshot 4. Filter setup" /%}
3. Confirm that a Zap would have continued for this test data as displayed on the Screenshot 5. Press Continue button.
   {% screenshot src="/assets/zapier/use_case_3/5.png" caption="Screenshot 5. Confirm testing" /%}

## Configure fetch bug search (Test IO)

Now we have a trigger configured which will be triggered when a bug fix confirmation is changed in Test IO and also a filter which keeps only "passed" bug fix confirmations, the next step is to fetch all the information about this bug from Test IO.

1. Search for and select Test IO Zapier app.
2. Select "Fetch Bug" action for the Event (required) field and press Continue button.
   {% screenshot src="/assets/zapier/use_case_3/6.png" caption="Screenshot 6. Select an action" /%}

3. On the Account tab, press Continue button or Sign In with your Test IO API token if not signed in.
4. On the Action tab, fill the Bug ID (required) field with the "Bug Report Id" field coming from the the first trigger. Press Continue button.
   {% screenshot src="/assets/zapier/use_case_3/7.png" caption="Screenshot 7. Configure action" /%}

5. Press "Skip test" button as the bug with Bug ID provided in step 4 doesn't exists in Test IO. Although, the sample bug data will be available for the next steps.

## Configure Find Issue (Jira Software Cloud)

1. Search for and select Jira Software Cloud Zapier app.
2. Select "Find Issue" action for the Event (required) field and press Continue button.
   {% screenshot src="/assets/zapier/use_case_3/8.png" caption="Screenshot 8. Select an action" /%}

3. On the Account tab, press Continue button or Sign In with your Jira Cloud account if not signed in.
4. On the Action tab, fill the Key field with the "External Idx" field coming from the the previous search as showed on the Screenshot 9. Press Continue button.
   {% screenshot src="/assets/zapier/use_case_3/9.png" caption="Screenshot 9. Configure action" /%}

5. Press "Skip test" button as the Issue with Key provided in step 4 doesn't exists in Jira Cloud. Although, the sample bug data will be available for the next steps.

## Configure Jira Issue update action (Jira Software Cloud)

At the previous step we found the Issue in Jira Cloud using Issue Key, the next step is to change Jira Issue status to Done.

1. Search for and select Jira Software Cloud Zapier app.
2. Select "Update Issue" action for the Event (required) field and press Continue button.
   {% screenshot src="/assets/zapier/use_case_3/10.png" caption="Screenshot 10. Select an action" /%}

3. On the Account tab, press Continue button or Sign In with your Jira Cloud account if not signed in.
4. On the Action tab, fill the Issue (required) field with the "Key" field received from the previous action and fill Status field with the status corresponding to a fixed Issue in Jira Cloud. Press Continue button.
   {% screenshot src="/assets/zapier/use_case_3/11.png" caption="Screenshot 11. Configure action" /%}

5. Press "Skip test" button as the Issue with Key provided in step 4 doesn't exists in Jira Cloud.

6. The last step is to publish the created Zap.

**Congratulations**, you've created a new integration between Test IO and Jira Cloud using Test IO and Jira Cloud Software Zapier Apps.
If you have a need to update the bug status in any other systems, you can replace **Jira Software Cloud** with **other Zapier app**. There are Zapier Apps for **AzureDevOps, Github, Monday, Asana** and many more.
