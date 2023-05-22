---
title: Example Space
description: The example Space we will be using in our guides.
---

To get you acquainted with Cirro, we will refer to a (fictional) example Space throughout our guides.

## Crowd tree planting

Our example Space is called "Crowd tree planting". It is a Space for a fictional company that organizes tree planting events. The company has a number of employees, and wants to build a platform to attract, manage, and reward volunteers for their events. They want to reward volunteers for each tree they plant. Some employees are responsible for reviewing the proof of the trees planted and approving or rejecting it. Those employees are called Approvers.

Additionally, the company wants to use the platform to allow their subsidiaries around the world to organize their own events. This means that the platform needs to support multiple languages.

### Mapping to Cirro terminology

Let's map the terminology used in Cirro to the terminology used in our example Space:

The platform the company is building is what we call a **Space**. The company's employees as well as the volunteers are **Users** of the Space. Approvers and volunteers are **Workers**. The events are **Gigs**. The trees planted are **GigResults**. The time spent planting trees is **GigTimeActivities**.

Whenever the company wants to organize a new event, they create it inside their Space which in turn creates a Gig in Cirro. Cirro will then find matching Workers and invite them to the Gig. During the event, Workers will submit proof of the trees they planted. The platform then will ask Approvers to review the proof and approve or reject it. For that purpose, another Gig is created in Cirro only inviting employees who are Approvers. Once approved, the platform will submit a GigResult and GigTimeActivity to Cirro. Cirro will then reward the Workers accordingly. Approvers won't be rewarded for their work, since they are employees of the company.
