---
title: "Ecommerce Pricing Strategy That Protects Profit Per Order"
description: "Decide what to charge by starting from the profit each order has to leave behind. This guide covers where shipping and discounts take that margin back, how to turn what remains into a break-even ROAS, and when holding a price static is the better call."
publishedAt: 2026-10-09
updatedAt: 2026-10-09
category: Ecommerce growth
tags: ecommerce pricing, contribution margin, profit per order, break-even ROAS, discount leakage
seoTitle: "Ecommerce Pricing Strategy That Protects Profit Per Order"
seoDescription: An ecommerce pricing strategy built backwards from profit per order: set a margin floor, subtract leakage, then check it against break-even ROAS.
---

The decision in front of you is what number to put on a product page. Set it by working backwards from the contribution margin you need per order: price minus COGS, outbound shipping, pick and pack, payment and currency fees, and the discount you actually run. Then check that what is left supports an ad payback you can realistically hit.

The arithmetic for that floor is one division: break-even ROAS equals 1 divided by your margin. A margin figure on its own says nothing about what each order costs to fulfil, and a return-on-ad-spend target on its own says nothing about whether the orders behind it made money. Used together, they turn pricing into a rule instead of a guess.

## What should an ecommerce pricing strategy actually be built on?

Not on competitor prices, and not on a habitual markup. Both are guesses about what the market will bear that happen to be dressed as decisions.

Build it on the profit each order has to leave behind, for one reason: that is the only number in the chain you control directly. You cannot set demand, you cannot set your competitor's price, and you can only partly set your costs. You can set the price, and you can refuse to set one that loses money.

In practice that means three steps, in this order:

1. Work out the contribution margin you need per order, and how many orders at that margin cover your fixed costs.
2. Subtract every variable cost at the price you will actually charge, discounts included.
3. Turn what remains into a break-even ROAS and compare it with what your ad account really returns.

Two things sit outside that arithmetic and still constrain it: US state law on prices set from individual customer data, and whatever your ad platform's bidding system is doing this quarter. Both are covered below.

## How do you work out profit per order before you set a price?

Contribution margin per unit is the selling price minus every variable cost attached to that unit. That is the number a price should be built from. Gross profit tells you what is left after the cost of the goods, which is not the same as what is left after shipping, fulfilment and fees.

Syncost's [worked example](https://www.syncost.com/blogs/contribution-margin-formula) prices a product at $40 and strips out $14.00 of product cost, $6.00 of shipping, a transaction fee of roughly 3% at $1.20, and $1.00 of pick and pack. That is $22.20 of variable costs, so $17.80 remains, a ratio of 44.5%. Against fixed costs of $1,780 a month, 100 units cover the fixed base and every unit after that is profit. Our [ecommerce profit margin calculator](/tools/ecommerce-profit-margin-calculator) runs per-order arithmetic on your own numbers, and it also asks for ad spend per order.

Payment and currency costs belong in that list, and they are store-specific. Card rates and conversion fees vary by plan, region and provider, so read your current rates in your own account rather than reusing a figure you noted a year ago.

![Four-step pricing decision flow: set the contribution margin floor, subtract every variable cost at the price actually charged, convert what remains into a break-even ROAS, then act on the gap by raising the price, cutting a cost or stopping paid acquisition for that SKU.](/images/blog/pricing-margin-floor-decision-flow.svg)

## How much margin do shipping and discounts quietly take back?

Shipping and discounts are the two leaks that turn a healthy-looking price into an unprofitable order.

