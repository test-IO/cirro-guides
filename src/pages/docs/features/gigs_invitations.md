---
title: Gigs & Invitations
description: Creating Gigs and inviting Workers.
---
In the [Terminology](https://guides.cirro.io/docs/terminology) section we have already discussed **Gigs**; *a gig is an opportunity for a user to perform a task (and earn a reward). Your space can create gigs which trigger Cirro to start looking for matching users and invite them through an invitation notification.* You could read further about notifications under [Notifications](https://guides.cirro.io/docs/features/notifications).

Before you could invite users to your space, it must tell Cirro about the gig that you want to invite the users to. Each gig goes through the created -> start -> end -> archived cycle. You invite users to join the gig between the start -> end phases. 

There are two invitation modes: **auto** and **manual**. Auto invitation allows Cirro to take control over the invitation flow of your gig, running in waves of 5 min intervals. It automatically calculates the vacancies and sends out invitations for matching users. You can send out manual invitations based on your space's needs.

Every space needs to provide a clear flow on how to:
* allow workers to view their invitations
* accept or reject an invitation
* view their gigs

Your space keeps this data in sync with Cirro in the background, letting the API know when a user has accepted or rejected an invitation.
As all of the spaces must keep Cirro up-to-date with whether or not a user has accepted an invitation, Cirro also provides an overview of all gigs across all spaces the user is active in.
