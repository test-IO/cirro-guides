---
title: Notifications
description: Using the Cirro notification system.
---
## What are Cirro notifications?
Communicating with your users is essential in order to maintain a well-functioning web application, thus a crowd-working service. In addition to the Cirro provided tools to make identity management, gig management, and invitation management simpler for you and your workers, we equip you with multiple means of communication.

## Terminology
### Notifications
Before we clarify technical details, we need to understand notification-related terminology using our tree-planting example.
All communication with users is managed via **Notifications**. A notification represents a particular message sent to a particular user at a particular point in time. The most common type of notification that a user will receive is the **"gig invitation"** notification that they receive each time when they match the criteria of a gig and have been invited to join using a variety of delivery mechanisms configurable based on project needs, utilising the Cirro worker interface and the user's email address. E.g.: A volunteer ('User' of the 'Space', once approved 'Worker') is invited to participate in a tree-planting event ('Gig') via an email or Cirro interface.

### Notification Topic
Once a user finishes their onboarding, they can start receiving invitations by Spaces. These invitations can be of various kinds, each kind is being represented by a **Notification Topic**. To ensure smooth communication with users, setting up and configuring your notification topics are of priority when setting up a Space.

We distinguish two different types of topics:
   * Internal - any notification topics created for you by Cirro
   * Regular - any notification topics you create yourself

Every Space has a "new gig invitation" notification topic created by default (you won't be able to create a broadcast for the "new gig invitation" topic, Cirro will internally trigger this topic whenever a worker is invited to one of your Space's gigs), but additional notification topics can be created to communicate with workers effectively. E.g.: "onboarding completed" to notify a volunteer ('User') that they have completed the platform's ('Space') onboarding process, "gig result accepted" to notify a volunteer ('User') that their work in the tree-planting activity ('Gig') has been accepted, thus going to be paid out.

You can **configure** your Space's email notifications to use Cirro's default notification layout or not. By default, all new topics including the "new gig invitation" topic are configured to use Cirro's default notification layout. From the perspective of email notification this means that the email templates for a topic are content templates which content will be inserted into a larger email layout that provides the necessary infrastructure for a solid email. This allows all Spaces to be up and running quickly without having to think about specialized branding.

If you wish to set up your Space in a way that it controls all details of communication with users, you can **create your own custom notification layout** and attach your notification topics to it. This way you provide full layout plus content templates for your topics. From the perspective of email notification this means that you will be responsible for the `html`, `head`, and `body` tags and everything within. Your topics should be named with simple phrases that succinctly capture the event that triggers notifications being sent for the topic (e.g.: "onboarding completed", "gig result accepted", "new gig invitation") and formatted in underscore or "snakecase" format (e.g.: "onboarding_completed", "gig_result_accepted", "new_gig_invitation"). You will receive an error message if you attempt to create or update a topic and use a different topic name format.

When using custom layout you must provide a **%{cirro_notice}** placeholder in your email templates in a properly integrated footer section for the notice that Cirro must include legally in all emails to workers. This notice provides an unsubscribe link as well as additional information about the Cirro platform. You won't be able to create or update templates for a topic that uses custom layout unless they include this placeholder.

### Notification Template
Each notification topic has **Notification Templates**, the content for a topic's message in a certain locale with placeholders for dynamically building customized messages for particular notifications. Notification Templates can be for one of either two delivery mechanisms (in-app and email) and one of either two formats (html and text) and one of either two kinds (standalone and digest).

### Notification Broadcast
If you wish to send a particular message to one or more recipients, you need to create a **Notification Broadcast**. When you broadcast a message for a notification topic, Cirro will be triggered to create individual notifications for each recipient defined in the broadcast.