Shipping first. Every Shopify store comes with a [general shipping profile](https://help.shopify.com/en/manual/fulfillment/setup/shipping-profiles) that applies to all products, and a store can create up to 99 custom shipping profiles for products that need different rates. That is the mechanism for making a fragile or expensive-to-ship item carry its own rate instead of being quietly subsidised by light ones. Where the free-shipping line sits matters as much, and our [free shipping threshold calculator](/tools/free-shipping-threshold-calculator) shows what a given threshold does to order economics.

Discounts are the bigger surprise, because the margin you see on a product page and the margin a discounted order actually earns are two different figures, and the reports say so. [Shopify's profit reports](https://help.shopify.com/en/manual/reports-and-analytics/shopify-reports/report-types/default-reports/profit-reports) state that the margin displayed on the product details page is based on the full price of the product, while the gross margin in the reports is based on net sales, which takes into account any discounts or refunds you offered during the reporting period. Even that reported figure still subtracts only product cost, so it flatters a discounted order twice over.

So price the discount you plan to run, not the list price. If a quarter of your orders carry a 15% code, the price that matters for margin planning is the discounted one.

## What price does your ad payback require?

Once contribution margin is known, ad payback sets a hard floor under price. [Shopify's break-even ROAS guide](https://www.shopify.com/blog/break-even-roas-calculator) puts the formula at 1 divided by gross profit margin: at a 40% margin the break-even figure is 2.5, so every ad dollar has to return $2.50 just to cover the cost of goods and shipping. Our [break-even ROAS calculator](/tools/break-even-roas-calculator) applies that to your own margin.

One terminology trap before you use it. Shopify uses "gross margin" for two different quantities. In the profit reports above, it subtracts only product cost. In the break-even guide, gross profit margin is revenue minus variable costs divided by revenue, and the instruction there is to include COGS, shipping, payment processing and pick and pack. That second definition is the contribution margin you worked out in step one. Feed the formula your contribution margin ratio, not the margin shown on your product page, or the floor you derive will be far too low.

The target alone is not enough either. [ROAS measures the efficiency of ad spend in isolation](https://commonthreadco.com/blogs/coachs-corner/the-complete-guide-to-ecommerce-contribution-margin), which is why a campaign can clear its ROAS target while the orders behind it lose money once goods, shipping and fees are counted. Use break-even ROAS to set the floor, and judge the month on contribution margin.

## What is the pricing decision rule, step by step?

Run this on one SKU.

1. **Set a floor contribution margin per order.** Fixed costs divided by contribution margin per unit gives the units needed before anything is profit.
2. **Subtract every variable cost at the price you actually charge,** discount included.
3. **Convert what remains into a break-even ROAS** using the one-division formula above.
4. **Act on the gap.** If the required ROAS beats what your ad account returns, raise the price, cut a cost, or stop advertising that SKU.

The fourth step is the one teams skip. A SKU that cannot clear its break-even ROAS is not a campaign problem to be optimised; it is a pricing or sourcing problem wearing a campaign's clothes.

## When should a lean store hold a price static instead of changing it?

For most small catalogues, holding the price static is the right default. [Digital Applied's dynamic pricing decision matrix](https://www.digitalapplied.com/blog/ecommerce-dynamic-pricing-2026-strategy-decision-matrix) reaches the same conclusion for everyday consumer goods and luxury, where it argues the confidence that predictable pricing buys outweighs a one-off margin gain, and the disciplined answer is to hold static. Our addition: a one-person team has no capacity to monitor the fallout either.

The sentiment data points the same way. That matrix cites Gartner figures of 68% of US consumers who report feeling taken advantage of when brands use dynamic pricing, and 80% who say brands that hold prices steady are more trustworthy. Wharton marketing professor Z. John Zhang supplies the constructive move in the same article: run dynamic discounts down from a stable list price rather than surcharges up from it, because a discount reads as a gift and a surcharge reads as a penalty.

One line is not a judgment call. Two US states now regulate algorithmic pricing directly. [New York's algorithmic pricing disclosure law](https://www.goodwinlaw.com/en/insights/blogs/2025/12/new-york-enacts-legislation-requiring-the-disclosure-of-algorithmic-pricing), effective 10 November 2025, requires a business that sets a price for an individual consumer using an algorithm based on that consumer's personal data to display the notice "THIS PRICE WAS SET BY AN ALGORITHM USING YOUR PERSONAL DATA" alongside the price. And [California's AB 325](https://www.paulweiss.com/insights/client-memos/california-restricts-use-of-common-pricing-algorithms), effective 1 January 2026, prohibits using or distributing a common pricing algorithm as part of a conspiracy to restrain trade, defining one as any methodology used by two or more persons that uses competitor data to recommend, align, stabilize, set or otherwise influence a price. Neither is a reason for a small store to panic, and both are a reason to keep personalised pricing off the table and run plain discount codes and automatic discounts instead.

## Where does this pricing approach break down?

Three ways, all worth knowing before you act on a number.

**Stale costs.** Shopify's profit reports documentation states that the Cost per item field contains static data, which means the data in your profit reports is only relevant to a specific point in time. Raise a supplier price and your historical margins stop matching reality, while the break-even ROAS you derived from them stays comfortingly wrong.

**A moving measurement baseline.** Shopify's [session measurement update](https://help.shopify.com/en/manual/reports-and-analytics/discrepancies/session-measurement-update) changed how session activity is counted and now filters identified bot sessions out of session-related reports by default. Conversion rate is calculated from sessions, so it can move even when orders and sales have not. Treat data from after the update as a new baseline, and review orders, sales and customer counts alongside sessions before concluding that a price rise hurt conversion. Our guide to [reading Shopify Analytics in 20 minutes](/blog/how-to-read-shopify-analytics) walks through telling a measurement change apart from a real change in traffic.

**Weak demand.** A correctly priced product still fails if too few people want it at that price. The rule protects profit per order. It cannot create orders.

## Frequently asked questions

### What is an ecommerce pricing strategy?

An ecommerce pricing strategy is a method for setting prices so that every order clears a known margin floor, instead of copying competitor prices or applying a habitual markup. The section on the pricing decision rule sets out the three steps in order: margin floor, variable costs, then the break-even ROAS the remaining margin can support.

### What is a good contribution margin for an ecommerce store?

It depends on your cost structure, but the Syncost example gives a usable shape: a $40 product with $22.20 of variable costs leaves $17.80, a 44.5% ratio. Syncost adds that many ecommerce sellers aim for a ratio that comfortably covers fixed costs with room for profit, often 30% or more depending on the model. The test that matters is whether contribution margin per unit times unit volume covers your monthly fixed costs.

### Should ad spend sit inside the per-order margin?

In one place, not both. The break-even calculation starts from the pre-ad margin and divides 1 by it, so ad spend stays out of that figure. Count ad spend when you judge whether the month actually paid, alongside goods, shipping, fulfilment and fees.

### Do discounts change your reported margin?

Yes. The margin shown on a product details page is based on the full price of the product, while the gross margin in profit reports is based on net sales. A discounted order therefore looks thinner in the reports than the product page suggests, and the figure to price against is contribution margin per unit, which also subtracts shipping, fulfilment and fees.

## Next step

Pick the five SKUs that drive most of your orders and add a cost per item to each one in Shopify, under Products, in the Price section. Profit is reported only for products and variants that had cost recorded at the time they were sold, so that step comes first. Then run contribution margin and break-even ROAS on all five, and compare the required ROAS with what your ad account actually returned last month. Any SKU where the gap is wide needs a price change, a cost cut, or removal from paid acquisition this week.

Working out which of those five needs which of the three, month after month, is the prioritisation job [StoreCMO](/product) is being built to do from a store's own cost and order data. It is in development, so run the five-SKU pass by hand in the meantime.
