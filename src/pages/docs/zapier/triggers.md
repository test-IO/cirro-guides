---
title: Triggers
description: Learn about the triggers implemented by the Test IO Zapier app.
---

## Test IO Triggers

The Test IO Zapier app offers the following triggers to automate your workflows:

- **Bug Report Forwarded to Customer** - Triggered when a new bug report is approved by a manager in Test IO.
- **Bug Report Export Requested** - Triggered when a bug is accepted and exported from Test IO.
- **Exploratory Test Started** - Triggered when an exploratory test cycle starts in Test IO.
- **Exploratory Test Ended** - Triggered when an exploratory test cycle ends in Test IO.
- **Bug Fix Confirmation Status Changed** - Triggered when the status of a bug fix confirmation is updated in Test IO (possible statuses: failed, passed, cancelled, blocked, expired).
- **Comment Added to Bug Report** - Triggered when a new comment is added to a bug report in Test IO.

Each trigger provides a **payload of data** that can be used in your subsequent Zap steps. Below are examples of the payloads for each trigger.

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
