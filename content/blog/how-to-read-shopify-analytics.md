---
title: "How to Read Shopify Analytics in 20 Minutes"
description: "A fixed order for reading Shopify Analytics: traffic, the leaking funnel step, average order value, repeat purchase, then profit. Stop at the first number that moved the wrong way, make that the month's one fix, and leave the other four until next month."
publishedAt: 2026-09-28
updatedAt: 2026-09-28
category: Ecommerce marketing
tags: read shopify analytics, conversion rate, average order value, shopify reports, cohort analysis
seoTitle: "How to Read Shopify Analytics in 20 Minutes"
seoDescription: Learn how to read Shopify analytics in the right order so you spot one problem to fix each month, without wasting hours in dashboards.
---

If you run a store without a dedicated analyst, the goal of opening Shopify Analytics is not to understand your store. It is to leave with one thing to fix this month. The fastest way there is to read five numbers in a fixed order: traffic, the leaking funnel step, average order value, repeat purchase, and profit. Stop at the first number that broke, and make that your fix. The other four wait until next month. Shopify's built-in Analytics carries more than 60 pre-built dashboards and reports, by its own count in its [guide to key ecommerce metrics](https://www.shopify.com/blog/basic-ecommerce-metrics), which is exactly why an unordered browse eats an afternoon and produces nothing.

## What should you look at first in Shopify Analytics?

Start at the top of the ladder and work down, stopping at the first number that moved the wrong way. In your Shopify admin, select Analytics > Reports to reach the pre-built reports behind every rung.

1. **Sessions over time.** Did people show up?
2. **Conversion rate breakdown.** Where did they stop?
3. **Average order value over time.** Is each order worth what it was?
4. **Customer cohort analysis.** Do buyers come back?
5. **Profit reports.** Does any of it survive costs?

The order matters because each number explains the one below it. A conversion rate drop caused by a flood of cold traffic is not a site problem, and you will misdiagnose it if you skip step one.

