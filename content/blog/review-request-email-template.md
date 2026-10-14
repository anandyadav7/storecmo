---
title: "A Review Request Email Template That Earns Real Reviews"
description: "Timing, product context and a single ask decide whether a review request gets answered. Five parts make up the email, and a submitted-review condition ends the sequence instead of a send count."
publishedAt: 2026-10-14
updatedAt: 2026-10-14
category: Ecommerce marketing
tags: review request email, customer reviews, ecommerce email, UGC collection, email automation
seoTitle: "A Review Request Email Template That Earns Real Reviews"
seoDescription: A review request email template built around delivery timing and one ask, with variants, guard conditions and a rule for when to stop sending.
---

A review request email template is one email built from five fixed parts: a sender customers recognise, a subject line naming the product, the product the customer actually bought shown with its image, one review link (the one your review app issues for that purchase), and one sentence telling the customer what to write about. The trigger sits outside the template: tie it to delivery rather than fulfillment.

Default timing: send after the product has arrived and the customer has had time to use it, not when the order is marked fulfilled. Default stop rule: cap the sequence at one request plus two reminders, and end it the moment a review is submitted rather than after a set number of sends.

Swipe copy volume is not what holds review counts down. Timing and friction are. So this guide builds one email properly, then adapts it into variants for photo requests, repeat buyers and people who ignored the first ask.

## What does a review request email actually need to contain?

Five parts, nothing else.

1. **Sender**: a name customers recognise from the order confirmation.
2. **Subject line**: name the product they bought.
3. **Product block**: that product's title and image, pulled from the order.
4. **One call to action**: a single button on the review link your app generates for that purchase.
5. **One guidance question**, aimed at the thing shoppers hesitate over, such as how the sizing compared.

That fifth part is doing more work than it looks. Picking the right question is the same exercise as working out which objection a product page has to answer, which our guide to [writing a product description that sells](/blog/how-to-write-a-product-description-that-sells) works through: the useful review is the one that resolves the doubt your next visitor already has.

