---
title: Okta Configuration Guide
description: How do I use Okta to login to Cirro?
---

## How do I use Okta to login to Cirro?

The Cirro Okta integration allows clients to manage access of their employees and entire departments to all crowd solutions built on top of Cirro, including Test IO, acting as a Single Sign-On provider. Authentication is handled through the SP-initiated SSO flow, meaning users start the login process from Cirro and are redirected to Okta for verification.

## Prerequisites

- Your organization has an active Okta account.
- You have the necessary admin permissions in Okta to install and configure applications.

## Configuration steps

### Locate our app

- Go into your company's Okta admin console and navigate in the left sidebar to **Applications** > **Applications**.
- Look for **Browse App Catalog** button on the top right corner of the page and click it.
- In the search bar, type **"Cirro"** and select the Cirro app with OIDC tag.
- Click on **Add Integration** button to start the installation process.

### Install the Cirro Okta App

Follow [these instructions](https://help.okta.com/en/prod/Content/Topics/Apps/Apps_Apps_Page.htm) in order to install our app.

**Important!** During the installation process, you will need to fill in the "Customer Name" field, which is a required installation attribute for our app. You can find this field under the "General" tab of the app configuration. It must be populated with your tenant identifier, a unique value we'll provide to you in advance.

- The identifier is a critical part of the configuration and will be used as an integration variable to create a unique redirect URL for your organization (e.g. if identifier is `best_company`, then redirect URL will be `https://cirro.io/users/auth/okta_best_company/callback`).
- You will not be required to enter the callback URL manually, the app will generate it automatically based on the tenant identifier you provide.
- The identifier should be entered as it is provided to you, in lowercase, using snake_case formatting for multiple words (e.g. 'best_company').

If you have not received your tenant identifier in a prior communication with us, please reach out to us at [engineering@cirro.io](mailto:engineering@cirro.io) before beginning the installation process. Our team will provide this value to you after verifying your request.

The logout URL is optional, but if you want to set it, you can use your URL from where users are redirected to our Cirro login page (e.g. `https://best_company.test.io`)

For more details on integration variables, refer to the [Okta documentation here](https://developer.okta.com/docs/guides/submit-oin-app/-/main/#integration-variables).

### Send the Authentication Information to Cirro

1. Open the Cirro app in your Okta admin console.
2. Navigate to the Sign On tab.
3. Copy the following values:
   - Client ID
   - Client Secret
4. Copy your okta organization URL that Cirro is going to use in order to authenticate your users. It is the URL that you access the organization with. [Read more](https://developer.okta.com/docs/guides/find-your-domain/main/#find-your-okta-domain)

### Send email with the collected information

After you have the **Client ID**, **Client Secret**, and the **Okta Organization URL**, please email your Cirro point of contact or to [engineering@cirro.io](mailto:engineering@cirro.io) with this information.

To ensure the security of the Client Secret, please use an encrypted email service or a secure file-sharing tool to share it. Please notify us if you need assistance setting up a secure method to share the Client Secret.

Example:

```
Client ID: 2ac7d9c15f17dc1a17cf4
Client Secret: [Provide securely, 1Password or similar service recommended]
Okta organization URL: [your Okta org URL, like https://best_company.okta.com]
Username Email Domain: [domain used by users to log in to Cirro, like best_company.test.io]
```

We will review the information and confirm once the integration is set up and ready for testing.

## SP-Initiated SSO Flow

Cirro supports SP-initiated SSO for login. This means users start the login process from Cirro's login page and are redirected to Okta for authentication. Once authenticated, they are redirected back to Cirro and granted access.

Login Steps:

1. Navigate to your organization's specific Cirro login page (provided after the integration setup).
2. Click the "Okta" button.
3. Enter your Okta credentials if prompted.
4. Upon successful authentication, you will be redirected to your Cirro dashboard.
