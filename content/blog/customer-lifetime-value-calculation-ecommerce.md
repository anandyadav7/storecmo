---
title: "Customer Lifetime Value Calculation Ecommerce, Stage by Stage"
description: "Three stages of lifetime value calculation, gated by how much order history the store has: a fixed window under 12 months, cohorts once a repeat cycle has passed, and a projection only when Shopify has 24 months to work from. All of it in contribution margin, never revenue."
publishedAt: 2026-09-25
updatedAt: 2026-09-25
category: Ecommerce growth
tags: customer lifetime value, contribution margin, cohort analysis, shopify
seoTitle: "Customer Lifetime Value Calculation Ecommerce, Stage by Stage"
seoDescription: Work in contribution margin, not revenue, and calculate at the level your order history supports. A fixed window early on, cohorts once customers have had time to repeat, and Shopify projections only after 24 months.
---

How far you can take a lifetime value calculation depends on how much order history the store has. Start from a raw Shopify order export, work in contribution margin rather than gross revenue, and calculate at the level your data supports: a fixed-window value over an interval that matches how often your customers buy, a cohort value grouped by the date customers placed their first order once a repeat cycle has passed, and a projection only where Shopify's own report will produce one for your store.

And calculate it only if it changes something. For a lean team, the customer lifetime value calculation that ecommerce guides usually bury in formulas feeds exactly one decision: this month's ceiling on acquisition cost per new customer. Our [LTV to CAC ratio calculator](/tools/cac-ltv-ratio-calculator) turns the figure you are about to produce into that ceiling.

## What is the simplest customer lifetime value calculation for an ecommerce store?

At its simplest, a customer is worth the contribution margin carried by the orders they have placed, not the revenue on those orders.