![Five-rung ladder for reading Shopify Analytics in order: sessions, the leaking funnel step, average order value, repeat purchase, then profit, with the instruction to stop at the first rung that broke and make that the month's only fix.](/images/blog/shopify-analytics-five-number-ladder.svg)

The dashboard itself bends to this. Shopify's help page on [customising the overview dashboard](https://help.shopify.com/en/manual/reports-and-analytics/shopify-reports/overview-dashboard/customizing-overview-dashboard) says its metric cards can be added, removed and rearranged, organised into labeled sections, and resized. Build one section per rung and the whole read becomes a single scroll.

## Number 1: did traffic change, or did measurement change?

Read sessions against your own previous periods, not against a benchmark. Traffic volume varies with business size, market, season and marketing budget, so your own earlier periods, with seasonality allowed for, are the only comparison that means anything.

There is a specific reason for care. Shopify's [session measurement rollout](https://help.shopify.com/en/manual/reports-and-analytics/discrepancies/session-measurement-update) runs from September 21 to 23, 2026, so check whether it has reached your own account before you read a dip as lost traffic. Shopify says sessions are based on continued customer activity instead of ending at midnight Coordinated Universal Time, that a session with no pageview now counts (a customer going directly to checkout from a cart link), and that identified bot sessions are filtered out of session-related reports by default, which you can adjust in reports that offer the Human or bot session filter. A session ends after 30 minutes of inactivity.

Shopify is blunt about what did not move: your orders, sales and customer counts are not affected by this update. So if sessions shifted and orders did not, the measurement changed, not your store. Bot classification applies only to sessions from October 7, 2025 and after, so a comparison reaching back past that date cannot be filtered the same way on both sides. Use data from after the update as your new baseline for session-based metrics.

## Number 2: which funnel step is actually leaking?

A single blended conversion rate tells you something is wrong but never where. The **Conversion rate breakdown** report does, and it is the highest-value ninety seconds in the whole read.

Shopify's [behavior reports documentation](https://help.shopify.com/en/manual/reports-and-analytics/shopify-reports/report-types/default-reports/behaviour-reports) lists four funnel metrics in order: all sessions, sessions with cart additions, sessions that reached checkout, and sessions that completed checkout. The conversion rate for each step is that step's sessions divided by total sessions.

Use the **Open Funnel** toggle deliberately. Shopify defines the open version as including sessions where visitors enter the funnel at any path and perform steps in any sequence, so a shopper who reaches the checkout page without adding anything to the cart still counts at that step. The closed version counts only sessions that complete all steps in sequential order. If the two disagree wildly, your traffic is arriving somewhere other than the homepage.

Find the biggest percentage drop, then ask whether fixing it pays. Shopify's [reports guide](https://www.shopify.com/blog/analyzing-shopify-reports) makes the point with a simple funnel it invents purely to illustrate the idea: 100 collection-page visitors, 50 product-page visitors, 40 cart additions, 20 checkout starts, four purchases. The largest visitor loss sits between the collection and product pages, yet taking those four purchases up to six would be a 50% increase in orders. Biggest leak and biggest revenue are not always the same step.

If the drop lands between cart and completed checkout, our [fix order for reducing cart abandonment rate](/blog/reduce-cart-abandonment-rate) sequences the repairs by effort rather than by theory.

## Number 3: is each order worth more, or just more discounted?

On Shopify, average order value reflects gross sales after discounts. It leaves out tax and shipping, and it leaves out post-order adjustments: returns, edits and exchanges. The formula Shopify publishes in its guide to key ecommerce metrics is gross sales minus discounts, divided by the number of orders.

That definition is why AOV alone is a trap. Read it beside discount rate, the share of gross sales handed back through product-level or order-level discounts. Shopify reports the monetary value of discounts natively, so you work the rate out yourself by setting that amount against gross sales. AOV can climb while discounting quietly eats the gain: bigger baskets built on a discount code are not the same win as bigger baskets built on a bundle.

Split by device before you act. Dynamic Yield's rolling 12-month figures, cited in that same Shopify guide, put desktop orders at $255 against $164 on mobile, with a global average order value of $185. A store-wide AOV that hides a mobile-heavy audience will point you at the wrong page.

Before committing to a fix, it helps to know what the lift is actually worth. Our [ecommerce conversion and revenue lift calculator](/tools/ecommerce-conversion-rate-calculator) models conversion rate and average order value together so you can see which one moves revenue further at your volumes.

## Number 4: how do you read the customer cohort report quickly?

Go to Analytics > Reports and search for Customer Cohort Analysis. Max Sturtevant's walkthrough in [The Inbox Newsletter](https://www.inboxnewsletter.com/p/how-to-read-customer-cohort-analysis-report-in-shopify) sets out the layout: the left side lists months of the year, the next column counts the new customers who bought for the first time in that month, and the Month 0, Month 1, Month 2 columns count months since that first purchase, so Month 2 for a November 2021 cohort falls in January 2022. The percentages show what share of that month's first-time buyers came back and placed another order. In the example he shows, 13% of the customers who bought in February bought again in month one.

Why that beats one retention average: Shopify's [cohort retention analysis guide](https://www.shopify.com/blog/cohort-retention-analysis) argues that a store might report a stable 30% retention rate while cohort analysis reveals customers acquired two years ago retaining at 70% and new users acquired last month at 90%. Treat those three numbers as illustration rather than arithmetic, because a blended 30% could not sit underneath cohorts of 70% and 90%. The point behind them survives the example: blended averages fold loyal long-timers in with high-churn newcomers, and cohort analysis acts as an early warning system.

Then change what the table measures. For one brand, Sturtevant switched the view to LTV and filtered by first order type: by month 6, customers whose first order was a one-time order averaged around $105 LTV, against $170 for those whose first order was a subscription, which he calls "a 62% difference per customer". He adds that you can split by product to see which SKUs create the most valuable customers over time. That is a funnel decision, not a report.

If you need the underlying arithmetic before you trust the table, our [stage-by-stage guide to customer lifetime value calculation](/blog/customer-lifetime-value-calculation-ecommerce) covers what you can compute with under 12 months of orders.

## Number 5: does any of it survive as profit?

Profit reports come last because they are the easiest to misread and the only ones with a hard prerequisite.

Shopify reports profit only for products and variants that had a recorded cost per item at the time of sale, and both gross profit and gross margin need cost of goods sold set up in Shopify to calculate accurately. If you added costs last week, last quarter's figures are incomplete, and no amount of filtering fixes that retroactively.

What you get is gross profit. The Profit margin by order report goes further, taking in product and shipping charges, duties, import taxes, product costs, shipping costs, and duties or import taxes your store pays. What none of it deducts is your ad spend, apps or payment fees. TrueProfit, which sells a paid net-profit app, writes in its [guide to Shopify reports](https://trueprofit.io/blog/shopify-reports) that standard Shopify reports "show you gross profit, but they often miss the full picture of your true profitability after factoring in all costs like multi-channel ad spend, transaction fees, and shipping expenses". That is a vendor describing the gap its own product fills, and a spreadsheet closes it for a while.

Our view: for most lean stores, a monthly hand-calculation of net margin beats another subscription until the arithmetic genuinely stops fitting on one screen. Our [ecommerce profit margin calculator](/tools/ecommerce-profit-margin-calculator) includes ad spend in the calculation for exactly that reason.

## How often should you open each report?

Match the cadence to how quickly a metric can change and how soon you could act on it. Shopify's metrics guide sets out a rhythm worth copying:

| Cadence | What to read |
| --- | --- |
| Daily | Sessions, orders, revenue, inventory alerts |
| Weekly or monthly | Conversion rate, average order value, add-to-cart rate |
| Quarterly | Retention, lifetime value, cohort behaviour, margin |

The five-number read belongs in the monthly slot. Checking cohort retention weekly is a way to feel busy while learning nothing, because the data moves too slowly to change your mind.

Live View sits outside that read entirely. Shopify's [Live View documentation](https://help.shopify.com/en/manual/reports-and-analytics/shopify-reports/live-view) describes it as a real-time view of the activity on your store: visitors right now counts visitors active on your online store in the past 5 minutes, total sales and total sessions run from midnight in your store's local timezone, and the customer behavior card covers sessions in the last 10 minutes that added items to their cart, reached the checkout, or purchased. Shopify says it is especially useful during high traffic periods such as Black Friday and Cyber Monday, which is when you can still fix a broken discount code or move stock around. Outside those windows it is a screensaver.

## Where this reading order misleads you

A number tells you what changed, never why. Three traps: at low volumes swings are noise (Shopify [generates daily insights](https://help.shopify.com/en/manual/reports-and-analytics/shopify-reports/overview-dashboard/using-the-overview-dashboard) only for stores averaging at least 10 orders per week over the last 6 months); search query reports carry a delay of up to 72 hours, so skip them the morning after a launch; and Shopify counts active sessions in 5-minute windows while other services use different time frames, so pick one source of truth. Diagnosis still comes from the actual page.

## Frequently asked questions

### What is Shopify Analytics?

The reporting section of the Shopify admin, covering an overview dashboard, pre-built reports across acquisition, behaviour, sales, customers and profit, and a real-time Live View. Its help documentation says the main features are available on any Shopify subscription plan, and staff members require the Analytics permissions.

### Are Shopify reports accurate?

They use data recorded by your store, but definitions, time zones, refunds and processing delays cause discrepancies. Expect session metrics to shift with the rollout running September 21 to 23, 2026, if it has reached your account.

### Why do Shopify sessions not match Google Analytics?

Because the two count differently. Shopify measures activity in 5-minute windows and ends a session after 30 minutes of inactivity, filters identified bot sessions by default, and since the September 2026 update no longer cuts sessions at midnight UTC. Another tool applying its own definitions will land on a different number for the same traffic. Pick one as your source of truth for trends and stop reconciling them.

### Why is my Shopify profit report empty?

Almost always missing cost of goods. Shopify reports profit only for products and variants that had a recorded cost per item at the time of sale, so adding costs today does nothing for orders already placed. Fill in cost per item on your top sellers first, then treat the profit report as usable from that date forward rather than backwards.

### Is Live View worth checking daily?

No. It shows the last 5 to 10 minutes, which is too short a window to tell you anything about a trend. It earns its place on launch days, promotions and Black Friday, when there is still time to fix a broken discount code or reroute stock. The rest of the month it is a screensaver.

## Next step

Block 20 minutes this week. Open Analytics, walk the five numbers in order, and stop at the first one that moved the wrong way. Write it on one line: the number, how much it moved, and against which period. Then name one change you will make and the date you will re-read that same number. One broken number, one change, one check. That is the whole month's analytics work.

If the number that broke is sessions, resist the urge to fix the site. If it is the checkout step, resist the urge to buy traffic.

And know the limit of any tool sitting on top of this, ours included: no dashboard can explain why a number moved when the tracking underneath is wrong, or when cost per item was never recorded. Bad inputs stay bad inputs, and that part is still a human job. Working out which of the five numbers deserves the month is the prioritisation job [StoreCMO](/product) is being built to do. It is in development, so walk the ladder by hand in the meantime.
