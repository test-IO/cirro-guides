---
title: Notifications
description: What are Cirro notifications?
---
With the help of the built-in Cirro notification system, you can communicate with users offline about the important topics of your space. Based on our [example space](https://guides.cirro.io/docs/example_space), you invite volunteers via notifications to participate in a tree-planting event or inform them about the number of trees planted during the most recent event they participated in. The Cirro notification system is ready to be used via API and can be easily configured and maintained though Cirro's UI. We recommend using it as it protects users personal information and makes it easier to focus on building and growing your space. Cirro does not provide a frontend interface for your users, thus online / live communication is not supported by Cirro Notifications, you have to build and operate your own application for this purpose. On this page you encounter some Cirro-related terms that you can look up [here](https://guides.cirro.io/docs/terminology).
	
## Cirro notifications
Communication with users is managed via **Notifications**. A notification represents a message sent to a user in a certain way at a particular point in time. Based on the needs of your space, you can configure a variety of delivery mechanisms. A common type of notification is the **"gig invitation"** notification, that is delivered each time when users match the criteria of a gig and have been invited to join. Using our example, the users are invited in an email to participate in the upcoming tree-planting event. 

### Notification Topic
Once a user is fully onboarded in your space, they can start receiving notifications of various kinds. Notifications are differentiated based on their **Notification Topic**. Every space has a **"new gig invitation"** notification topic created by default. You can set up additional space-specific notification topics, for example "onboarding completed" notification topic to notify users that they have completed the onboarding process of your space or "gig result accepted" notification topic to let users know that their work in the gig had been accepted and would be paid out.

### Notification Template
Each notification topic has a **Notification Template**, that defines the topic's delivery mechanism (email), format (text / html), kind (standalone / digest) and locale (en, de etc.). Currently you can set up four templates:
  * email-text-standalone
  * email-text-digest
  * email-html-standalone
  * email-html-digest

You can use dynamic variables with liquid syntax, here is an example for an html email template:

```
deliver_by: :email,
format: :html,
subject: '[Cirro] Invitation - %{gig_app_name} - %{gig_title}',
body: <<~HTML
  <p>Hello %{recipient_full_name},</p>
  <p>There is a new gig matching your profile.</p>
  <p style="line-height: 40px">Click on <a href="%{gig_url}">this link</a> to access all details</p>
HTML
```

### Notification Broadcast
If you wish to send a particular message to a certain or group of users, you need to create a **Notification Broadcast**. When you broadcast a message for a notification topic, Cirro is triggered to create individual notifications for each recipient defined in the broadcast, so each user receives your message.

### Notification Layouts
You can choose between two types of **Notification Layouts** to style your notification: Cirro (default) and Custom. If you use the Cirro (default) Layout, your message has a header with a logo, a body with the message and a footer with additional information. 

However, we recognize that Spaces are likely to reach a point where they do want control over every detail of their communication with users. In this case, you can create your own custom notification layout and attach your notification topics to it. This way you provide full layout plus content templates for your topics.

In case of an email notification, this means you will be responsible for the `<html>`, `<head>`, and `<body>` tags and everything there within.

#### Mandatory Placeholders
The one key caveat when you use custom layout is that you must now be sure to provide a placeholder in your email templates for the notice that Cirro legally must include in all emails to workers.
	
This notice will provide an unsubscribe link as well as additional information about the Cirro platform.
You will be unable to create or update templates for a topic that uses custom layout unless that templates include the `%{cirro_notice}` placeholder somewhere.
When crafting your own custom email templates, we recommend that you place this notice placeholder in a properly integrated "footer" section of the email.

