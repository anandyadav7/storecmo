---
title: "Repeat Purchase Rate Benchmarks Most Stores Misread"
description: "Published repeat purchase rate benchmarks disagree because they use different windows, denominators and categories. Here is what each one actually measures, and how to build the only benchmark that answers your question: your own, read again next quarter."
publishedAt: 2026-10-03
updatedAt: 2026-10-03
category: Ecommerce marketing
tags: repeat purchase rate, repeat buyers, cohort analysis, second purchase, retention rate
seoTitle: "Repeat Purchase Rate Benchmarks Most Stores Misread"
seoDescription: Learn why a single repeat purchase rate benchmark misleads and how lean ecommerce teams can build one that fits their own window and category.
---

Do not judge your store against a cross-industry repeat purchase rate average. The same customer list produces a different percentage depending on the window you measure and who you count in the denominator, so one headline figure cannot tell you whether your retention is healthy.

[Prooflytics' repeat purchase benchmark page](https://prooflytics.io/blog/repeat-purchase-rate-benchmarks) makes the point plainly: a brand with 18% on a 30-day window and 42% over 12 months has both numbers true, because they answer different questions. Stacking published averages on top of each other does not fix that.

The benchmark worth having is your own: the same window, the same denominator, read again next quarter.

![Cohort grid showing the same customers producing 18%, 28% or 42% repeat purchase rate depending only on whether the number is read at 30 days, 90 days or 12 months after the first order.](/images/blog/repeat-purchase-rate-windows.svg)

## What is a good repeat purchase rate benchmark?

There is no single good number. A repeat purchase rate is only readable with a window, a denominator and a category attached, and the most-quoted figures disagree because those three choices differ.

The 18.8% figure comes from [BS&Co, a DTC email and SMS agency](https://bsandco.us/blog-post/repeat-purchase-rate-benchmarks), built from anonymized data across 156,110 customers of brands it works with, on a 365-day lookback, with a repeat customer defined as 2+ orders within that window. The methodology states that brands are identified by vertical only and that aggregate numbers are weighted by customer count. That is one agency's book of business, not an independent panel.

Prooflytics puts the 2026 DTC average at 25-30% on a 90-day window, with luxury and jewelry at 9-11% and consumables top performers at 40-55%.

[Finsi](https://www.finsi.ai/blog/repeat-purchase-rate-ecommerce/) also reports a DTC average of 25-30%, but measured over a 12-month window, and reads below 20% as acquisition-dependent, 20-30% as average, 30-40% as strong and above 40% as product-market fit.

[Sender's statistics round-up](https://www.sender.net/marketing-glossary/repeat-purchase-rate/statistics/) puts the average ecommerce repeat purchase rate at 28.2%, with a typical healthy range of 25-30%, grocery and food delivery at 65.2% and luxury goods at 9.9%.

Same metric, four definitions. Averaging them gives you nothing you can act on.

## Why does the measurement window change the number so much?

Because a short window and a long window answer different questions. Prooflytics describes three common definitions: a 30-day rate as the sharpest signal of immediate retention, with a typical range of 10-25%; a 90-day rate as the standard benchmark for most categories; and a 12-month rate as the highest number, typically reported in board decks.

Finsi puts the same warning more bluntly: a 90-day rate will be much lower than a 12-month rate, so specify the window every time you report or compare.

The timing data explains the size of the gap. In the BS&Co portfolio behind the 18.8% figure, 50.3% of repeat purchases happened within 30 days and 76.4% within 90 days, while only 3.7% took longer than a year. A 90-day read therefore captures roughly three quarters of what a full-year read will eventually show.

The same data carries a skew trap. The median time to second purchase clusters between 15 and 35 days, while the average ranges from 50 to 100+ days, because a long tail of late returners inflates the average. Plan post-purchase timing around the average and you arrive after half of your potential repeat buyers have already decided.

One more reason to distrust a single store-wide percentage: [Shopify's guide to cohort retention analysis](https://www.shopify.com/blog/cohort-retention-analysis) calls blended averages deceptive, because they average loyal long-timers with high-churn newcomers into a single number. Its illustration is a store reporting a stable 30% retention rate while cohort analysis reveals customers acquired two years ago retaining at 70% and new users acquired last month at 90%. Read those three numbers as illustration rather than arithmetic, since a blended 30% could not sit underneath cohorts of 70% and 90%. The point behind them holds regardless.

## Which customers belong in the denominator?

Pick one of two denominators and stay with it.

**All unique customers in a period.** Divide the number of customers with more than one purchase by the total number of unique customers in the same period, then multiply by 100. [Yotpo's worked version](https://www.yotpo.com/blog/repeat-customer-rate/) runs it over a quarter: 1,250 of 5,000 unique customers returned for at least a second purchase, so the rate is 25%. Finsi adds a caveat worth applying, which is to exclude buyers too new to repeat: on a 30 to 90 day window, count only customers whose first purchase was at least one purchase cycle ago.

**Customers grouped by first order.** Shopify's customer cohort analysis report groups customers into cohorts based on the date that they placed their first order, then displays the selected metric over the weeks, months or quarters as of that first order. Slower to read, and the version that tells you whether retention is improving.

The trap sits in the dates rather than the formula. [Shopify's documentation](https://help.shopify.com/en/manual/reports-and-analytics/shopify-reports/report-types/default-reports/customers-reports) states that the data in customer reports is based on the entire order history of the new customers in the report, not only the orders that were placed during the selected timeframe. Its own example: a report for November only still displays a new customer from that month as a repeat customer, even if the second purchase came in December. Useful for cohort reading, misleading if you believed you were measuring November.

## How do you build your own repeat purchase benchmark in Shopify?

Most of it already exists in the admin, and the whole job is one sitting. Work through it in this order.

**1. Decide the window before you open anything.** Pick it from how often your customers actually buy, not from which number looks best. If people reorder monthly, read at 30 days. If they buy twice a year, a 30-day read will tell you nothing and you want 180. Write the window down now, because the temptation to widen it after seeing the result is real.

**2. Decide the denominator, and write that down too.** Either all unique customers in a period, or customers grouped by the month of their first order. The second is better and slower. Mixing them between quarters is the single easiest way to produce a trend that does not exist.

**3. Get the simple version first.** Under Analytics > Reports, the One-time customers report lists customers with exactly one order and Returning customers lists those with two or more. That gives you the all-unique-customers denominator in two numbers, and it is enough to start.

**4. Then open Customer cohort analysis.** Set the **Metric** menu to customer retention rate, and use the **Intervals** menu to group cohorts by the period matching your window. Each row is one month's first-time buyers; each column is months since that first order.

**5. Read three cohorts, not one.** Take your last three complete first-order cohorts and write down the month 1 and month 3 figures for each. One cohort is an anecdote. Three in a row moving the same direction is a trend you can act on.

**6. Know what the grid is not telling you.** The period 0 column captures returning orders placed in the same period as the first order, so it is not a repeat rate in the sense you mean. And projections need 24 months of history per cohort before Shopify will show them at all.

What you end up with is six numbers and two definitions on one line. That note, not any published average, is what next quarter's reading gets compared against.

## Does your replenishment cycle make the comparison fair?

More than most owners want to admit. Prooflytics reports that repeat purchase rate varies 5x by category, driven by purchase-cycle structure: consumables replenish on a schedule, durables do not. Its ranges, on a 90-day window:

| Category | Repeat purchase rate |
| --- | --- |
| Consumables (supplements, coffee, food, skincare) | 25-40% average, 40-55% top performers |
| Pet supplies | 30-35% |
| Beauty and skincare | 30-45% |
| Fashion and apparel | 25-32% |
| Home goods | 15-25% |
| Electronics | 12-25% |
| Luxury and jewelry | 9-11% |

Sender reports furniture at about 14.7%, a figure it attributes to Bluecore, and luxury goods at 9.9%. It names Wayfair as the furniture outlier, with nearly 80% of its orders coming from repeat customers, built through an unusually broad catalogue that creates multiple repurchase occasions. Category averages describe typical product-market dynamics, not ceilings.

Prooflytics' gut-checks are fair ones to borrow. Below 25% in consumables is unusual and usually signals a poor first-purchase experience, such as delivery problems or product quality, rather than category dynamics. Below 20% in fashion is a brand-building problem rather than a retention-program problem. Below 12% in electronics is mostly a category constraint.

One finding should change your next email. Across 7,454 second-purchase journeys in the BS&Co data, 77% of second purchases were reorders of the same product and 23% were cross-sells, with home decor the exception at 0% reorder and 100% cross-sell. If you sell consumables, asking whether the customer is ready for another beats a product recommendation grid.

## Is retention or acquisition the bigger lever for your store?

Answer it with revenue share, not the repeat rate on its own.

In the BS&Co data, the top consumable brand's repeat buyers were 44% of customers and generated 66.5% of total revenue, roughly 1.5x their share of the customer base. Mid-tier consumable brands at 39-41% repeat rates produced 62-64% of revenue, the same over-index. Fashion and durable brands at 15-17% repeat rates produced 13-19% of revenue, which is roughly 1:1.

That split is the decision. Where repeat buyers over-index on revenue, they are subsidising the business, so retention flows, subscription incentives and replenishment reminders earn their keep. Where repeat buyers spend proportionally to their share, growth comes from new customer acquisition and maximising first-purchase AOV, and retention is a bonus rather than the business model.

Prooflytics makes the cost case from its own data, putting second-order acquisition at 5-7x less than first-order acquisition. Finsi's threshold is the practical one: below 20% a store is acquisition-dependent, and the advice is not to scale ad spend until the post-purchase flow and second-order conversion improve.

Scale changes the answer too. Prooflytics argues repeat rate is usually higher leverage for DTC brands under $10M revenue and AOV higher leverage above it, because at smaller scale the customer base is small enough that improving retention compounds quickly. Our [small-budget ecommerce strategy guide](/blog/ecommerce-marketing-strategy-small-budget) already sequences selling again to people who already bought ahead of paid acquisition, for the same reason.

## Where does building your own benchmark go wrong?

Sample size breaks it first. [MCP Analytics' Shopify cohort tutorial](https://mcpanalytics.ai/tutorials/how-to-use-customer-retention-cohort-analysis-in-shopify-step-by-step-tutorial) suggests ideally 100+ customers per cohort for statistical reliability, while noting that smaller stores can still gain insights. Its fix for low transaction volume is to use quarterly or annual cohorts instead of monthly ones, or to combine several months into one larger cohort. A store reading a 40-customer cohort as a result is reading noise, and two customers changing their minds will move it by five points.

Three more traps from the same tutorial. Holiday cohorts show dramatically different patterns, so compare year over year, December against December, rather than month to month. Guest checkouts can create new customer IDs, so deduplicate on a lowercased email address instead of trusting the ID. And define retention explicitly, most commonly as at least one purchase in the period, then apply that definition consistently across all cohorts.

The last failure mode is who publishes the comparison. Both benchmark pages used here end with an offer: Prooflytics invites you to book a walkthrough of its own repeat purchase tracking, and BS&Co offers a free 30-minute audit comparing your retention curve to its 18.8% benchmark. That does not make their numbers wrong. It does mean your own cohort trend is the one figure nobody is selling you.

## Frequently asked questions

### How do you calculate repeat purchase rate?

Divide the number of customers with more than one purchase by the total number of unique customers in the same period, then multiply by 100. Yotpo's worked example runs 1,250 returning customers against 5,000 unique customers for a quarter, giving 25%. The formula is the easy part; the window and the denominator are what make two stores' numbers comparable or not.

### Is repeat purchase rate the same as customer retention rate?

Close, but not interchangeable, and the difference matters when you compare published figures. Repeat purchase rate usually counts customers who bought more than once within a window. Retention rate, as Shopify's cohort report uses it, measures what share of a given first-order cohort was still active in a later period. A store can quote either and call it retention, which is one reason the published benchmarks disagree.

### How many customers does a cohort need before the number means anything?

MCP Analytics suggests 100 or more per cohort for statistical reliability, while noting smaller stores can still learn something. Below that, widen the cohort rather than the conclusion: use quarterly or annual groupings, or combine several months into one. A 40-customer cohort moves several points when two people change their minds, which is not a trend.

### Why does Shopify show more repeat customers than my date range suggests?

Because customer reports use the entire order history of the customers in the report, not only the orders placed inside the selected timeframe. Shopify's own example is a November report still showing a November first-time buyer as a repeat customer when the second order came in December. That is correct behaviour for cohort reading, and misleading if you thought the report described November.

### Should you compare your rate to a published benchmark at all?

Only as a sanity check on the category, never as a target. Use them to notice that consumables sit far above luxury, or that your 15% in fashion is roughly normal while 15% in supplements is not. Beyond that, the window, denominator and sample behind any published average are different from yours, and the comparison that tells you something is your own rate against your own rate three months ago.

## Next step

Do this in 20 minutes. From your Shopify admin, go to Analytics > Reports, open Customer cohort analysis, use the Metric menu to display customer retention rate and the Intervals menu to group cohorts by months. Write down the month 1 and month 3 figures for your last three first-order cohorts, and record the window and the denominator next to them. That note is what makes next quarter's reading comparable, and it is the only benchmark that is genuinely about your store.

The natural next calculation is what those returning customers are worth, which our [customer lifetime value calculation guide](/blog/customer-lifetime-value-calculation-ecommerce) works through stage by stage.

Deciding whether retention or acquisition deserves the quarter, once you have both numbers, is the prioritisation job [StoreCMO](/product) is being built to do from a store's own data. It is in development, so run the cohort read by hand in the meantime.
