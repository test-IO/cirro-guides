---
title: Webhooks
description: Getting important updates from Cirro.
---

Cirro offers a way to get important updates from Cirro via webhooks. Currently there are two types of events that can be subscribed to:

- **user.updated** - happens when user information, such as first name or last name have changed
- **gig_invitation.created** - happens when a user is invited to a gig for the first time
- **gig_invitation.updated** - happens when a [Gig Invitation](https://api-docs.cirro.io/docs/gig_invitations/about) is updated
- **space_invitation.accepted** - happens when a user accepts a [Space Invitation](https://guides.cirro.io/docs/features/space_invitations)

In order to utilise webhooks you need to:

- configure the webhook endpoint URL(s) for your Space
- subscribe to the event types you are interested in
- make sure you authenticate each webhook request using the secret
