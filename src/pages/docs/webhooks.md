---
title: Webhooks
description: Getting important updates from Cirro.
---
Webhooks are means of communication between apps; they provide a way in which apps convey information between each other. Each space can have one or multiple webhooks / configurations, each configuration containing the space's webhook url and a secret. Cirro uses webhooks to communicate with its space, currently it can inform its spaces about two events: 
* user.updated (happens when user information, such as first name, last name or skills for an Epamer are changed)
* invitation.created (happens when a user is invited to a gig for the first time)

In order to utilise webhooks
* you need to make sure event types are available
* configuration as well as subscriptions have been created
* you need to use the secret to authenticate your webhook urls

A space can either 
* subscribe to multiple different events using the same configuration (there is one single endpoint maintained, that receives and handles all webhook events from Cirro)
* use different configurations to subscribe to each event (there are multiple endpoints maintained, each receiving and handling a specific webhook event from Cirro)
