---
title: "Product Feed Optimization Steps for Small Shopify Stores"
description: "A three-tier running order for a small Shopify product feed, covering the eligibility fixes that come first, the fields that decide which searches you match, and the ones a lean team can leave for later."
publishedAt: 2026-10-12
updatedAt: 2026-10-12
category: Ecommerce marketing
tags: product feed, Google Shopping, Merchant Center, Shopify catalogue, feed attributes
seoTitle: "Product Feed Optimization Steps for Small Shopify Stores"
seoDescription: "Product feed optimization in three passes for a small Shopify catalogue: clear disapprovals first, then fix titles and categories, leave labels last."
---

Most product feed optimization advice hands you a flat checklist of fields. Work through a small Shopify catalogue in three passes instead: clear whatever is stopping items from serving, then improve the fields that decide which searches you match, then tidy the fields that only help your own reporting.

The order matters because a 30-point field audit burns an afternoon on fields that change nothing while your bestsellers sit disapproved. A disapproved product earns nothing today. A blank material field costs exposure you will never see on a chart.

A one-person team can finish the first two passes in an afternoon. The pass you are in also tells you how patient to be: feed fixes rarely show up the same day.

## Which product feed fixes should a small store do first?

Product feed optimization is the work of improving the product data you submit to a channel such as Google Merchant Center, so each item meets that channel's requirements and matches the searches you want to win.

Rank the work in three tiers.

**Tier 1, eligibility.** Products missing from Merchant Center, disapprovals, and missing required attributes. Nothing else matters until this is clear.

**Tier 2, discoverability.** Titles, your own product type hierarchy, and the Google product category.

**Tier 3, reporting.** Custom labels and the descriptive fields that only pay off over months.

![Three-tier running order for a small Shopify product feed: eligibility fixes first, then the discoverability fields that decide which searches you match, then the reporting fields, with a note that a missing GTIN looks like a Tier 3 job but is actually a disapproval and so belongs in Tier 1.](/images/blog/product-feed-three-tier-order.svg)

