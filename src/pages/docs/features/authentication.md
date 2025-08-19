---
title: Authentication
description: Authenticating your users with Cirro.
---

To talk to the Cirro API you need to first register your app in the [Cirro developer portal](https://cirro.io/developers).

## Authenticating your app

Once you have registered your app, you will receive your **app ID**.
You then need to generate your apps **private key file** (PEM format).
The developer portal allows you to generate this file and download it.
The private key file is used to sign the JWT token that is sent with each API request.

It should go without saying that you should keep your private key file secure.
If you lose it, you will need to generate a new one in the developer portal and update your app to use the new key.
With the private key file and app ID, you have full access to all API functions for your app, including managing
Gigs, Users, and other app settings.

Read more about how to use the private key file and app ID in the [API authentication documentation](https://api-docs.cirro.io/docs/authentication).

## Authenticating users

Users joining or signing in to your Space need to authenticate with Cirro using the OAuth2 protocol. When accessing your Space for the first time, Cirro users will be asked to approve sharing their profile information with your Space.

You start the OAuth2 flow by redirecting the user to the Cirro OAuth2 endpoint. The user will be asked to sign in to Cirro and - only the first time - approve sharing their profile information with your Space. After the user has approved, Cirro will redirect the user back to your Space with an authorization code. Your Space can then exchange this code for an access token.

Using the access token, you can finally [access the users profile information](https://api-docs.cirro.io/docs/users/me).
