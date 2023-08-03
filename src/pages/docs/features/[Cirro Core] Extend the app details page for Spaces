# [Cirro Core] Extend the app details page for Spaces

**Please note these release notes contain yet to be released features as well!**

## Summary
In the current squad, we have introduced a new design on Cirro's Community interface and extended the app details of Spaces, so workers can access Space-related information prior to joining and contributing to a Space.

![Space details page]()

## Details
We have redesigned the card view of Spaces. Apart from implementing new design elements, we have introduced the following sections on the card of a given Space:
  * type of work available within the Space (free text)
    * offers a set list of available options via autocomplete
    * additionally, own value can be created
    * a space can have only one category
in compact view text background is above space title with smaller font
  * 'Gigs available' with numeric details
  * 'Gigs completed' with numeric details
  * 'Details' link leading to the details page of the given Space

![Card view]()

Space users can **join a Space** in two ways:
  * via card view by hitting 'Join' button (flash message is displayed)
  * via app details page by hitting 'Join' button (no flash message displayed)

[Joining a Space](https://)

**Visibility of the sections** are based on community membership:
  * for those with access, a full, detailed description is displayed
  * for those without access, the Space card is not visible at all
      * upon following the link of the restricted space a flash message is displayed

We have introduced the following sections on community.cirro.io:
  * type of work available within the Space (free text)
  * information on when the user joined the given Space
  * 'Gigs available' and 'Gigs completed' with numeric details
  * mandatory Space description (rich text)
  * list of supported interface languages
      * locales are displayed in a multi-select field
      * locales already in use can be excluded from the select options 
  * vendor / app contact information consisting of the following segments
  * company name
      * a link to a publicly available website or landing page 
      * a support contact email address
      * Social links (Discord, Slack and Teams)

![Space details page]()

The very same information has been implemented on developers.cirro.io in the 'Branding' section.

[Branding secttion](https://)

We have refactored 'Notification Locales' to be 'Locales'.

![Locales]()

**Feature yet to be released!**
We are currently working on the implementation of switching not to use subdomains by
  * patch based account selection
  * redirections to subdomains
