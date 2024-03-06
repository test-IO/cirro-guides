---
title: "Use Case 3: Sync Jira Issue Status"
description: Learn how to automatically sync Jira Issue status when a positive bug fix confirmation is received in Test IO.
---

## Overview

The [Bug Fix Confirmation Status Changed trigger](/docs/zapier/triggers#bug-fix-confirmation-status-changed) combined with the [Fetch Bug action](/docs/zapier/actions#fetch-bug) in the Test IO Zapier app allows you to update the bug's status in your bug tracker when Test IO receives a positive bug fix confirmation.

{% callout type="info" %}
This integration assumes the bug has already been exported from Test IO to Jira Cloud (or another bug tracker).
{% /callout %}

Here, we'll demonstrate how to sync Jira Issue status with Test IO using the {% link href="https://zapier.com/apps/test-io/integrations" target="_blank" %}Test IO{% /link %} and {% link href="https://zapier.com/apps/jira-software-cloud/integrations" target="_blank" %}Jira Software Cloud{% /link %} Zapier apps.

## Configure Bug Fix Confirmation Status Changed trigger (Test IO)

1. Search for and select the Test IO Zapier app.
2. Select "Bug Fix Confirmation Status Changed" as the Event (required) field and press **Continue**.
   {% screenshot src="/assets/zapier/use_case_3/1.png" caption="Screenshot 1. Select a trigger" /%}
3. **(Account Tab)** Sign in with your Test IO API token.
4. **(Trigger Tab)** Select your Test IO product and section (use 'default-section' if your product doesn't have sections). Press **Continue**.
   {% screenshot src="/assets/zapier/use_case_3/2.png" caption="Screenshot 2. Select product and sections" /%}
5. **(Test Tab)** Press **Test trigger**. You may need to repeatedly press **Find new records** until a bug fix confirmation with a "passed" status is found. Press **Continue with selected record**.
   {% screenshot src="/assets/zapier/use_case_3/3.png" caption="Screenshot 3. Test trigger" /%}

## Configure Filter by Zapier (Zapier)

1. Search for and select the Filter by Zapier app.
2. Select "Bug Fix Confirmation Status" from the previous trigger, "(Text) Exactly matches", and then enter "passed".
   {% screenshot src="/assets/zapier/use_case_3/4.png" caption="Screenshot 4. Filter setup" /%}
3. **Test the filter**. Ensure the test is successful, then press **Continue**.
   {% screenshot src="/assets/zapier/use_case_3/5.png" caption="Screenshot 5. Confirm testing" /%}

## Configure Fetch Bug (Test IO)

Now we'll fetch the bug details from Test IO:

1. Search for and select the Test IO Zapier app.
2. Select "Fetch Bug" as the Event (required) field and press **Continue**.
   {% screenshot src="/assets/zapier/use_case_3/6.png" caption="Screenshot 6. Select an action" /%}
3. **(Account Tab)** Authenticate with your Test IO API token if needed.
4. **(Action Tab)** In the Bug ID field, select "Bug Report Id" from the Bug Fix Confirmation trigger output. Press **Continue**.
   {% screenshot src="/assets/zapier/use_case_3/7.png" caption="Screenshot 7. Configure action" /%}
5. Press "Skip test" as the bug with Bug ID provided in the step 4 doesn't exists in Test IO. Sample data will be used.

## Configure Find Issue (Jira Software Cloud)

1. Search for and select the Jira Software Cloud Zapier app.
2. Select "Find Issue" as the Event and press **Continue**.
   {% screenshot src="/assets/zapier/use_case_3/8.png" caption="Screenshot 8. Select an action" /%}
3. **(Account Tab)** Authenticate with your Jira Cloud account if needed.
4. **(Action Tab)** In the Key field, select "External Id" from the previous Test IO action's output. Press **Continue**.
   {% screenshot src="/assets/zapier/use_case_3/9.png" caption="Screenshot 9. Configure action" /%}
5. Press "Skip test" as the Issue with Key provided in the step 4 doesn't exists in Jira Cloud. Sample data will be used.

## Configure Update Issue (Jira Software Cloud)

Let's update the Jira issue's status:

1. Search for and select the Jira Software Cloud Zapier app.
2. Select "Update Issue" as the Event and press **Continue**.
   {% screenshot src="/assets/zapier/use_case_3/10.png" caption="Screenshot 10. Select an action" /%}
3. **(Account Tab)** Authenticate with your Jira Cloud account if needed.
4. **(Action Tab)** In the Issue field, select "Key" from the previous action. Set the Status field to the appropriate value in your Jira Cloud workflow. Press **Continue**.
   {% screenshot src="/assets/zapier/use_case_3/11.png" caption="Screenshot 11. Configure action" /%}
5. Press "Skip test" as the Issue with Key provided in the step 4 doesn't exists in Jira Cloud.
6. **Publish your Zap!**

**Congratulations!** You've synced bug statuses between Test IO and Jira Cloud. Customize this integration by replacing Jira Software Cloud with other Zapier-supported bug trackers (AzureDevOps, GitHub, etc.).
