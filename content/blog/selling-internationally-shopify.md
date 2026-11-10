---
title: "Selling Internationally on Shopify: Pick One Country First"
description: "A one-market playbook for lean Shopify stores: pick the country your own data already shows demand from, then set up the market, shipping, currency, duties and translation in that order."
publishedAt: 2026-11-10
updatedAt: 2026-11-10
category: Ecommerce growth
tags: Shopify Markets, international shipping, shipping zones, duties and taxes, store localization
seoTitle: "Selling Internationally on Shopify: Pick One Country First"
seoDescription: Selling internationally on Shopify starts with picking one country from your own data, then setting shipping, currency, duties and translation in order.
---
Selling internationally on Shopify is a strategy decision before it is a settings decision: choose the single country your own store data already shows demand from, and configure only that one. Our view: the expensive mistake for a one- or two-person team is switching on Markets, currencies and duties for twenty countries nobody has ordered from, so the country choice comes before any setting.

The sequence that keeps the work small: read your country data, pick one market, make it active, set shipping rates, then local currency, then duties if they apply, then translation. Activation comes first because shipping rates and currency settings for a country only matter once that country belongs to an active market. Each step costs something, so each one should wait until the step before it has paid.

Two prerequisites set the ceiling on what you can do. [Shopify's pricing page](https://www.shopify.com/pricing) marks local currencies and local payment methods as features that require Shopify Payments, and live rates from your own carrier account need particular plans or an extra monthly charge ([Shopify's shipping zones and rates documentation](https://help.shopify.com/en/manual/fulfillment/setup/shipping-rates/setting-up-shipping-rates)).

## How do you choose which country to sell to first?

Pick the country where you already have measurable demand, can quote an honest shipping rate, and need the least translation work. Selling internationally on Shopify means serving buyers in other countries from one store, with per-country settings for currency, pricing, shipping, duties and language. All of those settings are downstream of the country choice, which is why the choice deserves the hour.

The working order for a lean team:

1. Read your own country data (sessions, search impressions, past order destinations).
2. Choose one country.
3. Add it as an active market.
4. Set shipping rates for it.
5. Turn on local currency and adjust pricing.
6. Decide on duties and import taxes.
7. Translate, last, and only the pages buyers land on.

Our view: one market set up properly beats five markets half-configured, because every half-configured market still generates support email, refunds and rate complaints.

## How do you size international demand from data you already have?

Three sources tell you where demand already exists.

**Past order destinations.** Orders already placed from abroad outrank the other two signals here, because somebody accepted your current shipping cost and delivery time before paying.

**Search impressions by country.** Search Console's Performance report breaks clicks, impressions, CTR and average position down by country. The interface caps exports at 1,000 rows, a limit Google says won't affect the majority of properties, and because country is not a query or URL dimension, Search Console displays and exports all the data for it ([Google's Search Console performance data deep dive](https://developers.google.com/search/blog/2022/10/performance-data-deep-dive)). [How to write a product description that sells](/blog/how-to-write-a-product-description-that-sells) covers the report's anonymized-query filtering, which does affect query-level data.

**Sessions and language by country.** [Google Analytics 4](https://support.google.com/analytics/table/13948007) carries Country ID as an ISO 3166 code, plus continent and subcontinent IDs, and a Language code dimension holding the browser or device setting as an ISO 639 code such as 'en-us' or 'es'. A browser set to a language you do not publish is the first hint that translation may be needed; a browser set to yours is a hint it is not.

Pick one of these as your source of truth for trends rather than switching between them, so a change in the numbers reflects the market and not the tool.

## What makes a country worth the effort beyond traffic?

Traffic tells you interest. Three other things decide whether the market is worth a lean team's week.

**Can you ship it at a rate that survives checkout?** Shopify's carrier-calculated rates are only available from certain fulfillment locations (the list is under shipping rates below). Where live rates are not available for your route, you are quoting a flat, order-amount or weight-based rate instead.

**Is it close, legally and logistically?** The consultancy Credera observes that American brands frequently pick [Canada as a first international market](https://credera.com/en-us/insights/how-quickly-expand-e-commerce-new-markets) for its proximity and developed logistics.

**How much localization does it demand?** A country that reads your language and uses a currency you can quote needs far less setup than one that needs translation, a local domain and a tax display changed for a country that expects tax-inclusive pricing, even when both show the same session count.

## What do you turn on in Shopify Markets first?

Make the country an active market, then customize it. Shopify Markets is built from two parts: conditions, which define who the market applies to, such as a group of countries you sell across borders to, and customizations, which define what those customers get, including currency, catalogs, theme content, domain and language, and duties and tax settings ([Shopify's overview of markets features](https://help.shopify.com/en/manual/markets/getting-started/overview)). A new market inherits your store's default settings until you override them.

One concept saves confusion later: the backup region. It sets the experience for customers who don't match any active market, and Shopify sets it to your store's home country automatically when the store is first created.

On pricing, local currencies convert automatically at the current market exchange rate, and you can set rates manually instead. You can also round prices, apply a percentage adjustment, or set prices per country. If you sell in local currencies, Shopify requires a country selector so buyers can choose their region and see their currency ([Shopify's pricing in local currencies documentation](https://help.shopify.com/en/manual/international/pricing)). Price adjustments and the duties decision are the same question about who absorbs cross-border cost. The arithmetic for it sits with your [ecommerce pricing strategy that protects profit per order](/blog/ecommerce-pricing-strategy).

## How do you set shipping rates for one new country?

In Shopify admin, go to Settings, then Shipping and delivery, open a shipping profile, add a zone for the country, and add a shipping option to it. One rule catches people: the country must sit in an active market, because customers in inactive markets can't place orders even when their country is in a shipping zone with available rates ([Shopify's shipping zones and rates documentation](https://help.shopify.com/en/manual/fulfillment/setup/shipping-rates/setting-up-shipping-rates)).

Five details worth getting right the first time:

- **Weights.** If you use weight-based rates, every product needs a weight value before you turn the rates on, or rates will not calculate correctly at checkout.
- **Which carrier rates you can use.** From a United States location, USPS, DHL and UPS rates are available; from Canada, Canada Post and Purolator; from the United Kingdom, DPD UK, InPost UK and Royal Mail. Connecting your own UPS, FedEx or USPS account instead needs specific Shopify plans or an extra monthly fee.
- **Free shipping tiers.** On order-amount or weight-based rates, free shipping only applies inside a tier that covers that order's total or weight, so make sure your tiers cover the full range: leave the maximum field empty on your top tier if you don't want an upper limit. A rate with no conditions, by contrast, gives free shipping to every order it applies to.
- **Fixed local amounts.** Automatic currency conversion can turn a flat rate into an odd local number once converted; create a separate zone for that country if you want to charge a round local amount instead.
- **One shipping zone per country.** A country or region can sit in only one shipping zone within a shipping profile, so remove it from an old zone before adding it to a new one.

Our guide to [free shipping vs flat rate](/blog/free-shipping-vs-flat-rate) covers how shipping profiles and rate tiers work, and the margin tradeoff between flat and free shipping.

## Should you collect duties and import taxes at checkout?

Only if you can meet the requirements and accept a per-order fee. [Shopify sets three conditions](https://help.shopify.com/en/manual/international/duties-and-import-taxes/charging-duties) for turning this on: if you use shipping labels, your carrier must support delivered duty paid (DDP) labels; your store must not use the Shopify Fulfillment Network; and your products need Harmonized System (HS) codes applied.

If your store doesn't meet those requirements, Shopify's help center says you can use a third-party app to calculate duties and import taxes instead. When the temporary lowered fee isn't in effect, the cost is a transaction fee on every order where duties and import taxes are calculated, even when the calculated amount is zero: 0.85% where Shopify Payments is the primary gateway, 1.5% where another provider is. The 0.85% rate also covers orders paid through a third-party provider such as PayPal as long as Shopify Payments is your primary gateway; the 1.5% rate also covers stores using Shop Pay as an accelerated checkout where Shopify Payments isn't the primary gateway. It is not charged on orders shipped inside your own country, orders between EU member countries, or abandoned checkouts.

Accuracy depends on your product data. Duties are worked out from each product's HS code and country or region of origin. Without an HS code, Shopify uses the product's description and category instead; without any of the three, it still calculates a duty figure that Shopify's help center says is likely to be inaccurate.

Two settings do different jobs, and they are easy to confuse. Tax display controls how tax appears to the buyer: localized automatically by region, included in the total, or shown as a separate line item. The duties setting controls who pays it: added at checkout as a line item, or absorbed by you with duties included in price. Both are configured per market rather than once for the whole store.

## How much translation and localization is enough to start?

Start with nothing translated, and translate only when the language data says you must. Each language you publish gets its own URLs, and pages without a finished translation fall back to showing your default-language content ([Shopify's localization and translation documentation](https://help.shopify.com/en/manual/international/languages)). Translations can be done manually or with AI translations in Shopify's Translate & Adapt app, uploaded by CSV, or handled by a compatible third-party app. Once a language is published, checkout and email notifications display in the customer's language.

For a one-person team, the sane first pass is the pages an international buyer actually lands on: the product pages they arrive at, shipping and returns information, and the delivery and duties expectations. Those are the pages where the new objections live (how long it takes, what the buyer pays at the border, what happens on a return), so each one needs that objection named and answered.

Local domains and subfolders are a Markets customization too. Leave them until the market is earning.

## How do you verify the new market works before adding a second?

Place a test order to the new country. Shopify recommends placing a test order once your rates are configured, to confirm what buyers will actually see: no options appear until a delivery address is entered, then only the rates that cover that order, with the cheapest one selected by default, and a notice appears instead if the address falls outside every zone you've set up.

We'd give it a full quarter of orders before judging the market. Watch three things for the chosen country only: orders and conversion rate for that market, shipping-related support messages, and impressions and average position for that country in Search Console.

If the market clears your own threshold (enough orders in a quarter that the shipping and duties setup pays for the hours it took), copy the pattern to a second country. If it does not, the honest conclusion is often that your next hour belongs to a different channel entirely, which is the comparison in [Amazon vs your own website](/blog/amazon-vs-your-own-website).

## Where does this one-market playbook fail?

Three ways this setup can go wrong.

**Sessions that are not buyers.** Country sessions do not prove anybody there will buy at your shipping cost. Past order destinations are the check that keeps you honest, since a session is not a sale.

**Duty and rate math that quietly eats margin.** The duties transaction fee and the cost of absorbing duties, covered above under duties and import taxes, both erode margin quietly. Automatic conversion also displays your rate at the converted amount, so a flat rate set in your own currency can land as an odd figure in the buyer's, and a market can be busy and unprofitable at the same time.

**Translation becoming permanent work.** Shopify's Translate & Adapt app and CSV uploads make publishing a language straightforward, but every product added later shows your default-language content until it is translated too.

## Frequently asked questions

### What does selling internationally on Shopify actually mean?

Selling internationally on Shopify means serving buyers in other countries from one store, using markets to define those countries and customizations to set their currency, catalog and pricing, shipping options, duties and tax treatment, and language. Shopify's help center frames a market as a set of customers defined by conditions, with customizations that decide the experience those customers get.

### Do you need Shopify Payments to show prices in local currencies?

Yes. Shopify's pricing page footnotes both "Show prices in local currencies" and "Accept local payment methods" as requiring Shopify Payments. Translating your storefront, localized selling with Markets, assigning local domains, and estimating and collecting duties and taxes are listed without that footnote.

### How much does it cost to collect duties and import taxes at checkout?

A transaction fee per order where duties and import taxes are calculated: 0.85% when Shopify Payments is your primary gateway, 1.5% with another provider as the gateway. It applies even when the calculated amount is zero, and not to domestic orders, orders between EU member countries, or abandoned checkouts.

### Should you translate the store before setting up shipping and currency?

No. A buyer in that country cannot complete checkout until the country sits in an active market with shipping rates, because customers in inactive markets can't place orders even when their country is in a shipping zone with available rates. Local currency affects whether the price then reads as credible. Translation comes after. GA4's Language code dimension records the language setting of a visitor's browser or device, which is the cheapest indication you have of whether your default language is readable in that market.

## Next step

Open Search Console, filter the Performance report by country, and list the countries sending impressions that you do not currently sell to. Put your past international order destinations next to that list. If one country appears on both lists, that is the market to set up, and the shipping zone is the first setting to touch.

[StoreCMO is in development.](/product) We are building it to decide which single country to serve before switching on markets, currencies and duties for untested ones.