[Andrew Lolk of SavvyRevenue](https://savvyrevenue.com/blog/google-shopping-feed-optimization/) argues that only five attributes are genuinely optimizable, in the sense that good values increase exposure and bad values do the opposite: title, description, product type, custom label and Google product category. Three of those five sit in Tier 2. The other two can wait, with one caveat: polishing description copy is Tier 3, but a blank description is a disapproval cause and so belongs in Tier 1.

## Is the product missing from Merchant Center, or present and disapproved?

Split the problem in two before fixing anything, because the two halves have different causes: items missing from Merchant Center, and items present but disapproved.

Missing usually means the item was never sent. The check takes a minute per product: open it in your Shopify admin, confirm it is available to both the Online Store channel and the Google & YouTube channel, then click Google in the Sales channels section to see any errors recorded against it, as [Shopify's setup guide for the channel](https://help.shopify.com/en/manual/online-sales-channels/marketplaces/google/getting-setup/connect) describes. If the parent product reaches Google but its variants do not, that is one job for whoever set up your feed app, not something to fix product by product.

Present but disapproved is a reporting job. Google's [Needs attention tab](https://support.google.com/merchants/answer/12476548?hl=en), under Products in Merchant Center, lists every product in the account that has an issue, with the reason attached and a "Learn more" link to the fix. Download it and group it by reason. Grouping tells you whether you have one problem or fifty.

## Which feed attributes are required before any optimization matters?

SavvyRevenue groups the basics into ten required attributes: ID, title, description, link, image link, price, availability, brand, GTIN (or MPN), and condition. If any of those is blank or wrong on a product, that product is a Tier 1 job, whatever else is missing from it.

Skip attributes your store cannot use at all. Country-specific and category-specific fields exist, and they will not help a small catalogue that never touches those markets. The point of the first pass is a complete basic record for every item you actually want shown, not a complete record of every field that exists.

## How should you rewrite product titles for Google Shopping?

Titles are the highest-leverage edit in the second pass. [Google's title documentation](https://support.google.com/merchants/answer/6324415?hl=en) says the title is used to match a product to a customer's search, advises using all 150 characters and including the important details that define the product, and notes that users usually notice only the first 70 characters or fewer depending on screen size.

A workable pattern is brand, then product type, then the distinguishing variant detail such as size and colour. Front-load whatever a shopper would type. Google also tells merchants not to use words from foreign languages in a title unless they are well understood, such as a product with a foreign name or title.

Rewrite the top twenty sellers by hand first. Everything below the top twenty can wait for a rule applied in bulk.

## What makes a product image fail, and what can you check yourself?

Image problems are usually systematic rather than one-off, so check the whole catalogue in a single pass. [Google's image requirements](https://support.google.com/merchants/answer/6324350?hl=en) rule out promotional elements and overlays, watermarks, calls to action such as "Buy" or "Shop now", price or free-shipping text, borders, placeholder graphics reading "Coming soon" or "No image available", your company logo or a stock icon used in place of a product photo, line art and mockups that do not depict the physical product, and any product in the shot that is not sold together with the main product; nor should one general photo be reused across distinct products where unique images are required.

The check you can run yourself: open the main images for your twenty bestsellers side by side and look for text, a logo, a watermark or a frame around the edge. That catches most disapprovals without opening a single file.

Call in whoever runs your theme or feed app when the images in Merchant Center are not the images on your product pages. That is a sourcing problem, and re-uploading photos one at a time will not fix it.

## Do product types and Google product categories change which searches you appear in?

Yes, and they are two different fields. Product type is your own store-specific categorisation, and the values you choose organise bidding and reporting in your Shopping campaign, while the [Google product category](https://support.google.com/merchants/answer/6324436?hl=en) must come from Google's predefined taxonomy, submitted as either the category ID or the full path and never both, with the most specific category beating a broad parent such as Electronics (ID: 222), which Google calls too vague for effective automated bidding.

For a few hundred SKUs a spreadsheet is enough. Export the feed, group the rows by product type with a count of how many products sit in each, then map type by type. [ZATO Marketing](https://zatomarketing.com/blog/google-shopping-feed-optimization-what-works-in-2026) singles out product type as one of the most commonly left blank or carelessly filled attributes, and a reasonable place to put your energy first.

## Which feed fields can wait until later?

Custom labels have no impact on how Google rates your feed. They exist so you can structure campaigns, set bids and read performance, which makes them Tier 3 for a small catalogue. If you are running one campaign, labels buy you nothing this week.

That is not a contradiction of the five optimizable attributes above, incidentally. Optimizable there means the field accepts good and bad values rather than fixed facts, and a label's payoff is in your own campaign structure rather than in how Google assesses the feed.

The descriptive fields that are optional for your products and markets sit in the same tier: colour, size, material and the rest. Backfill them in a quiet hour, in bulk, rather than this afternoon.

Missing identifiers are not in this tier. A missing GTIN or MPN turns up as a disapproval, which makes it an eligibility problem and a Tier 1 job.

## Where does each field live in a Shopify store?

Titles, descriptions, prices, images and barcodes sit on the product itself in your Shopify admin. Brand and MPN, your title and description preferences for Google, and the countries and languages you sync are handled inside the Google & YouTube channel, which syncs your products and store information to Google Merchant Center.

Shipping is the part to read carefully, because getting it wrong fails quietly. [Shopify's requirements for the channel](https://help.shopify.com/en/manual/online-sales-channels/marketplaces/google/requirements) state that only shipping rates in your General shipping profile can sync to Merchant Center, and that if you use custom shipping profiles then rates will sync incorrectly and cause errors. Carrier-calculated rates are supported only for certain carriers and services in Australia, Germany and the United States. So if your rates live in a custom profile, the risk is not that nothing arrives; it is that the wrong numbers do. Set shipping up in Merchant Center directly instead, and expect that to be a separate job.

## In what order should you fix a product feed in one afternoon?

A realistic one-person running order, longest-payback last:

1. **Diagnose.** Work through the Needs attention tab, group by reason, and separately list anything absent from Merchant Center altogether.
2. **Clear blockers.** Fix the most common disapproval cause in bulk. [Shopify's documentation on syncing products](https://help.shopify.com/en/manual/online-sales-channels/marketplaces/google/getting-setup/syncing-products) lists the usual sync errors as a missing description, a missing image, an unavailable landing page, a missing GTIN or MPN, a promotional overlay on the image, and "Excessive capitalization", which is its name for a title in all capital letters. Most of those are one bulk edit each.
3. **Map categories.** Group the feed by product type, then map each type to its most specific category.
4. **Rewrite bestseller titles.** Top twenty products only.
5. **Labels last.** Only if you are segmenting campaigns.

Then stop editing. Changes need time to sync and be reviewed before the numbers mean anything, and a second round of edits on top of the first makes the result unreadable. Our guide to [reading Shopify Analytics in 20 minutes](/blog/how-to-read-shopify-analytics) covers the wider version of that discipline: telling a change in measurement apart from a change in your store.

## Where can this prioritised approach fail?

Triage has a cost. Leaving descriptive attributes empty means losing exposure you will never see in a report, because nothing tells you which queries you did not match. ZATO Marketing takes the opposite position: fill out every field you can, including the optional ones, because collectively they give the algorithm more to work with when it decides whether a product is a good match for a particular search.

Second, be wary of letting a crawler source the data for you. ZATO reports that across the accounts it manages, relying on automated site scraping as the primary feed source tends to introduce errors that are frustrating to diagnose, including outdated or even dead products being sent to Merchant Center.

Third, a feed fixed once decays. As ZATO puts it, "Setup Is Not the Finish Line": the feed needs regular attention and the campaigns need ongoing refinement. Put a recurring hour in the calendar for the Needs attention tab.

Finally, a product with clicks and no recorded sales looks like an obvious cut, but which attribution model you read changes that answer, and our guide to [first click vs last click attribution for small stores](/blog/first-click-vs-last-click-attribution) sets out what each model credits and where it breaks at low order volume.

## Frequently asked questions

### What is product feed optimization?

Product feed optimization is the work of improving the product data you submit to a channel such as Google Merchant Center, so each item meets the channel's requirements and matches the customer searches you want to win. For a small store that means fixing missing required attributes and disapprovals first, then improving titles, product types and categories.

### How long after a fix before products are approved again?

Not the same day, so plan for it. A changed item syncs to Merchant Center and then has to be reviewed before anything changes in the results, and Shopify notes that Google applies a 30-day expiry policy on synced product data, which is why the channel keeps refreshing your products inside that window. The practical rule: make your fixes, then leave them alone for a few days before changing anything else, or you will not know which edit did what.

### Do you need a paid feed tool for a small catalogue?

A paid feed tool is not needed for the first pass on a small catalogue. A spreadsheet handles the category mapping and a bulk edit handles most disapprovals. Consider a tool once the catalogue is too large to edit by hand.

### Should you edit titles in Shopify or only in the feed?

Edit the title in Shopify when the title on your product page is genuinely weak, and use a feed-level override when a keyword-heavy title would read badly to customers on the site. Either way, rewrite the twenty products that sell most by hand first and leave the rest to a bulk rule.

## Next step

Open the Needs attention tab in Merchant Center this week, group it by reason, and fix the single most common cause before touching any titles. If your products are absent from Merchant Center rather than disapproved, check instead which attributes actually arrived for one of them, then fix the cause for the whole group rather than product by product.

Deciding which of those reasons is costing you the most, and therefore which one the afternoon goes on, is the prioritisation job [StoreCMO](/product) is being built to do from a store's own catalogue and order data. It is in development, so work the three tiers by hand in the meantime.
