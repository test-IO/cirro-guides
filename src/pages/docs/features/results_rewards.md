---
title: Results & Rewards
description: Submitting results and rewarding Workers.
---

Cirro handles the rewarding of your Workers for the tasks they have delivered in your Space. You have full control over the rewarding process, including if and when a Worker gets rewarded and the amount they should be rewarded with.

In our example Space, Workers are asked to upload proof of having planted a tree. This proof is first verified by AI and - depending on the certainty of the AI verification - checked by a supervisor. Once successfully verified, the Space does not immediately submit the reward to Cirro. Instead, the Space waits for the end of the Gig to submit all rewards at once. This way, the Space can ensure that all Workers have completed their tasks before rewarding them.

After the Gig has ended, the Space submits one API call per Worker to Cirro, specifying the amount of trees planted by the Worker. This amount is multiplied by Cirro with the base price of the tree-planting task of the Gig. The Worker will be able to see all rewards they have accumulated in the [Cirro interface](https://cirro.io/community/rewards). They will be automatically paid out according to the payout schedule of Cirro (once or twice per month).

## Special case: EPAM badges

For Spaces operating within the EPAM ecosystem, Cirro can handle granting badges to Workers for excellent work in a Space. For that purpose Cirro provides an API endpoint allowing a Space to grant a badge to a Worker. The badge will be visible in the Worker's profile and can be used to show off the Worker's achievements.
