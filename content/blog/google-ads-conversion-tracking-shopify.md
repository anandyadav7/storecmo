---
title: "Google Ads Conversion Tracking on Shopify: How to Verify It"
description: "The reconciliation bands, install steps, and conversion settings here separate normal attribution gaps from a broken tracking event."
publishedAt: 2026-11-18
updatedAt: 2026-11-18
category: Ecommerce marketing
tags: conversion tracking, Google Ads setup, Shopify orders, ad spend accuracy
seoTitle: "Google Ads Conversion Tracking on Shopify: How to Verify It"
seoDescription: "Google Ads conversion tracking on Shopify, verified against your own orders: the 30-day check that tells you which numbers are safe to bid on."
---
To verify Google Ads conversion tracking on Shopify, compare Google Ads purchase conversions with your Shopify orders from paid search over the same 30 days. [Conner Crowe](https://connercrowe.com/conversion-tracking/google-ads-conversions-dont-match-shopify-orders/), a Google Ads consultant, treats a count gap inside 10 percent as reconciled. Until your comparison sits inside that band, treat the conversion column as an estimate rather than a number to bid on.

[Google's documentation on understanding conversion tracking data](https://support.google.com/google-ads/answer/6270625) states that the data in the "Conversions" column is used for your bidding strategies, so Smart Bidding spends real money against whatever that column reports. A padded value or a doubled purchase event does not just mislead a report: it pushes real spend toward the wrong keywords for weeks.

The harder part than installing a tag is deciding which gap between the two platforms is normal attribution, and which one is a broken event that needs fixing.

## Why don't Google Ads conversions match your Shopify orders?

Google Ads records a purchase it can tie back to an ad click and credits it to the day of that click, inside a click-through window that can run from 1 to 90 days. Shopify writes the order on the day the card was charged.

Refunds widen the gap against Shopify's net figures: Crowe notes that a refunded or cancelled order stays counted as a Google Ads conversion, while Shopify's net figures drop it.

A gap between the two platforms is normal. The question worth answering is how wide it can get before it stops being attribution and starts being a broken event, which the comparison below is built to answer.

## Which numbers do you compare, and over what window?

Pull four numbers for the same 30-day window: Google Ads conversions, GA4 paid-channel conversions, Shopify orders from paid traffic, and Shopify revenue after discounts and before refunds.

Crowe holds client accounts to seven comparisons over a 30-day window. These three are the ones a lean team without a dedicated marketer can realistically check each month:

| Comparison (30 days) | Band |
| --- | --- |
| Google Ads purchase conversions vs Shopify orders from paid search, count | Inside 10 percent, reconciled. 10 to 25 percent, name the cause. Above 25 percent, a tracking problem |
| Google Ads conversion value plus Meta purchase value vs Shopify revenue after discounts, before refunds | Inside 15 percent, healthy. Above 15 percent, a setting or an event is padding the value |
| GA4 paid-channel conversions vs Shopify paid orders, count | Within 20 percent |

If you do not run Meta ads, compare Google Ads conversion value on its own against Shopify revenue from paid search.

## How do you install the conversion action without a developer?

Use the Google & YouTube app in the Shopify admin. [Shopify's setup documentation](https://help.shopify.com/en/manual/online-sales-channels/marketplaces/google/getting-setup/connect) lists two prerequisites that are easy to miss: the Google Ads account has to already exist, and the Google account doing the connecting has to be an administrator on it.

A staff member installing the app needs these permissions, or the store owner has to grant them first:

- **General:** Orders, Products, Marketing and Discounts
- **Online Store:** Blog posts and pages, and Navigation
- **Administration:** Manage settings
- **Apps and Channels:** Manage and install apps and channels

The app connects to the Google Ads account from Sales channels, then Google & YouTube. [Google's setup article for the app](https://support.google.com/google-ads/answer/13494537?hl=en) says it only supports directly linking a single Google Ads account, so extra accounts have to be set up manually with conversion IDs and labels or with Google tags.

## Which settings decide the number Google Ads reports?

Three settings live on each conversion action, under Goals, then Conversions, then Summary in Google Ads.

The counting setting decides whether a page refresh or a repeat purchase counts twice. Google recommends counting "Every" conversion for sales and "One" for leads, with transaction IDs used to deduplicate sales.

Primary versus secondary decides what Smart Bidding actually sees. Only primary actions feed the bid strategy, and Google's guidance is to set only bottom-of-funnel actions, like a completed purchase, as primary.

The click-through conversion window decides how long after a click a sale still counts. The default is 30 days, and for Search and Display it can be set anywhere from 1 to 30, 60 or 90 days depending on the conversion source. Google recommends [at least 7 days](https://support.google.com/google-ads/answer/3123169?hl=en) for a richer set of data. A window change only applies to conversions recorded after it is changed, so shortening it will not change what Google Ads already reported for past weeks.

The "Conversions" column reflects only primary actions and is what a bid strategy reads; "All conversions" adds secondary actions and view-through conversions, which is why the two rarely agree. Before trusting either number, check the tracking status on each conversion action: Crowe reads Inactive or Needs attention as a sign the tag has not recorded anything lately.

## How do you stop one order being counted twice?

Count conversion actions and tags before anything else. Google's setup article for the app notes that when you link a Google Ads account, purchase, add to cart and checkout started are the suggested default conversion actions. It also tells you to check for duplicate tags if you have conversions in both the app and a storefront or custom pixel, to set the new app conversion as primary, and to remove legacy tags to prevent duplicate measurement.

Crowe shows why that warning matters. On one account he benchmarked, three purchase actions were live at once: the store's sales-channel tag, a tag-manager deployment and an analytics-imported purchase event. They recorded counts 30.1 percent apart for the same store, and the account counted only one of them. The same problem can hit GA4 when two installs sit on one property and the purchase event fires twice, or when the event name does not exactly match GA4's lowercase `purchase` event.

Inside Google Ads, Crowe's tell is a conversion rate far above the account's own history on a high-volume campaign, which usually means branded overlap or a deduplication failure. Count how many places a purchase event could fire before changing any attribution setting.

## How do you verify the purchase event actually fires?

Place a real test order and watch whether the purchase event fires, rather than trusting the install screen. Google's setup article says to verify the placement and firing of the tags on your website, and to use Google Tag Assistant to troubleshoot and verify your tag setup. [Shopify's guide to Google Shopping](https://www.shopify.com/enterprise/blog/the-master-guide-to-google-shopping) adds that conversion actions labelled Needs attention, Unverified or Tag inactive are the ones to troubleshoot and fix with Tag Assistant.

In the Shopify admin, go to Settings, then Customer events, and confirm the pixel shows a Connected status. [Shopify's pixel testing guide](https://help.shopify.com/en/manual/promoting-marketing/pixels/custom-pixels/testing) covers the Shopify Pixel Helper, which shows events as they load: a green dot means the event was subscribed to and its callback succeeded, and a red dot means the event was subscribed to but the callback failed. The helper does not work on headless stores or stores in private mode.

If a checkout or theme change ever stops the purchase event from firing, repair the event and place another test order to confirm it fires from click to confirmation. Ask a developer to check this if the first test order does not show the tag firing.

## What makes reported revenue bigger than your actual sales?

A value setting is a common cause, and it will not show up by looking at the column alone. Crowe documents one Shopify account where a $32.99 order landed in Google Ads as $148.95. A prior agency had switched on Customer Lifecycle Value Optimization with a hardcoded $115.96 incremental value for new customers, so every new-customer conversion arrived as revenue plus $115.96. Smart Bidding had been chasing that number for nine months, while the dataLayer was clean and GA4 said $32.99. Crowe says the setting sits two clicks deep under Conversions, then Summary, and it is the first thing to check when the count reconciles and the revenue does not.

The other cause Crowe found is cart and checkout events counted inside the bidding metric rather than only completed purchases. On two of the three accounts in his benchmark, between 19.8 and 25.8 percent of reported conversion value came from add-to-cart and begin-checkout events. One Shopping campaign had no purchase goal at all, so every conversion it reported was a cart or checkout event.

If the count band from the comparison above holds but the value band does not, check these two settings before anything else.

## Can you optimize bids toward this on a small budget?

Only once the count reconciles, and then with fewer changes than feels natural. Google Ads warns that frequent manual adjustments to budgets, CPA or ROAS targets, or conversion goals reset the standard 7 to 14 day learning period and delay optimization, which is exactly the cost a small budget cannot absorb twice in a month.

The [break-even ROAS calculator](/tools/break-even-roas-calculator) works out the return a campaign needs before it stops costing money.

Our view: pick counting and window settings that can stay untouched for a quarter, write them down, and judge every campaign on 30-day windows rather than day-to-day swings.

## Where does this reconciliation fail?

[PodVector](https://podvector.ai/articles/profit-analytics/data-reconciliation/google-ads-conversions-don-t-match-shopify), a profit-analytics vendor, flags free Google Merchant Center listings as an overlooked cause of the gap: sales from free listings are reported as organic or free traffic, so they never count as Google Ads conversions no matter what tag work you do. PodVector also notes that ad blockers and rejected cookie consent stop client-side tags from firing, which is one reason Google Ads usually reports fewer conversions than Shopify rather than more. Consent is a live setting, not a theory: Shopify's pixel testing guide notes that a third-party consent tool has to sync consent through the Customer Privacy API, or your pixel may not fire even after a customer agrees.

It also fails when a single week is read in isolation. Crowe's framing is useful here: a gap that holds steady for a month is attribution, while one that jumps in a single week is a broken tag with a date on it. Watch the ratio between the two platforms over several stable weeks rather than chasing an exact percentage.

The bands above come from one practitioner's client accounts, not a published standard, and at very low order volume a small absolute difference in orders can push the percentage past a band without anything actually being broken. Check the purchase event itself before concluding the tracking is wrong.

## Frequently asked questions

### What is Google Ads conversion tracking on Shopify?

Google Ads conversion tracking on Shopify is the measurement setup that records a store action, usually a completed purchase, and ties it back to the ad click that led to it, so Google Ads can report on it and bid toward it. On Shopify the usual way to set this up is the Google & YouTube app, which maps store events like a completed purchase to a conversion action inside a linked Google Ads account.

### What is an acceptable gap between Google Ads and Shopify orders?

There is no single acceptable gap, because the share of a store's sales that arrives through paid clicks rather than organic results or free Merchant Center listings differs from store to store. The number to watch is the store's own ratio across several stable weeks. As a working rule for a 30-day count comparison, Conner Crowe treats a gap inside 10 percent as reconciled, 10 to 25 percent as needing a named cause, and anything above 25 percent as a tracking problem.

### Should add to cart count as a conversion in Google Ads?

Not as a primary one. Google's conversion-tracking documentation says to ensure only bottom-of-funnel actions are set as "Primary" to avoid inflating counts. Linking a Google Ads account through the Google & YouTube app suggests purchase, add to cart and checkout started as default conversion actions, so cart and checkout activity can end up counted toward bidding unless you change that.

### Why does Google Ads show more conversions than Shopify orders?

More conversions in Google Ads than orders in Shopify usually means the same order is being counted more than once. PodVector points to a tag that fires again every time the thank-you page reloads, or the same tag installed twice. Separately, view-through conversions on Display and YouTube credit a sale to an ad that was seen but never clicked, and those land in Google Ads' "All conversions" total with no matching click.

## Next step

Open Goals, then Conversions, then Summary in Google Ads and note three things for the purchase action: whether it is primary, its counting setting, and its click-through window. Our estimate is that this check takes about 20 minutes, and it decides whether the next bid change is based on a real number or an uncorrected gap.

[StoreCMO is in development.](/product)
