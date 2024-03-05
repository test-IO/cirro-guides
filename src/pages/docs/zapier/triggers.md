---
title: Triggers
description: Learn about the triggers implemented by the Test IO Zapier app.
---

## Test IO Triggers

Test IO Zapier App implements the following triggers:

- Bug Report Forwarded to Customer
- Bug Report Export Requested
- Exploratory Test Started
- Exploratory Test Ended
- Bug Fix Confirmation Status Changed
- Comment Added to Bug Report

The data provided in a **payload** of each trigger described below is available for using in other Zaps.

## Bug Report Forwarded to Customer

**Bug Report Forwarded to Customer** is triggered by Test IO when a new bug is created and approved by a manager in the Test IO platform.

**Payload:**
{% code language="javascript" showLineNumbers=false %}

```
{
  bug_report: {
    id: 1
  },
  customer: {
    uuid: 'e9802de8-3a0b-4630-86ae-9672bc83c9f9',
    subdomain: 'customer'
  },
  product: { id: 1 },
  product_section: { id: 1 },
  performed_at: '2020-07-13T09:33:14+02:00'
}
```

{% /code %}

## Bug Report Export Requested

**Bug Report Export Requested** is triggered by Test IO when a bug is accepted and exported from the Test IO platform.

**Payload:**
{% code language="javascript" showLineNumbers=false %}

```
{
  bug_report: {
    id: 1
  },
  actor: {
    id: 1,
    type: 'CustomerUser',
    user_id: 6,
    display_name: 'Denita Auer'
  },
  customer: {
    uuid: 'e9802de8-3a0b-4630-86ae-9672bc83c9f9',
    subdomain: 'customer'
  },
  product: { id: 1 },
  product_section: { id: 1 },
  performed_at: '2020-07-13T09:33:14+02:00'
}
```

{% /code %}

## Exploratory Test Started

**Exploratory Test Started** is triggered by Test IO when an exploratory test cycle was started in the Test IO platform.

**Payload:**
{% code language="javascript" showLineNumbers=false %}

```
{
  exploratory_test: {
    id: 1
  },
  customer: {
    uuid: 'e9802de8-3a0b-4630-86ae-9672bc83c9f9',
    subdomain: 'customer'
  },
  product: { id: 1 },
  product_section: { id: 1 },
  performed_at: '2020-07-13T09:33:14+02:00'
}
```

{% /code %}

## Exploratory Test Ended

**Exploratory Test Ended** is triggered by Test IO when an exploratory test cycle ends in the Test IO platform.

**Payload:**
{% code language="javascript" showLineNumbers=false %}

```
{
  exploratory_test: {
    id: 1
  },
  customer: {
    uuid: 'e9802de8-3a0b-4630-86ae-9672bc83c9f9',
    subdomain: 'customer'
  },
  product: { id: 1 },
  product_section: { id: 1 },
  performed_at: '2020-07-13T09:33:14+02:00'
}
```

{% /code %}

## Bug Fix Confirmation Status Changed

**Bug Fix Confirmation Status Changed** is triggered by Test IO when an a status is changed for bug fix confirmation in the Test IO platform. The possible statuses are:

- failed
- passed
- cancelled
- blocked
- expired

**Payload:**
{% code language="javascript" showLineNumbers=false %}

```
{
  bug_report: {
    id: 1
  },
  customer: {
    uuid: 'e9802de8-3a0b-4630-86ae-9672bc83c9f9',
    subdomain: 'customer'
  },
  product: { id: 1 },
  product_section: { id: 1 },
  bug_fix_confirmation: {
    id: 1,
    status: 'passed'
  },
  performed_at: '2020-07-13T09:33:14+02:00'
}
```

{% /code %}

## Comment Added to Bug Report

**Comment Added to Bug Report** is triggered by Test IO when an new commend is added to a bug in the Test IO platform.

**Payload:**
{% code language="javascript" showLineNumbers=false %}

```
{
  bug_report: {
    id: 1
  },
  comment: {
    id: 1,
    author_display_name: 'system user (CSM)',
    message: "Test IO Update: \n" \
              "This bug is fixed\n" \
              "Original Bug: #16\n" \
              "Link: http://customer.test.io/products/13/test_cycles/91/bugs/16\n" \
              "Bug Fix Confirmation: #102\n" \
              'Link: http://customer.test.io/products/13/internal_bug_fix_confirmations/102'
  },
  customer: {
    uuid: 'e9802de8-3a0b-4630-86ae-9672bc83c9f9',
    subdomain: 'customer'
  },
  product: { id: 1 },
  product_section: { id: 1 },
  actor: {
    id: 1,
    type: 'CustomerUser',
    user_id: 6,
    display_name: 'Denita Auer'
  },
  performed_at: '2020-07-13T09:33:14+02:00'
}
```

{% /code %}
