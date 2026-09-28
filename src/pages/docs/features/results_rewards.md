---
title: Results & Rewards
description: Submitting results and rewarding Workers.
---

Cirro handles the rewarding of your Workers for the tasks they have delivered in your Space. You have full control over the rewarding process, including if and when a Worker gets rewarded and the amount they should be rewarded with.

In our example Space, Workers are asked to upload proof of having planted a tree. This proof is first verified by AI and - depending on the certainty of the AI verification - checked by a supervisor. Once successfully verified, the Space does not immediately submit the reward to Cirro. Instead, the Space waits for the end of the Gig to submit all rewards at once. This way, the Space can ensure that all Workers have completed their tasks before rewarding them.

After the Gig has ended, the Space submits one API call per Worker to Cirro, specifying the amount of trees planted by the Worker. This amount is multiplied by Cirro with the base price of the tree-planting task of the Gig. The Worker will be able to see all rewards they have accumulated in the [Cirro interface](https://cirro.io/community/rewards). They will be automatically paid out according to the payout schedule of Cirro (once or twice per month).

## How Workers get paid

- **Only reported work is paid.** A Worker earns a reward only once the Space sends it to Cirro. Finishing the work is not enough on its own.
- **Rewards add up until they reach a threshold.** Each Worker sets a minimum amount in their payout settings. Once their unpaid rewards reach it, Cirro pays them automatically. There is nothing to request.
- **Payments go out twice a month.** Cirro runs payouts on the 11th and the 26th, and payments are issued on the first working day on or after those dates. The 26th run covers bank transfer only, and Workers can opt out of it. PayPal is paid once a month, on the 11th.
- **Workers must be set up to receive money.** They need automatic payout enabled, an active payment account and an approved tax form. Until then, their rewards wait and are not lost.
- **A returned payment pauses future payouts.** If a payment bounces, for example because of wrong bank details, the Worker is not paid again until it is resolved.
- **EPAM employees are paid by EPAM, not Cirro.** Work done on top of their regular project becomes an EPAM bonus, paid through EPAM payroll and shown on their Rewards page. Work done while on bench earns no bonus, because that time is already salaried.

## Cost centres

Every result or payout submitted to Cirro must state who pays for the work, so it can be booked by finance. A Space provides this with at least one of two fields, and may send both:

- `cost_center_key` (legacy): a single project or customer code. If only this is sent, the work is booked against the Space itself and no legal entity is recorded.
- `cost_center_data` (recommended): customer details, including the `legal_entity` that invoices the work. Accepted values are `GMBH` (Test IO GmbH), `INC` (Test IO Inc.), `EPAM_CLI` (EPAM, client project) and `EPAM_INT` (EPAM, internal work).

Send `cost_center_data` whenever you know the customer. Earnings without it cannot be attributed to a legal entity in finance reports.

## Special case: EPAM badges

For Spaces operating within the EPAM ecosystem, Cirro can handle granting badges to Workers for excellent work in a Space. For that purpose Cirro provides an API endpoint allowing a Space to grant a badge to a Worker. The badge will be visible in the Worker's profile and can be used to show off the Worker's achievements.