Test it on a real order first. [Yotpo](https://support.yotpo.com/docs/creating-a-review-request)'s documentation warns that merge tags "will appear as-is in test emails" and populate only in actual customer emails, so create and fulfill a test order, leave a review through the button on that email, then check the review shows as verified in the review app. If pointing the button at the right link means editing template code, that is the moment to ask a developer rather than guess.

## When should you send the review request?

Two decisions: what triggers the send, and how many days you wait after that.

Trigger on delivery where your tools allow it. Yotpo's setup guide says its review requests go out 14 days after the order is processed by default, and that Shopify users on the Starter plan and above can schedule from the delivery date instead of the purchase date, keeping the days-after-fulfillment number as a fallback in case delivery is never confirmed. Delivery status is updated directly by the carrier only for USPS, UPS, FedEx, Canada Post and Sendle; other carriers need a third-party shipping app that sends delivery statuses to Shopify.

Then set the wait by how long the product takes to form an opinion about. Asking for feedback before the product has been received is one of the most common causes of negative reviews, according to [REVIEWS.io's guidance on invitation timing](https://blog.reviews.io/post/timing-is-everything-ask-for-reviews-at-the-right-time), which recommends 10 to 14 days after delivery for skincare and describes Trekking Backpacks sending invites 30 days after delivery because that is when its customers start using the product.

![Review request sequence: the order is fulfilled, a delivery check gates the wait, then the request email sends. A submitted-review check ends the sequence immediately, and only non-responders continue to a first and then a second reminder, after which the flow ends regardless.](/images/blog/review-request-sequence-stop-condition.svg)

Sooner is not automatically better. Two randomized field experiments with over 300,000 consumers, published in the *Journal of Marketing* by Miyeon Jung, Sunghan Ryu, Sang Pil Han and Daegon Cho and [summarised by the American Marketing Association](https://www.ama.org/2023/01/10/asking-for-customer-reviews-at-the-right-time-sooner-is-not-always-better/), found that a reminder sent faster than the number of days customers typically take to write a review causes problems rather than collecting more feedback.

The test to apply to your own catalogue: how many days until a customer could plausibly answer the question in your email? Set the delay to that, per product group. Be clear about what timing buys you, though. The American Marketing Association summary notes that except for review specificity, the timing of review reminders has a negligible effect on review content such as ratings, sentiment, or length.

## What does the base template look like, line by line?

Here is the one copy block, with placeholders you swap for your tool's own personalization fields.

```
Subject: How is the [product title] working out?

Hi [first name],

Your [product title] left us on [order date], so you have
probably had a chance to use it by now.

[product image]

One question, if you have 30 seconds: [the thing shoppers ask
about most, for example "how did the sizing compare to what
you expected?"]

[ Rate this product ]

Thanks,
[first name of a real person], [store name]

[unsubscribe link]
```

Why each line is there:

- The subject names the product because the customer is being asked about one thing, and the image does the rest of the personalization work. A customer who bought three items needs to know which one you mean.
- The question shapes what the review says. A star rating on its own does not help a hesitant shopper; a line about fit does.
- One button, pointing at the review link for that purchase. Every extra link splits the click.
- The unsubscribe link stays, and it is worth adding a line for customers whose order has not arrived yet, so their reply is an email to you rather than a one-star review.

Cut anything else. A second product, a discount banner, a social row: each one is a competing ask.

## How do you adapt it for photos, repeat buyers and non-responders?

Change one element per variant and leave the rest alone.

**Photo or UGC request.** Change the ask and the button, not the timing. The sentence becomes a request for a photo of the product in use, and the button says so. Offering to feature the photo costs nothing and often does the work an incentive would. Keep the same review link behind the button.

**Repeat buyer.** Change the opening line only. Someone on their fourth order does not need to be told the parcel shipped; they need acknowledging as a returning customer. Identifying that segment honestly is harder than it looks, and the measurement window changes the answer, which is what our post on [repeat purchase rate benchmarks most stores misread](/blog/repeat-purchase-rate-benchmarks) works through for Shopify data.

**Non-responder reminder.** Change the framing, not the offer. Leave real time between the two: [Yotpo's best practices guide](https://support.yotpo.com/docs/best-practices-for-generating-yotpo-reviews) says to add an extra reminder for customers who have not written a review yet, and to leave at least two weeks between reminders.

What must stay identical across all three: the trigger, the delay, the review link and the single-ask structure. Stamped gives each email in a sequence its own subject line and content and tracks conversion rates per sequence, so you can tell which variant works only if nothing else moved.

## How many reminders should you send, and when do you stop?

One request plus at most two reminders, and the sequence ends on a submitted review, not on a send count.

Stamped recommends exactly that shape: [1 main request](https://stampedsupport.stamped.io/hc/en-us/articles/9769085888155-Review-Requests-email-sequence-feature) and 2 follow-up emails, three in total, with each follow-up going only to customers who did not submit a review through the previous one. Its hard cap is four emails, the first email in the sequence cannot be deleted, and the interval is set in days after fulfillment or after the order was placed.

If you send from your email platform, make the stop condition explicit. After the first email and a wait step, add a conditional split on the review app's submitted-review metric over all time: the Yes branch ends the flow, the No branch sends the reminder. That beats counting sends because it never asks for a review someone already left. One wrinkle when a review app feeds the flow: Judge.me only pushes its review request event when there is a new fulfilled order, so the flow cannot be built before the integration has fired once.

## Which guard conditions stop the email embarrassing you?

Four. Each one has to be handled in the flow rather than left to the app:

- **Cancelled after fulfillment**: the event is not revoked, so [split on order cancelled](https://judge.me/help/en/articles/8259593-sending-review-requests-via-klaviyo) before the email goes out.
- **Not delivered**: Judge.me's documented route is a conditional split on the "Aftership: Delivery updates - Delivered" metric, which requires both Klaviyo and Aftership.
- **Dead product pages**: if a product is archived, set to draft or deleted after the request event is sent, the review link in that event points at a product page that no longer exists, and customers who click it see a 404 and cannot leave a review. Moving a product between collections does not break the link. Check the product is still active before the email sends.
- **Already reviewed, or no consent**: require the submitted-review event zero times over all time, and filter to profiles who can receive marketing. Judge.me adds that an unsubscribe in Klaviyo leaves the customer's status in Judge.me unchanged, and an unsubscribe in Judge.me leaves their Klaviyo status unchanged, so check both.

## Do you need to offer an incentive?

No, not by default. A well-timed email about a product the customer likes is usually enough, and an incentive adds a cost per review.

Two cases change the maths. The first is photo and video asks, which take real effort from the customer. The second is reviving a backlog, where you are contacting people months after purchase with no momentum to borrow, though check how far back your app will reach: Yotpo says it is not possible to send automatic review requests for orders that are older than 6 months. Discounts, prize draws and loyalty points all work; scale the reward to the effort rather than the rating.

Our view on how to run one, if you do. The reward goes to every customer who reviews, whatever they wrote, because an incentive that depends on sentiment is buying ratings rather than reviews. And watch the slower cost: a store that attaches a discount to every post-purchase email teaches its customers to wait for one, which is a habit that outlasts the review campaign.

One honest caveat on the numbers. Big uplift figures for review features tend to come from the vendor selling the feature, so treat them as claims rather than findings, and run any incentive as an A/B against the plain ask so you learn what it actually bought you.

## What will it cost to send this from your existing stack?

Three realistic setups, and what each one meters.

| Setup | How it bills |
|---|---|
| Store's email tool: [Shopify Messaging](https://www.shopify.com/email-marketing) | Available on all Shopify plans. 10,000 manual or automated emails free each month, then $1 per 1,000 additional |
| Review app sends it: REVIEWS.io, Stamped | Per review invite sent, or per order placed whether or not a request goes out |
| Review app event into your email platform: Judge.me plus Klaviyo | Active profiles and sends in the email tool, plus the review app's own plan. Judge.me's Klaviyo integration is available on its Awesome plan; on the Free plan it will not activate |

One billing detail is worth knowing before you pick. [Stamped's billing guide](https://stampedsupport.stamped.io/hc/en-us/articles/25323257964955-Understanding-Stamped-Billing) counts every order toward your monthly limit whether or not a review request is sent, and exclusions you set in your store do not remove orders from that count. Once you hit the limit, requests queue rather than send, and anything past a backlog limit equal to your plan's order limit is archived automatically.

## Where does this template fail?

Four conditions break it.

**Delivery data never arrives.** Delivery-based timing depends on a carrier status reaching your store, and Judge.me says its AfterShip and delivery-based requests "will not work in Klaviyo": orders whose trigger was set to "Delivered" sit in "Waiting for order delivery" status before the Klaviyo event is evaluated, and "The Klaviyo event will not fire for these orders." And where delivery data is unreliable, lengthen the fallback delay rather than pretending you know the arrival date.

**Churning catalogues.** If you archive or delete products regularly, the dead-link problem is not an edge case, it is your normal week. Either keep the product-active check in the flow or keep requests inside the review app, where the in-email form is available. Judge.me, for one, says its in-email form is only available with its own email templates, so routing through your email platform means giving it up.

**No capacity to reply.** This email surfaces complaints you would otherwise never see. A one-person team that cannot answer negative reviews within a few days should not turn on a three-email sequence.

**Evidence scale.** The strongest timing finding comes from [South Korea's largest online travel marketplace and a major South Korean online apparel marketplace](https://www.ama.org/2023/01/10/asking-for-customer-reviews-at-the-right-time-sooner-is-not-always-better/), not from small stores. Use it directionally and confirm it against your own response rates.

## Frequently asked questions

### What is a review request email template?

A review request email template is a reusable email that asks a customer to review a specific product they bought, built from five parts: a sender customers recognise, a subject line naming the product, a product block showing that product's title and image, one review link and one guidance sentence. The template is the asset; the trigger and the stop condition are what make it work.

### How long after delivery should a review request go out?

A review request should go out once the customer has had the product long enough to form an opinion about it, which is days for apparel and longer for anything whose results take time, such as skincare at 10 to 14 days after delivery. Research published in the Journal of Marketing found that a reminder sent faster than the number of days customers typically take to write a review causes problems rather than collecting more feedback.

### Should the review form be inside the email or on the site?

An in-email review form is better where you can have it, because it removes the step of loading a page. The catch is that Judge.me, for one, says its in-email form is only available with its own email templates, so sending the request from a separate email platform means linking out to the review page instead.

### How many review request reminders are too many?

More than two reminders is too many. One request plus two follow-ups is the shape review platforms themselves recommend, and the sequence should end on a submitted-review condition rather than a send count, so nobody is asked twice for a review they already left.

## Next step

Build one email this week, for your best-selling product only, using the template above. Set its trigger to delivery where your tools support it, with a fallback delay matched to how long that product takes to use, then add the stop condition: a split on the submitted-review event that ends the flow for anyone who has already reviewed.

Before it reaches a customer, create and fulfill one test order. As the first section explains, a fulfilled test order is how you confirm the flow fires and the button lands on a working review page. Everything else, the photo variant, the repeat-buyer line, the reminders, can wait until that one email is collecting reviews.

Deciding which product deserves that first email, and whether reviews are even the constraint on your conversion rate this month, is the prioritisation job [StoreCMO](/product) is being built to do from a store's own data. It is in development, so start with your bestseller in the meantime.