The word doing the work there is *contribution*. [Saras Analytics](https://www.sarasanalytics.com/blog/ecommerce-contribution-margin) sets the calculation out as net revenue minus variable costs, with net revenue described as total sales minus discounts, refunds and chargebacks. The variable costs it lists are cost of goods sold, shipping and fulfilment fees, payment processing fees, marketing and advertising spend, and discounts and returns. Expressed as a percentage, the contribution margin ratio is contribution margin divided by revenue, multiplied by 100. Our [contribution margin calculator](/tools/ecommerce-profit-margin-calculator) does that arithmetic for a single product if you want to sanity-check your numbers first.

Gross margin is narrower. The same source calls it useful but incomplete: it only tells you how much you make after deducting the cost of goods sold, and it does not account for variable costs like ads, shipping or payment fees. The illustration Saras Analytics uses to make the point runs $85,000 of net revenue against $70,000 of variable costs, which leaves a contribution margin of $15,000 and a ratio of 17.6%.

So the rule before any arithmetic: if you cannot attach product cost to the orders, you are calculating revenue per customer rather than lifetime value, and bidding against that figure flatters the acquisition maths.

## Which columns from your order export do you actually need?

Pull the CSV from the **Orders** page of your Shopify admin: click **Export**, then pick the orders you want (for example **Orders by date**) and a file format under **Export as**. [Shopify's documentation](https://help.shopify.com/en/manual/fulfillment/managing-orders/exporting-orders) states that up to 50 orders or the current page downloads to your device, while more than 51 orders, or an export by date, is emailed to you and the store owner.

From that file, keep these columns:

- **Email**, the customer's email address, as your customer key
- **Created at**, when the order was completed by the customer
- **Subtotal**, before shipping and taxes
- **Discount Amount** and **Lineitem discount**
- **Refunded Amount**
- **Lineitem SKU**, **Lineitem quantity**, **Lineitem price**

Cost of goods is the gap. Either keep a SKU-to-cost lookup and join on SKU, or use an export tool that pulls product cost. [Matrixify](https://matrixify.app/tutorials/shopify-orders-export/) offers a Line Item Product Data column group taking fields from the product record, Cost among them; Line Items hold the data as it was at the moment of the purchase, while those product columns show it as it is now.

![Three stages of ecommerce lifetime value calculation gated by order history: a fixed window under twelve months, cohorts once a repeat cycle has passed, and Shopify projections only after twenty-four months, all measured in contribution margin.](/images/blog/ltv-calculation-stages.svg)

## Stage 1: What can you calculate with under 12 months of order data?

Calculate a fixed-window value: contribution margin per customer over a set number of days from their first order, counting only customers whose window has fully elapsed.

The method, in four steps:

1. Group orders by email and find each customer's first order date.
2. Keep only customers whose window has already closed. Someone who bought last Tuesday has no completed window yet and will drag the average down if included.
3. Sum contribution margin across each customer's orders inside that window.
4. Average across the group.

Pick the window from purchase cadence rather than habit. In its [guide to Shopify cohort analysis](https://www.sarasanalytics.com/blog/shopify-cohort-analysis), Saras Analytics suggests weekly or 30-day windows for fast-moving consumables, monthly windows with 60/90-day LTV checkpoints for apparel, billing-cycle cohorts for subscription brands and 180-day retention curves for high-AOV brands, on the grounds that cohorts must match purchase cadence or patterns get distorted.

Be honest about what a short window cannot tell you. The same guide lists stopping cohort tracking after 30 days as a common mistake, because real retention patterns emerge much later. Treat the figure as a floor for acquisition cost, never a target.

## Stage 2: How do you calculate LTV once one repeat cycle has passed?

Switch from a fixed window to cohorts. Shopify builds this for you: from your Shopify admin, go to **Analytics** > **Reports** and open **Customer cohort analysis**. In the default report, customers are grouped into cohorts based on the date that they placed their first order. Each row represents a cohort of customers who made their first purchase in the same time period, the first column names the cohort based on the month of their first purchase, and the remaining columns display the selected metric over the weeks, months or quarters as of their first order.

Use the **Metric** menu to display *Amount spent per customer*, and the **Intervals** menu to change the time period that cohorts are grouped by. Match that to how often your customers buy, for the reason Saras Analytics gives: cohorts have to match purchase cadence, or patterns get distorted and teams end up chasing ghosts.

The repeat arithmetic behind the curve is simple. Shopify's [guide to cohort retention analysis](https://www.shopify.com/blog/cohort-retention-analysis) gives retention rate as active users in the period divided by original cohort size, multiplied by 100. In its example, 1,000 users sign up in January 2026 and 800 are active in February, which works out at 80% retention.

One quirk worth knowing before you read the grid: the period 0 column captures returning orders by the cohort's customers in the same period as their first order.

## Stage 3: When is a projected lifetime value trustworthy?

Only once there is enough history behind each cohort, and even then only as an extrapolation from your own store.

Shopify's **Customer cohort analysis** report has a **Show projections** option, which puts predicted future spend per customer cohort into the future months of the table and the visualizations. Two conditions apply, both set out in [Shopify's customer reports documentation](https://help.shopify.com/en/manual/reports-and-analytics/shopify-reports/report-types/default-reports/customers-reports). First, *Amount spent per customer* has to be selected as the displayed primary metric before the **Show projections** toggle can be activated. Second, the predictions are based on the data from your store, compiled over the previous 24 months for each cohort, and if 24 months of data aren't available the toggle won't display at all. Shopify also states that the data isn't based on information from any other stores or averages for your industry, and isn't shared with any other stores. Open the report in your own admin to see whether the toggle is there yet.

That constraint is a feature. A projection built only on your own customers will not flatter you with somebody else's retention curve.

## Which inputs do lean teams get wrong most often?

Three recurring mix-ups, in rough order of how much damage they do.

**Gross margin standing in for contribution margin.** Saras Analytics points out that gross margin only tells you how much you make after deducting the cost of goods sold, and that it does not account for variable costs like ads, shipping or payment fees. For a DTC store, that is where a lot of the money goes.

**Total amount spent read as margin.** Shopify's **Returning customers** report shows, for each customer, the total amount that they have spent, including taxes, discounts, shipping, and any refunds. The **One-time customers** report gives the value of the single order on the same basis. Both are gross, so the margin step still has to happen in your spreadsheet.

**Discounts that never reach the column you are reading.** Shopify documents that the **Discount Code** column displays only discounts and discounts applied manually to draft orders, and does not include automatic discounts. **Discount Amount** is the amount of the discount applied to the order. **Lineitem discount** is the discount that's applied to the line item, and doesn't include order product discounts. **Refunded Amount** is the amount of any refund applied to the order. Each of those measures something different, so keep them in separate columns and reconcile against the orders themselves before trusting a total.

## Do discount-driven first orders belong in the same cohort?

No. Split them, because blending them hides the one thing you need to know.

Shopify's cohort report lets you do this without a spreadsheet. In the **Cohort definition** menu, click the **First order** icon to apply filters about the customer's first order. The available first order filters are sales channel, marketing channel, marketing type, product name and subscription. Build one cohort acquired through a promotional marketing type and one acquired otherwise, then compare amount spent per customer across the same intervals.

The reason to bother: Shopify's cohort retention guide suggests using average order value analysis to check if customers acquired during sales like Black Friday have a lower customer lifetime value than those acquired organically. Saras Analytics makes a similar point about acquisition cohorts, saying that "customers acquired in 'January Week 2' often behave very differently from customers acquired during 'Black Friday Week'", with one group potentially showing higher retention and LTV and the other chasing discounts.

What the split changes: your acquisition ceiling stops being one number. If the promotional cohort's contribution margin per customer sits materially below the full-price cohort's, the honest conclusion is that discount-led campaigns can carry less CAC than a blended figure suggests.

## Frequently asked questions

### What is customer lifetime value calculation for ecommerce?

Establishing how much contribution margin an average customer generates across their orders, grouped by when they first bought, so you can set a ceiling on acquisition cost.

### Should LTV use revenue or margin?

Contribution margin. Saras Analytics defines it as net revenue minus variable costs, which include cost of goods sold, shipping, payment processing fees and marketing spend. Shopify's cohort report offers gross sales, net sales, average order value and amount spent per customer, so the margin step happens in your spreadsheet.

### How often should you recalculate?

Monthly suits most lean teams. According to its [contribution margin by channel playbook](https://endlesscommerce.com/playbook/contribution-margin-by-channel/), Endless Commerce recommends calculating contribution margin monthly as a baseline and recalculating immediately whenever you change pricing or renegotiate terms.

### Do you need an app at small volumes?

Not for stages 1 and 2. Saras Analytics argues Shopify's native cohort reporting cannot reveal which acquisition channels or campaigns produce high-LTV cohorts, and cannot unify signals from ad platforms, email and subscription tools. That matters once you are spending enough for channel-level differences to be worth chasing, and not much before.

## Next step

Do stage 1 this week, on one window, and stop there.

1. Export your orders by date from the Shopify admin and keep the columns listed above.
2. Pick a window from your own purchase cadence: 30 days if people reorder monthly, 180 if they buy twice a year.
3. Drop every customer whose window has not closed yet.
4. Attach product cost, sum contribution margin per customer, and average it.
5. Put that number next to what you currently pay to acquire a customer.

If the average contribution margin per customer over a closed window is below your acquisition cost, you have found this month's most important number, and it is one you can act on before any cohort grid exists.

Deciding what to do about that gap, which channel to cut and which to fund, is the prioritisation job [StoreCMO](/product) is being built to do for lean ecommerce teams. It is in development, so run the stages above by hand in the meantime. It will not fix missing cost data either: if product cost never reaches your orders, no system can infer it.
