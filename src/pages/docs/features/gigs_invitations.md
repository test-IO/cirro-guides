---
title: Gigs & Invitations
description: Creating Gigs and inviting Workers.
---

In the [Terminology](https://guides.cirro.io/docs/terminology) section we have already discussed **Gigs**; _a gig is an opportunity for a user to perform a task (and earn a reward). Your space can create gigs which trigger Cirro to start looking for matching users and invite them through an invitation notification._

To let Cirro invite Workers to perform tasks in your Space, you need to first [create a Gig](https://api-docs.cirro.io/docs/gigs/create) in Cirro. When creating a Gig you will provide a _title_, a _description_, a _start_at_ and _end_at_ as well as a _url_ to the Gig. You will also need to provide the number of _seats_ available in the Gig (the number of Workers you need to perform tasks), the _invitation mode_, and a _filter query_ used to match Workers to the Gig.

The lifecycle of a Gig is straight forward: _created_ -> _started_ -> _ended_ -> _archived_.

Workers are invited to a Gig between the _created_ and _ended_ phases. You are not allowed to update the attributes _title_, _description_, _url_ and _start_at_ if _start_at_ is in the past, and you can only delete a Gig with _start_at_ in the future.

While Cirro can handle the entire invitation process, every Space needs to provide a clear flow to:

- allow workers to view their invitations
- accept or reject an invitation
- view and access their gigs

Your Space communicates with Cirro in the background to keep important information in sync. After creating a Gig, your Space needs to inform Cirro about accepted invitations to prevent Cirro from spamming users with too many invitations.

## Invitation modes

There are two invitation modes: **auto** and **manual**.

### Auto invitation mode

This mode lets Cirro take care of the entire invitation process. Cirro uses invitation waves (by default every 5 min.) to invite matching workers to the gig, until all seats of the gig has been filled. To avoid spamming users with invitations, your Space should make sure to inform Cirro about accepted invitations via API. Should a worker leave the gig, Cirro will automatically re-engage invitations to fill the vacancy.

### Manual invitation mode

This mode lets your Space take control of the invitation process. Your Space can invite workers to the Gig by making API calls with instructions who to invite when.

## Invitation configuration

While Cirro can take care of the entire invitation process, including the **frequency** and seat **mulitplier** for invitation waves, your Space can configure the invitation process on a per Gig basis. This is useful for scenarios like small Worker pools or very short-term invitations.

Additionally, by setting the **minimum** and **maximum** number of seats for a Gig, you can control when invitation waves are triggered. For example, if you set the minimum number of seats to 5, Cirro will stop inviting Workers once 5 Workers have accepted their invitation. If a Worker leaves the Gig, Cirro will automatically re-engage the invitation process to fill the vacancy.
Setting the maximum number of seats will lead to all remaining invitations being expired once the maximum number of seats has been reached.

## Types of Gigs

Your Space may create Gigs for different kind of projects. There might be a Gig to find one volunteer to perform a single task. Another type of Gig mights require a large group of workers to perform a single or a variety of tasks. Cirro allows you to cover all there scenarios.

Examples of different types of Gigs:

### Single worker Gig

All you have to do to tell Cirro about a single worker gig is to create a gig with the number of seats set to **1**. Cirro will then invite matching workers until one accepted the invitation.

### Multiple workers Gig

Setting the total_seats of a Gig to anything greated than 1 will allow Cirro to invite multiple workers to the Gig. Cirro will continue to invite workers until all seats have been filled. The invitation can be fine-tuned by setting the minimum and maximum number of seats as well as the multiplier and frequency of invitation waves.

## Special case: Invitation attempts

Sometimes you want to have new Workers who just joined your Space get invitations to existing Gigs right away. To achieve this, you can call an API endpoint to create an invitation attempt, providing a Worker ID and a list of Gig IDs. Cirro will then verify to which of the provided Gigs the given Worker should be invited by checking the Gigs filter query against the Worker profile. If the Worker matches the filter query, Cirro will invite the Worker to the Gig immediately.
