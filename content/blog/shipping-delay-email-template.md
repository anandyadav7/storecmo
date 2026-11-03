---
title: "Shipping Delay Email Template That Prevents Refunds"
description: "The template sits inside three decisions: the trigger that fires it, the date it promises, and the compensation it attaches. The compensation levers are ranked by what each one costs a lean store against what it buys."
publishedAt: 2026-11-03
updatedAt: 2026-11-03
category: "Ecommerce marketing"
tags: shipping delay email, ecommerce refunds, customer retention, post-purchase email, shipping notifications
seoTitle: "Shipping Delay Email Template That Prevents Refunds"
seoDescription: "A shipping delay email template protects margin only when paired with the right send timing, promised date, and compensation choice."
---
Send the delay email the moment the promised ship or delivery date slips, give one specific new date, and offer compensation that costs you less than a refund: shipping cost back, or a credit on the next order. That ordering is the whole decision. The template below is the easy part.

The hard part is the three choices sitting behind it. When to send. What date to promise. What to give away. Get those wrong and the email either arrives after the customer has already opened a chargeback, or it hands back margin you did not need to lose.

This is written for a one- or two-person team running the store, the email tool and support out of the same inbox.

## What has to be true before you can write the email at all?

You cannot write a useful delay email without knowing what the customer was originally told, and that number lives in your shipping settings, not in your head. Shopify lets you attach a transit time to each shipping option, picked from a suggested list or entered as a custom value such as `3-5 days` or `3 days`, and it shows at checkout next to the rate ([Shopify's shipping zones and rates documentation](https://help.shopify.com/en/manual/fulfillment/setup/shipping-rates/setting-up-shipping-rates)). That transit time, plus your own processing window, is the promise the delay email has to measure itself against.

The second number is what the customer paid for shipping, because that is the refund you are about to offer. Do not assume it from your rate table. When an order contains products from several shipping profiles, Shopify combines the applicable price-based rates, so a $5 discounted rate active in two profiles, on a $55 order containing products from both, shows the customer $10 at checkout rather than $5 (same Shopify page). Check the order itself before you promise the money back. Our [guide to free shipping versus flat rate](/blog/free-shipping-vs-flat-rate) covers what those settings can express in more detail.

## When should a shipping delay email be sent?

Send it when the fulfillment state misses the promise, not when the customer asks. Two triggers cover almost everything a lean store sees:

1. **Order still unfulfilled past your stated processing window.** The delay is yours. You know about it before the carrier does.
2. **Shipped, but tracking has not moved past the promised delivery date.** The delay is the carrier's. You still own the message.

The first one is automatable in an email tool that syncs your store's order events. In Klaviyo, a flow triggered by Shopify's *Placed Order* event can wait out your processing window with a time delay, then use a conditional split on whether a *Fulfilled Order* event has arrived since the flow started. Klaviyo tracks that event when an order syncs with a fulfillment status of "fulfilled" ([Klaviyo's Shopify data reference](https://help.klaviyo.com/hc/en-us/articles/115005080447)). Orders that shipped on time take the fulfilled branch and leave the flow without an email. Only the late ones reach the delay message.

Set the time delay to your own real processing window. A made-to-order brand that tells customers five business days should not fire an apology on day three.

The carrier-side delay is harder to automate and usually gets sent by hand, as a support macro or a filtered send to the affected orders. That is fine. It happens less often.

## What should the shipping delay email actually say?

One template, five slots. Everything in it is a field you already have in the order record.

```
Subject: Update on order #[Order Number]: your new delivery date

Hi [Customer Name],

Your order has not shipped on time and that is on us.
Here is where it stands.

What you were told: delivery by [original date]
What is true now:   shipping [new ship date],
                    delivery [new delivery window]
Why:                [the specific reason, named plainly]

We have refunded your shipping charge to your original
payment method.

If [new delivery window] is too late, reply to this email
and we will cancel and refund the order in full today,
no questions.

[ Track your order ]

We will email you again on [date] whether or not it has moved.

[Name], customer support, [store name]
```

Five things are doing the work:

- **The original date, restated.** The customer is comparing your new date to a number they half-remember. Put the old one next to the new one and the size of the problem stops being a guess.
- **One specific new date, with a range only for carrier transit.** A ship date is yours to control, so state it exactly. Delivery is the carrier's, so a range is honest.
- **A real reason, in one line.** "Unforeseen circumstances" invites a reply. A named cause does not.
- **The compensation, already applied.** Not offered. Applied, with the amount and the method stated.
- **A promised next update, dated.** This is the line that prevents the second email, the one where they ask what is happening.

Name a real person in the signature. A store with two people has two people; signing as "The Team" on a message about your own mistake reads as a company hiding behind itself. Our view: the dated next-update line earns more goodwill per word than the apology does.

## Which compensation prevents a refund, and which just costs you margin?

Rank the levers by what they cost you against what they buy. The goal is to keep the order, because a canceled order loses the margin, the acquisition cost and the chance of a second purchase at once, so weigh each lever's cost against your [average order value](/tools/average-order-value-calculator) rather than against the full price of the item.

| Lever | What it costs you | When it is the right call |
| --- | --- | --- |
| Dated next update, no money | Nothing | Delay under a few days, customer has not contacted you |
| Refund the shipping charge | What the customer paid for shipping | Your fault, order still wanted, most common case |
| Store credit or next-order discount | Margin on a future order you may have had anyway | Delay is long but the item is still wanted |
| Free shipping code for next order | Shipping cost on one future order | Customer bought at a flat rate and noticed it |
| Expedite at your cost | Difference in carrier rate, on top of the original | Dated gift, event, anything with a hard deadline |
| Full refund | The whole order | Only when they ask, or the item cannot arrive in a usable window |

A note on the free shipping code, because it is the lever that quietly misfires. If you reuse an existing free shipping discount that carries a minimum purchase amount, the apology only works when the customer's next basket clears that minimum, and Shopify counts product prices only toward it, at their discounted price when another combinable discount already applies ([Shopify's free shipping discounts documentation](https://help.shopify.com/en/manual/discounts/discount-types/free-shipping)). A small reorder can fall short and the "gift" fails at checkout. Create a separate code with no minimum, and limit it to one use per customer, which Shopify tracks by email address or phone number. Usage is unlimited by default, so set that limit deliberately.

If you are deciding how much shipping cost you can absorb at all, our [free shipping threshold calculator](/tools/free-shipping-threshold-calculator) works out the order value above which free shipping stops eating your margin, and that figure sets the ceiling on what a delay apology can reasonably give away. The same arithmetic sits behind [protecting profit per order](/blog/ecommerce-pricing-strategy), which is worth reading before you make shipping refunds a standing policy.

## How do you send it with the tools a lean store already has?

Three routes, and you probably want two of them running at once.

**Shopify's contact customer notification, for a one-off.** Shopify lets you add a custom message to several notifications, including contact customer, so a single delay note can go out from the store without another tool. If you edit a notification template and the edit goes wrong, Shopify's Revert to option restores the previous or the default version, replacing only the template content and leaving your logo and color choices alone ([Shopify's customizing email notification templates documentation](https://help.shopify.com/en/manual/fulfillment/setup/notifications/customizing-notification-template)).

**Klaviyo flow, for the store-side delay.** This is where the automated unfulfilled-order version lives, using the time delay and fulfilled-order split described above.

**A support macro, for the carrier-side delay.** Gorgias publishes a set of macro examples for exactly these conversations, including a "not shipped" macro for an order still inside the processing window and a "refund last order shipping cost" macro intended as a goodwill gesture, which pre-writes the message, pulls in the order details, tags the ticket and refunds the shipping cost ([Gorgias documents its macro templates](https://docs.gorgias.com/en-US/macro-templates-82032)). A macro that performs the refund as well as writing the message is the version you want. Two separate steps is where the refund gets forgotten.

If you are handing the writing of these to an AI tool, the rule from our [four-week AI setup for lean stores](/blog/ai-ecommerce-marketing) applies here more than anywhere: nothing reaches a customer unreviewed. A delay email with a wrong date is worse than no delay email.

## What does the delay do to your review request and repeat purchase?

A shipping delay breaks the timing that your [review request email template](/blog/review-request-email-template) depends on. Most review requests run on a fixed clock from the order or from fulfillment, and a delayed package can still be in transit when that clock runs out.

Yotpo's default is to send an automatic review request 14 days after an order is processed, and its own guidance is to adjust that number so the request lands after the customer has the product and has had time to form an opinion. If a delay pushes delivery out further than that window, a request still running on the original 14-day clock can land while the box is still in transit. Reminders should leave at least two weeks between them, and only customers who have not written a review yet should get one ([Yotpo's review-generation best practices](https://support.yotpo.com/docs/best-practices-for-generating-yotpo-reviews)).

If you run Judge.me's review requests through Klaviyo, the same problem sits one layer down: the request event fires when the order is marked fulfilled in your store, and you add your own wait time in the flow, for which Judge.me's example is 7 days after the order is fulfilled. To keep a delayed batch out of the flow, the trigger filters include the "placed_at" dimension with the "doesn't equal" condition to skip orders placed on a certain date, and the "email" dimension with the "doesn't equal" condition to skip a specific customer ([Judge.me documents the Klaviyo integration](https://judge.me/help/en/articles/8259593-sending-review-requests-via-klaviyo)). Two limits apply: the integration is available on Judge.me's Awesome plan only, and the in-email review form only works inside Judge.me's own templates.

Where your email tool can see delivery, wait for it instead of trusting a day count. Klaviyo syncs a *Delivered Shipment* event from Shopify, but only when Shopify has that data, and Shopify only gets delivery notifications for certain carriers (Klaviyo's Shopify data reference, linked above). If your carrier is not one of them, lengthen the wait for the delayed orders or exclude them by placed date.

And be careful what you measure afterward. A cohort that hit a delay will show a worse repeat rate, but so will a cohort you simply measured over too short a window, which is the trap described in [repeat purchase rate benchmarks](/blog/repeat-purchase-rate-benchmarks). Give the cohort time before you decide the delay cost you the relationship.

## Where does this template fail?

Four ways, in rough order of how often they happen.

**You promise a date you do not control.** The most common failure. If the item is on backorder from a supplier who has not confirmed anything, a specific ship date is a second promise to break. Promise the next update instead, dated, and keep that one.

**The compensation becomes the policy.** Refunding shipping on every late order is a standing discount on your worst weeks. If more than a small share of orders trigger the email, the problem is the transit time you advertise at checkout, not the apology. Change the number at checkout.

**The automation fires on healthy orders.** A time delay set shorter than your real processing window apologizes to people who were never late, which teaches them your dates are soft. Check the flow against a week of actual fulfillment timestamps before turning it on.

**Nobody has capacity to answer the replies.** This email invites a reply, deliberately. If replies sit for two days, you have converted a quiet delay into a visible one. Do not turn the flow on during a week when nobody is watching the inbox.

## Frequently asked questions

### What is a shipping delay email template?

A shipping delay email template is the message you send a customer when an order will miss the date you promised them. It restates the original date, states a firm new one, gives the reason in plain terms, and attaches whatever compensation you have already decided to offer. Using a template keeps those four parts consistent every time, rather than reinventing them under pressure.

### How soon after a delay should the email go out?

As soon as the order misses your stated processing window, or as soon as tracking fails to move past the promised delivery date. For the unfulfilled case you can automate it: a time delay set to your own real processing window, then a conditional split that only emails orders still unfulfilled. Orders that shipped on time never see it.

### Should you offer a discount or refund the shipping cost?

Refund the shipping charge first, because it costs you only what the customer paid for shipping and it keeps the order. A next-order credit or free shipping code is the next step up for longer delays. A full refund is for when the customer asks, or when the item cannot arrive in a window that is still useful to them.

### Does the delay email change when your review request should send?

Yes. A review request timed as a fixed number of days from order or fulfillment can arrive while a delayed package is still in transit. Wait for a delivery event where your tools receive one, otherwise lengthen the wait for delayed orders, and leave at least two weeks between any reminders.

## Next step

Open your shipping settings and write down the transit time a customer sees at checkout for your most common rate. Then pull a week of orders and compare the actual fulfillment timestamps against it. The gap between those two numbers tells you both the trigger for the delay email and whether you need the email at all or just an honest number at checkout.

If the number at checkout is the real problem, start with [free shipping versus flat rate](/blog/free-shipping-vs-flat-rate) and what each does to margin rather than writing the apology. How much margin a late order is worth giving back is still a judgment call for whoever owns the store.

[StoreCMO is in development.](/product)
