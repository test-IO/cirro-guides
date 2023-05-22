---
title: Scope of Cirro
description: What Cirro can and can't do for you.
---

## The purpose of Cirro

Cirro was created by the people behind [Test IO](https://test.io/), a crowdtesting company, to enable anyone to build their own crowd business. Cirro is a Backend as a Service that provides all core functionalities to run a crowd business, including but not limited to: **Authentication**, **Gigs & Invitations**, **Results & Rewards**.  
Every worker for any crowd platform (we call them Spaces) built on top of Cirro has access to the Cirro.io community web interface, allowing them to manage their profile, configure payout settings, and see the list of available Spaces they might want to join. This means that Cirro not only provides a tried and tested list of backend functionalities, but also access to a community of workers which are performing tasks for different crowd businesses already.

## What Cirro is not

Cirro does not provide a frontend interface for your workers to perform and submit tasks. You have to build and operate your own application - including data storage and processing - to provide your workers with a way to perform tasks and fetch/submit data from and to Cirro.  
However, we provide a sample Space (currently only in Ruby on Rails) that you can use as a starting point for your own Space. You can find the source code for the sample Space [here](/TBD).

## What Cirro can do for you

Here is the list of features that Cirro provides out of the box:

- **Authentication** - Authenticate your users - Clients and Workers - via Cirro OAuth.
- **Gigs & Invitations** - Create Gigs and let Cirro find Workers to invite.
- **Results & Rewards** - Tell Cirro about results and reward workers for their work.
- **Notifications** - Let Cirro handle all offline communication with your users.
- **Space Invitations** - Use Cirro to invite new users to your Space.
- **Skill Sync** - Fetch a (sub)set of skills from Cirro allowing to filter workers by them.

Workers are typically rewarded with money for their work. Cirro handles the payout for you by integrating with a payment provider. Workers can configure their payout settings in the Cirro.io community web interface.
