---
title: "Free Shipping vs Flat Rate: Which Protects Margin"
description: "Profit per order, AOV spread and Shopify's own shipping settings decide whether free shipping, a flat rate or a threshold protects your margin. The comparison works from your store's own basket sizes rather than a default policy."
publishedAt: 2026-10-26
updatedAt: 2026-10-26
category: Ecommerce growth
tags: free shipping, flat rate shipping, shipping policy, profit per order, average order value
seoTitle: "Free Shipping vs Flat Rate: Which Protects Margin"
seoDescription: "Free shipping vs flat rate shipping: a profit-per-order method for choosing which policy protects margin across your store's own basket sizes."
---

Neither option protects margin on its own. The policy that protects yours is the one that keeps profit per order positive across the basket sizes you actually get. Our view: that is flat rate or a tiered rate when shipping cost swings with weight and zone, and free shipping above a minimum when product margin is wide enough to pay for the label.

The decision is narrower than it sounds. It is what a customer sees for delivery at checkout, and whether a minimum order value unlocks $0 shipping. Everything else follows from the arithmetic, and the three numbers that arithmetic needs are already in your store: the spread of your order values, your cost per item, and what you actually paid for labels last month. None of them requires a new tool to find.

## What do free shipping and flat rate shipping actually mean?

Flat rate shipping charges a fixed delivery fee that does not change with the package's weight or destination. Free shipping is the opposite trade: the customer pays nothing for delivery and the store absorbs the label.

