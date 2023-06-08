---
title: Notifications
description: What are Cirro notifications?
---
With the help of the built-in Cirro notification system, you can communicate with users about the important topics of your space. Based on our [example space](https://guides.cirro.io/docs/example_space), you invite volunteers via notifications to participate in a tree-planting event or inform them about the number of trees planted during the most recent event they participated in. The Cirro notification system is ready to be used via API and can be easily configured and maintained though Cirro's UI. We recommend using it as it protects users personal information and makes it easier to focus on building and growing your space. Unfortunately, online / live communication is not supported by Cirro Notifications, only offline.
	
## Cirro notifications
Communication with users is managed via **Notifications**. A notification represents a message sent to a user in a certain way at a particular point in time. Based on the needs of your space, you can configure a variety of delivery mechanisms. A common type of notification is the **"gig invitation"** notification, that is delivered each time when users match the criteria of a gig and have been invited to join. Using our example, the users are invited in an email to participate in the upcoming tree-planting event. 

### Notification Topic
Once a user is fully onboarded in your space, they can start receiving notifications of various kinds. Notifications are differentiated based on their **Notification Topic**. Every space has a **"new gig invitation"** notification topic created by default. You can set up additional space-specific notification topics, for example "onboarding completed" notification topic to notify users that they have completed the onboarding process of your space or "gig result accepted" notification topic to let users know that their work in the gig had been accepted and would be paid out.

### Notification Template
Each notification topic has a **Notification Template**, that defines the topic's delivery mechanism (email), format (text / html), kind (standalone / digest) and locale (en / de). Currently you can set up four templates:
  * email-text-standalone
  * email-text-digest
  * email-html-standalone
  * email-html-digest

### Notification Broadcast
If you wish to send a particular message to a certain or group of users, you need to create a **Notification Broadcast**. When you broadcast a message for a notification topic, Cirro is triggered to create individual notifications for each recipient defined in the broadcast, so each user receives your message.

### Notification Layouts
You can choose between two types of **Notification Layouts** to style your notification: Cirro (default) and Custom. If you use the Cirro (default) Layout, your message has a header with a logo, a body with the message and a footer with additional information. If you opt for the Custom Layout, you need to give your notification a name and configure if you want to deliver it as a standalone or a digest message. You can create multiple custom layouts.
