---
title: "First Click vs Last Click Attribution for Small Stores"
description: "Read one date range under both attribution models, then act only on the channels whose rank swaps between the two views. This guide covers what each model credits, where to switch in Shopify, and where the comparison stops being trustworthy at low order counts."
publishedAt: 2026-10-06
updatedAt: 2026-10-06
category: Ecommerce marketing
tags: attribution models, first click attribution, last click attribution, Shopify Analytics, channel budgeting
seoTitle: "First Click vs Last Click Attribution for Small Stores"
seoDescription: Compare first click vs last click attribution for a small online store, and learn which channels to fund using two side-by-side reports this week.
---

If you run a store doing modest order volume and you need to decide where next month's budget goes, the honest answer to first click vs last click attribution is: neither on its own. First click credits the channel that introduced the customer. Last click credits the final channel before the order.

Shopify Analytics supports both, so the practical move is to read the same date range twice and act on the channels whose rank moves between the two views. The gap is the signal.

A channel high on first click and low on last click may be introducing customers; one that rises only on last click may be collecting demand created elsewhere. Neither pattern proves the spend caused the order, but both point at the next thing to test.

## What is the difference between first click and last click attribution?

First click attribution hands all the credit for an order to the first channel the customer interacted with, direct visits included. Last click hands that same full credit to the last channel, also including direct visits. Last non-direct click credits the last channel before the purchase but ignores direct visits, unless the whole journey was direct, in which case the order is attributed as direct. All three are defined in [Shopify's marketing reports documentation](https://help.shopify.com/en/manual/reports-and-analytics/shopify-reports/report-types/default-reports/marketing-reports).

Neither rule proves causal impact. A model tells you where a click sat in a sequence, not whether the spend caused the order. That is why reading both views matters more than picking the correct one.

## What does each model credit, and where do you find it?

Lean teams usually have Shopify Analytics, perhaps GA4, perhaps a Google Ads account. Only one of those still gives you a first-click view.

| Model | Credit rule | What it can honestly answer |
| --- | --- | --- |
| First click | All credit to the first channel, direct included | Which channel introduced the customer |
| Last click | All credit to the last channel, direct included | Which channel the order came in through |
| Last non-direct click | All credit to the last non-direct channel | Which marketing channel preceded the order |

The report to work in is Performance by marketing channel, which puts paid, organic and referring traffic in one table. It opens on last non-direct click, and the date range, the attribution model and the columns are all adjustable, so a single report can give you both views.

Two other places in the Shopify admin are worth knowing for cross-checks. Customer cohort analysis, under Analytics > Reports, groups customers by the date of their first order and can show the top marketing channels responsible for directing that cohort to you. And for visit or conversion information about a single order, Shopify points you to conversion tracking on the order itself rather than to a channel rollup.

GA4 works differently: its attribution settings control a reporting model and a lookback window rather than offering a first-click toggle. Google Ads models shape bidding as well as reporting, which is a separate decision from how you read channel performance.

## Where do you switch between first click and last click?

In Shopify, an Attribution menu appears in a report's configuration panel once the report pairs a sales metric (gross sales, for example) with a marketing dimension (referring channel). Where both conditions are met, Shopify selects last click by default, while Performance by marketing channel itself opens on last non-direct click, which is worth knowing before you read a channel table as though it were neutral.

Performance by marketing channel is the fastest place to do the comparison, because you can swap the model and keep the same date range without rebuilding anything. Export each version, and save the model you used with each export: two files both called "channels-september.csv" tell you nothing a week later.

## Why does a first click expire in Shopify?

Because a first click in Shopify is window-bound rather than lifetime. If a session does not lead to a purchase within 30 days, the next referrer becomes the new first interaction. Placing an order resets it the same way: the referrer that follows an order counts as a first interaction for the next one.

Shopify's documentation works through the effect. Someone arrives on August 1 by typing your store URL, comes back several times without buying, then clicks an ad on September 15 and orders. Both the first and the last interaction for that conversion are the ad, not the direct URL. The visit more than 30 days earlier has dropped out.

GA4 handles the same problem with an explicit lookback window instead. [Google's attribution settings](https://support.google.com/analytics/answer/10597962?hl=en) default to 30 days for acquisition key events (first_open and first_visit) and 90 days for all other key events, with shorter options selectable. So the same purchase can carry two different first channels depending on which tool you opened.

## Why can't you find first click in GA4 or Google Ads anymore?

Because Google withdrew it. First click, linear, time decay and position-based are no longer available as of November 2023, and last click remains. GA4 now offers three models: data-driven, which is the default, plus last click across paid and organic channels and last click across Google paid channels. Check your own property and account if you have not looked recently.

For a small store the consequence is simple: Shopify Analytics is where your first-click view now lives. If you want something first-click-shaped inside GA4, [WeltPixel's comparison of GA4 attribution models](https://weltpixel.com/blogs/news/ga4-attribution-models-shopify-data-driven-vs-last-click) points to the Path Exploration report, which surfaces the first touchpoint on a conversion path without you changing the reporting model.

One caveat before you experiment: in GA4, switching the reporting model recalculates past reports as well as future ones.

## What does the gap between the two models tell you to do?

Act only on the channels whose rank changes between the two views.

![Two ranked channel lists side by side, one under first click attribution and one under last click, with lines connecting each channel across them. Organic search and direct hold their rank, Instagram falls from second to fifth, and email rises from fourth to second.](/images/blog/attribution-first-vs-last-rank-swap.svg)

A channel that is strong on first click and weak on last click may be introducing customers, as [Eva Commerce's Shopify attribution guide](https://eva.guru/blog/shopify-marketing-attribution/) notes. Fund that one for reach, and judge it over a longer horizon than a month. A channel that rises only on last click is more likely collecting demand created elsewhere, so keep it funded for coverage and be careful about scaling it as though it created that demand.

The channels that hold their position in both views are the ones you can stop thinking about this month. That is most of the value of the exercise: it shortens the list.

Eva Commerce's guide warns against averaging models into a number that has no clear meaning, and recommends using the spread as evidence of uncertainty instead. The spread between them is the useful part, because it tells you how firm the ranking actually is.

## Where does this break at low order volume?

Our view: at low order counts both models go noisy. Paths are short, and one unusual customer can move a channel's rank between the two views, which makes a swap look like a finding when it is chance.

Shopify's order attribution and GA4 will also disagree with each other, the same mismatch our guide to [reading Shopify Analytics in 20 minutes](/blog/how-to-read-shopify-analytics) covers for sessions. As WeltPixel notes, they measure different things with different methodologies, and neither is wrong. Eva Commerce's rule follows from that: do not add platform-reported conversions together as unique orders.

Two manual cross-checks hold up better at this size. Open the cohort analysis details in the customer reports, which list the top marketing channels responsible for directing that cohort's customers to your business, and filter the cohort definition by the marketing channel of the first order. Then pair that with downstream value using our [stage-by-stage customer lifetime value calculation for ecommerce](/blog/customer-lifetime-value-calculation-ecommerce), because a discovery channel justifies itself over a cohort, not a month.

## Frequently asked questions

### What is first click vs last click attribution?

First click vs last click attribution is the choice between crediting an order entirely to the first channel a customer interacted with or entirely to the last channel before the purchase. For a small store, use last non-direct click for routine reporting, and open the first-click view when you are deciding whether to keep funding a channel whose job is discovery rather than closing.

### Does switching the model change historical reports?

In GA4, yes: switching the reporting model recalculates past reports as well as future ones. In Shopify, you change the model in the report's Attribution menu, so export each version you want to keep. Either way, do not flip models mid-quarter while you are comparing periods, or the comparison measures your settings rather than your marketing.

### Does direct traffic mean no marketing influence?

No. Direct covers customers who entered your store's URL in their browser, and Shopify also lists the referrer name as N/A when it cannot be determined: a browser with Do Not Track activated, referrer data blocked by a proxy or firewall, or a shortened URL used as the link. Treat direct as a reporting category, not proof that nothing you paid for contributed.

### Is data-driven attribution worth it at low order volume?

Probably not as your main view yet. Data-driven models learn from the conversion paths in your own property, and WeltPixel's point is that a store with few orders and one real marketing channel gives the model little to learn from, so the credit split between channels can jump around from one period to the next. Steadier reporting beats theoretically better reporting when you are making one budget decision a month.

## Next step

Run one two-model pass this week. In Shopify Analytics, go to Reports, filter the category to Marketing, and open Performance by marketing channel. Pick a date range long enough to contain a reasonable number of orders, then read and export it twice: once with the attribution model set to first click, once set to last click. Put the two channel lists side by side and write down only the channels that swap places. Then write a single sentence about what next month's spend does differently because of that list.

Deciding which of those movers deserves next month's money, when both models can only tell you where a click sat in a sequence, is the prioritisation job [StoreCMO](/product) is being built to do from a store's own data. It is in development, so run the two-model pass by hand in the meantime.
