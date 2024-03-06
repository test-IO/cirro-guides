---
title: "Use case 2: Mark bug as fixed in Test IO"
description: Learn how a Test IO bug can be marked as fixed when status is updated.
---

## Overview

{% callout type="info" %}
This integration only makes sense for bugs **already exported** from **Test IO** to **Asana or any other bug tracker**.
{% /callout %}

[Mark Bug as Fixed action](/docs/zapier/actions#mark-bug-as-fixed) in combination with [Fetch Test IO Bug by External Id action](/docs/zapier/actions#fetch-test-io-bug-by-external-id) allows you to build a workflow that marks bug as fixed in Test IO platform when a status of the bug is updated in the bug tracker.

In this use case we will demonstrate how to sync Test IO bug status when a task completed in Asana using {% link href="https://zapier.com/apps/asana/integrations" target="_blank" %}Asana{% /link %} and {% link href="https://zapier.com/apps/test-io/integrations" target="_blank" %}Test IO{% /link %} Zapier apps

In this use case we will demonstrate how to export a bug from Test IO to Notion using {% link href="https://zapier.com/apps/test-io/integrations" target="_blank" %}Test IO{% /link %}
and {% link href="https://zapier.com/apps/notion/integrations" target="_blank" %}Notion{% /link %} Zapier apps.

## Configure completed Task trigger (Asana)

1. Search for and select Asana Zapier app.
2. Select "Completed Task" for the Event (required) field and press Continue button.
   {% screenshot src="/assets/zapier/use_case_2/1.png" caption="Screenshot 1. Select a trigger" /%}

3. On the Account tab, sign in with your Asana account and press Continue button.
4. On the Trigger tab, select Asana workspace and Project. Press Continue button.
   {% screenshot src="/assets/zapier/use_case_2/2.png" caption="Screenshot 2. Select workspace and project" /%}

5. On the Test tab, press Test trigger button. You can inspect the data comming from Asana. Press Continue with selected record.
   {% screenshot src="/assets/zapier/use_case_2/3.png" caption="Screenshot 3. Test trigger" /%}

## Configure fetch Test IO bug by External Id search (Test IO)

Now we have a trigger configured which will be triggered when a task is completed in Asana, the next step is to fetch all the information about this bug from Test IO. In this use case we only need the ID of the bug in Test IO, but in general, all the bugs exported from Test IO to other systems could be fetched using ID of the bug in this system.

Because this bug was exported from Test IO to Asana, it is possible to get data for this bug using id of the task in Asana, which is Task GID.

1. Search for and select Test IO Zapier app.
2. Select "Fetch Test IO Bug by External Id" search for the Event (required) field and press Continue button.
   {% screenshot src="/assets/zapier/use_case_2/4.png" caption="Screenshot 4. Select a search" /%}

3. On the Account tab, press Continue button or Sign In with your Test IO API token if not signed in.
4. On the Action tab, fill the External Bug ID (required) field with the "Gid" field coming from the previous trigger. Press Continue button.
   {% screenshot src="/assets/zapier/use_case_2/5.png" caption="Screenshot 5. Configure search" /%}

5. On the Test tab there are two options:

- Test step. This option is possible when in the previous Asana Zap on step 5, the real Asana task which were previously exported from Test IO was received.
- Skip test. This option should be used when we got fake data from the previous Zaps and such data do not exist in Test IO. Press "Skip test" button and the sample bug data will be available for the next steps.
  {% screenshot src="/assets/zapier/use_case_2/6.png" caption="Screenshot 6. Test trigger" /%}

## Configure mark bug as fixed action (Test IO)

At the previous step we fetched all the data for a bug from Test IO, the next step is to mark bug as fixed using the received bug data.

1. Search for and select Test IO Zapier app.
2. Select "Mark Bug as Fixed" action for the Event (required) field and press Continue button.
   {% screenshot src="/assets/zapier/use_case_2/7.png" caption="Screenshot 7. Select an action" /%}

3. On the Account tab, press Continue button or Sign In with your Test IO API token if not signed in.
4. On the Action tab, fill the Bug ID (required) field with the "ID" field coming from the previous action. Press Continue button.
   {% screenshot src="/assets/zapier/use_case_2/8.png" caption="Screenshot 8. Configure search" /%}

5. On the Test tab there are two options:

- Test step. This option is possible when in the previous Zap [Configure fetch Test IO bug by External Id search (Test IO)]() on step 5, the real bug from Test IO was received. If a test was skipped, the fake sample bug data was received and you should use the next "Skip test" option.
- Skip test. This option should be used when we got fake data from the previous Zaps and such data do not exist in Test IO. Press "Skip test" button and the sample bug data will be available for the next steps.
  {% screenshot src="/assets/zapier/use_case_2/9.png" caption="Screenshot 9. Test action" /%}

9. The last step is to publish the created Zap.
   {% screenshot src="/assets/zapier/use_case_2/10.png" caption="Screenshot 10. Publish Zap" /%}

**Congratulations**, you've created a new integration between Asana and Test IO using Test IO and Asana Zapier Apps.
If you have a need to sync bug status from any other systems, you can replace **Asana** with **other Zapier app**. There are Zapier Apps for **Jira, AzureDevOps, Github, Monday** and many more.
