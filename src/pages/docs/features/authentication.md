---
title: Authentication
description: Authenticating your users with Cirro.
---

To talk to the Cirro API you need to first register your app in the [Cirro developer portal](https://developers.cirro.io/).

Once you have registered your app, you will receive your **app ID**.
You then need to generate your apps **private key file** (PEM format).
The developer portal allows you to generate this file and download it.
The private key file is used to sign the JWT token that is sent with each API request.

It should go without saying that you should keep your private key file secure.
If you lose it, you will need to generate a new one in the developer portal and update your app to use the new key.
With the private key file and app ID, you have full access to all API functions for your app, including managing
Gigs, Users, and other app settings.

Read more about how to use the private key file and app ID in the [API authentication documentation](https://cirroapiv2.docs.apiary.io/#introduction/authentication).