In a [Shopify store](https://help.shopify.com/en/manual/fulfillment/setup/shipping-rates/setting-up-shipping-rates), the flat type splits three ways: a general flat rate, an order-amount (price-based) rate, or a weight-based rate. Free shipping is set up by selecting "Offer free shipping" and entering the minimum order amount that qualifies, or by pricing a flat rate at zero for a group of products.

So "free shipping vs flat rate" is really a choice between absorbing a variable cost and passing a fixed one, with a threshold as the middle setting.

## How do you calculate profit per order under each policy?

Work one order at a time: revenue after discounts, minus product cost, minus the label, minus the payment fee. [Shopify's flat rate shipping guide](https://www.shopify.com/blog/increase-sales-flat-rate-shipping) lists the smallest flat-rate box at $10.40 for USPS Priority Mail Flat Rate, $10.85 for UPS, and $14.50 for FedEx, a useful benchmark to check against your own carrier account before setting a rate.

On static arithmetic, charging a flat fee set to cover the label will always beat absorbing the same cost on that order, because free shipping gives away exactly what the flat fee collects. That is worth stating plainly, because it is the part most comparisons skip: free shipping does not pay for itself on the order it is applied to. It can only pay for itself across orders, by converting more sessions or raising units per basket, which is what our [ecommerce conversion and revenue lift calculator](/tools/ecommerce-conversion-rate-calculator) is built to model.

So the test is not "which policy looks generous" but "does the behaviour change cover the labels I just gave away". Our [ecommerce profit margin calculator](/tools/ecommerce-profit-margin-calculator) shows what a store actually keeps from an order after every cost, which is the quickest way to run your own basket sizes through both policies before deciding.

## Which policy wins across your AOV spread, not at your average?

Average order value hides the decision when it blends very different baskets. A store with the same headline AOV built from a mix of small and large orders is running two different margin stories at once, not one, and the average sits in the gap between them where no actual order lives.

![Three shipping policies scored across the spread of basket sizes rather than at the average: free shipping on everything loses money below the point where product margin covers a label, a flat rate stays profitable throughout but overcharges one-item orders, and a threshold charges small baskets while rewarding large ones. The average order value line sits in the middle and settles nothing.](/images/blog/shipping-policy-aov-spread.svg)

A flat rate tends to protect the small end of that spread, and free shipping above a threshold protects the large end, so the right policy often depends on where your own order sizes cluster rather than on the overall average. Our [average order value calculator](/tools/average-order-value-calculator) gives the headline figure quickly, but this decision needs the baskets behind it: price one small order and one large order separately rather than working from the average.

Flat rate's known weakness sits at the bottom of that spread: a single fixed fee risks overcharging one-item orders, which is the version of this policy that quietly suppresses small purchases. Free shipping's weakness sits everywhere below the point where product margin covers the cost of a label, and on a thin-margin catalogue that can be most of your orders.

## How do free shipping, flat rate, a threshold and carrier rates compare?

Four policies, scored on the things that decide margin rather than on how generous they sound.

| Policy | Profit per order | Across the AOV spread | Absorbs cost variability? | What the platform can express | Ops cost for one or two people |
| --- | --- | --- | --- | --- | --- |
| Free shipping on everything | Lowest; the label comes straight out of margin | Fails on small baskets, survives on large ones | Fully absorbed by you | A rate priced at 0, no conditions | Lowest, nothing to maintain |
| Flat rate | Highest and most predictable | Overcharges one-item orders, undercharges heavy ones | Passed to the customer at a fixed price | A single flat amount per zone | Low; revisit when carrier prices move |
| Free shipping above a minimum | Middling; protected below the line, thinner above it | Designed for the spread: charges small, rewards large | Absorbed only on qualifying orders | "Offer free shipping" with a minimum order amount, or order-amount tiers | Moderate; the threshold needs reviewing |
| Carrier-calculated | Close to break-even by design | Neutral; the customer pays what the order costs | Passed through, order by order | Carrier or app calculated rates, with a handling fee | Highest; depends on accurate weights and dimensions |

A weight-based flat rate only calculates correctly when every product carries a weight value, so check that before relying on it. For most lean stores the real contest is between a flat rate and a threshold, and plain free shipping on everything is a decision to fund acquisition out of gross margin. That can be deliberate. It should not be accidental.

## What can Shopify's shipping settings actually express?

More than most stores use, with four constraints worth knowing before you plan a policy around them, all set out on Shopify's page for setting up shipping zones and rates.

- **Weight-based rates need weights.** If you plan to charge by weight, every product must carry a weight value, or rates will not calculate correctly at checkout.
- **Built-in carrier rates are on all plans.** Integrations such as USPS in the United States or Canada Post in Canada are available on every plan.
- **Your own carrier account is not.** Connecting accounts with carriers such as UPS, FedEx or USPS means activating third-party carrier-calculated shipping, which requires specific Shopify plans or an additional monthly fee.
- **A country needs an active market.** Customers in inactive markets cannot place orders even when their country sits in a shipping zone with rates available.

One more piece of structure matters here. Every Shopify store starts with a general [shipping profile](https://help.shopify.com/en/manual/fulfillment/setup/shipping-profiles) covering all products and can add up to 99 custom profiles. If one heavy or fragile line is dragging a flat rate down, you do not need a store-wide policy change, you need that line in its own profile. The same structural point sits behind our guide to [ecommerce pricing strategy that protects profit per order](/blog/ecommerce-pricing-strategy): fix the item that breaks the rule rather than loosening the rule for everything.

## How do you pick the threshold without giving the margin away?

Our [free shipping threshold calculator](/tools/free-shipping-threshold-calculator) covers the general sizing logic; the detail worth adding here is what Shopify actually counts toward a minimum. [Shopify's free shipping discounts documentation](https://help.shopify.com/en/manual/discounts/discount-types/free-shipping) states that the minimum purchase amount counts product prices only, never taxes, and counts a product at its already-discounted price once a combinable code has lowered it, which means a discounted basket can cross the threshold while still costing you the label.

Two guards are worth setting before launch. Cap the discount so it excludes shipping rates above a chosen amount, which stops a free-shipping code from covering an expensive express service. And make sure your order-amount tiers cover the full range of totals, because [free shipping applies only when an order falls within a tier that covers its total](https://help.shopify.com/en/manual/fulfillment/setup/shipping-rates/flat-shipping-rates) or weight. An order that falls outside every tier does not quietly default to a rate; the customer gets a shipping error at checkout and cannot complete the order. The simplest protection is to leave the maximum field empty on your highest tier so it absorbs anything larger.

## Which Shopify reports show whether the switch worked?

Two reports do the measuring, each with a limit worth knowing. [Profit margin by order](https://help.shopify.com/en/manual/reports-and-analytics/shopify-reports/report-types/default-reports/profit-reports) displays profit margin for all order data in the selected timeframe, and its metrics include both the shipping charges customers paid and the shipping costs the store paid, which is exactly the view this decision needs. Cost per item is static data, so the reports describe a point in time rather than today's costs.

Discounts distort the picture in a way worth seeing once. Shopify's own example on that page runs a $20 T-shirt costing $10, which shows a 50% margin on the product details page; discount it to $15 and the same shirt shows a 33% margin on the Gross profit by product report. Nothing about the product changed. If you are judging a shipping policy during a promotion, that is the effect you are reading on top of it.

[Shipping labels over time](https://help.shopify.com/en/manual/reports-and-analytics/shopify-reports/report-types/default-reports/order-reports) gives the number of labels bought, their total cost, and the average cost per label. It can take up to 24 hours for a label to appear, and the report excludes return labels, canceled or voided labels, adjustments, and any label not purchased through Shopify, so treat the average as a floor on what you actually spend.

## What mistakes do stores make when they switch shipping policy?

Two mistakes do most of the damage.

The first is treating the switch as reversible. Shipping terms are one of the few things customers notice immediately and remember, so treat a store-wide switch as close to permanent, and pilot it on a segment or a product range first if you are not sure.

The second is double-charging across shipping profiles. When an order contains products from several shipping profiles, Shopify combines the applicable price-based rates: a $5 discounted rate active in two profiles, on a $55 order containing products from both, shows the customer $10 at checkout rather than $5. Test a multi-profile order before you trust the setup, especially if you just moved a product into its own profile to fix a flat-rate problem. The fix for one line can become a surcharge on every mixed basket.

## Frequently asked questions

### What is the difference between free shipping and flat rate shipping?

Flat rate shipping is a fixed delivery charge that does not change with the package's weight or destination within set limits, while free shipping means the customer pays nothing for delivery and the store absorbs the label cost. Both are configured through Shopify's shipping rate settings: a general flat rate, an order-amount or weight-based rate, or free shipping offered above a minimum order amount.

### Does free shipping increase average order value?

Free shipping raises average order value only when it is tied to a minimum order value. A threshold is the version built specifically to reward a larger cart, since it only waives the fee once the basket crosses the line you set. Unconditional free shipping sets no bar for the shopper to clear, and the label cost comes straight out of profit per order.

### Where should a free shipping threshold sit?

A free shipping threshold should sit at the order value where the extra product margin covers your average cost per label. Check what counts first: a Shopify minimum purchase amount counts product prices only, never taxes, and counts discounted prices when a combinable discount has already lowered them. A threshold a discount code can cross is a threshold that costs you money.

### Can you offer free shipping on only some products?

Yes. To free-ship specific products, put them in a custom shipping profile and give that profile a flat rate set to free. Watch what that does to mixed baskets, though, since Shopify combines price-based rates across profiles when one order draws from several.

## Next step

Pull two things this week: per-order figures from the Profit margin by order report, and your average cost per label from Shipping labels over time. Then price one small basket and one large basket under your current policy and under the alternative. If the small basket loses money with shipping absorbed, a flat rate or a threshold is protecting your margin, and the only open question is where the line sits.

Working out where that line sits for your own spread of basket sizes, and revisiting it when carrier prices move, is the prioritisation job [StoreCMO](/product) is being built to do from a store's own order and cost data. It is in development, so price the two baskets by hand in the meantime.
