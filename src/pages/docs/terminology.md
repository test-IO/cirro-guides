---
title: Terminology
description: Learn about the terminology used in Cirro.
---

Throughout our guides we use a set of terms that are specific to Cirro. This page explains the meaning of these terms.

## Space

A Space is a crowd business built on top of Cirro. It is an application built by you that uses Cirro as a backend for user/crowd functionality. A Space can be a crowdtesting platform, a microtasking platform, or any other crowd business.

## Worker

A Worker is a user of your Space who performs tasks to earn rewards. There can be other users in your Space, e.g. clients or admins, who are not Workers.

## Gig

A Gig is an opportunity for a Worker to perform a task (and earn a reward). Your Space can create Gigs which will trigger Cirro to start looking for matching Workers and invite them.

## GigResult

A GigResult represents one or multiple results by a Worker in a Gig. Your Space needs to submit GigResults to Cirro so that Cirro can reward the Worker accordingly.

## GigTimeActivity

A GigTimeActivity represents time a Worker spent on a Gig. Your Space needs to submit GigTimeActivities alongside GigResults to Cirro. Some Workers may be rewarded based on the time they spent on a Gig instead of their GigResults. By always submitting both you don't have to know or care which will be used.
