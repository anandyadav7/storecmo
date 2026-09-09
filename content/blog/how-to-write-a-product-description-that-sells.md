---
title: "How to Write a Product Description That Sells, Step by Step"
description: "A four-step method for rewriting product descriptions when writing time is scarce: rank pages by the gap between traffic in and sales out, name the objection stopping that page's buyers, rewrite around it, then compare the same page before and after."
publishedAt: 2026-09-09
updatedAt: 2026-09-09
category: Ecommerce marketing
tags: product descriptions, ecommerce copywriting, conversion, product pages
seoTitle: "How to Write a Product Description That Sells, Step by Step"
seoDescription: Pick the product page with traffic but no add-to-carts, find the objection in Search Console and Clarity, rewrite the description around it, then compare items added to cart over a matched window.
---

With limited writing hours, the decision is not how to write better copy in general but which page to rewrite, and around what. Work in this order: (1) rank product pages by the gap between traffic in and sales out, using free analytics you already have; (2) find the single objection stopping that page's buyers; (3) rewrite the description around that objection; (4) compare the same page's numbers before and after. This guide is written for a founder or one-person marketing team, so page selection matters as much as the sentences. A well-written description on a page nobody visits earns nothing. A mediocre description on a page with steady traffic and no add-to-carts is where the opportunity sits.

## Which product page should you rewrite first?

Rewrite the page with the most traffic and the worst sales result relative to that traffic. That is the prioritisation rule, and everything else is detail.

To rank candidates, you need two numbers per product: how many people saw the page, and what happened next. [Google Analytics 4](https://support.google.com/analytics/table/13948007) reports both. Its item-scoped metrics include *Items viewed*, the number of items that the customer viewed, populated by sending an items array with the `view_item` event; *Items added to cart*, populated by sending an items array with the `add_to_cart` event; and *Item revenue*, which counts revenue from items after refunds are subtracted, with tax and shipping left out. GA4's *Landing page* dimension reports the page path associated with the first page view in a session. Put those numbers side by side and the worst offenders appear immediately: high item views, few items added to cart.

For search-driven pages, [Google Search Console's Performance report](https://support.google.com/webmasters/answer/7576553) adds the other half. It can group data by Pages, and the available metrics are clicks, impressions, CTR and average position. A page with plenty of clicks and nothing downstream is a copy problem, not a traffic problem.

Ranking pages before writing follows the same sequencing discipline set out in [planning an ecommerce marketing strategy on a lean team](/blog/ecommerce-marketing-strategy-for-lean-teams).

## How do you find the objection that is stopping the sale?

Two free sources tell you what the page is failing to answer: what people searched for to get there, and what they did once they arrived.

Start with search intent. In Search Console's Performance report, the queries dimension groups your data by the search query users typed, which is how you learn which queries are bringing traffic to your site. If a bag page keeps appearing for "laptop bag 16 inch", the objection is likely fit, and the description may never state which laptops it takes. One caveat worth knowing: queries that are not issued by more than a few dozen users over a two-to-three month period are anonymized, so they are omitted from the tables, although they are included in chart totals unless you filter by query. Google's [Search Console performance data deep dive](https://developers.google.com/search/blog/2022/10/performance-data-deep-dive) explains that gap in full. Long-tail objections can hide in exactly that filtered slice.

Then watch behaviour. [Microsoft Clarity](https://clarity.microsoft.com/) is free forever and offers session recordings, heatmaps showing where users click, scroll and drop off, and AI summaries that highlight behaviour trends across a page. If everyone scrolls straight past a paragraph to the size chart, the paragraph is not doing the job.

GA4 fills in the shape of the drop: items viewed without items added to cart means interest that died on the page, not before it.

## What goes in the description, in what order?

Write the objection-answering sentence first, then the proof, then the context, then the risk-reducer. That order works because the buyer already wants the product; they are looking for the reason not to buy.

1. **Answer the objection in the first line.** Not a slogan. The specific thing that was stopping them.
2. **Give the detail that proves it.** A measurement, a material, a spec. Vague reassurance does nothing.
3. **Add fit, sizing or use context.** Who it suits, when it works, what it does not do.
4. **Close the risk.** Returns, warranty, restock, whatever removes the last hesitation.

![Four-part order for a product description: answer the objection, prove it with a specific detail, add fit and use context, then close the risk, with a generic opening line rewritten as a specific one.](/images/blog/product-description-objection-order.svg)

A hypothetical to show the shape, not a customer result. Suppose the objection is "will this fit a 16-inch laptop?" An opening line reading *Crafted from premium full-grain leather for the modern professional* could become *Fits a 16-inch laptop with the charger, in a padded sleeve measuring 38 x 26 cm.* Then the leather. Then the strap length. Then the return window.

The leather sentence is not wrong. It is just answering a question nobody asked at that moment.

## How long should a product description be?

Length should match the number of objections, not a word count. If one question stands between a visitor and checkout, one short paragraph is a reasonable answer. If four questions do, you need four answers, and trimming to fifty words to look clean is a false economy.

A short description suits a product that is familiar, cheap, and visually self-explanatory. A plain white cotton tee arguably needs the fabric weight, the fit and the sizing, and little else.

Detail earns its place when the purchase is expensive, technical, hard to return, or unfamiliar to the buyer. Anything where the customer is imagining a failure, that it will not fit, will not work with their setup, or will not last, deserves the paragraph that removes that specific fear.

Our view: the useful test is whether every sentence is doing work. Read the description and mark which buyer question each line answers. Lines that answer nothing are padding, whether the page runs to 60 words or 600. That test is more practical than any recommended length, because it is grounded in your product and your buyers rather than an average across other people's stores.

## How do you know whether the rewrite worked?

Compare the same page's numbers over a matched window before and after the change, and look at the funnel rather than revenue alone.

Four GA4 figures are worth tracking per product:

- **Items viewed.** The number of items that the customer viewed, populated by sending an items array with the `view_item` event.
- **Items added to cart.** The number of items added to a shopping cart, populated by sending an items array with the `add_to_cart` event. This is the metric a description most directly influences.
- **Session key event rate.** The percentage of sessions that converted, calculated as the number of sessions in which a key event happened divided by the total number of sessions. GA4 defines it in the same reference table as the metrics above.
- **Item revenue.** Revenue from items after refunds are subtracted, with tax and shipping left out.

On timing: use equal-length windows before and after, and avoid straddling a promotion, a seasonal peak or a paid campaign launch, because a change in traffic mix makes the comparison hard to read.

Also check Search Console for that URL. In the table, average position is the average position in search results for the specific URL shown in the row, so if it moved during the test window, some of the change came from ranking rather than copy. Small stores will often see noisy numbers. Treat a single week's swing as nothing.

## Where does this approach fail?

The rewrite-by-objection method described above (rank pages, name the objection, rewrite, then measure) breaks in four predictable ways, and it is worth knowing them before you spend a Saturday rewriting.

**Not enough traffic.** On a page with a handful of visits a month, no analytics view can tell you much. Two orders instead of one is not a 100% improvement; it is noise. For those pages, ask customers directly or fix them by judgement.

**The objection is not copy.** Shipping cost, delivery time and price are not things a sentence can rewrite. If Clarity session recordings show people reaching the shipping line and leaving, the description is not the problem.

**Anonymized queries hide some intent.** Search Console omits from its tables the queries that are not issued by more than a few dozen users over a two-to-three month period, so the specific worry driving some buyers may never appear in the queries table. What you see is the more popular part of the picture.

**The problem is the product or the photography.** A rewrite cannot fix a product shot that misrepresents colour or a spec that genuinely does not compete. Budgeting attention across those problems is the sequencing question covered in [building an ecommerce marketing strategy with a small budget](/blog/ecommerce-marketing-strategy-small-budget).

## Frequently asked questions

### What is a product description that sells?

A product description that sells is page copy that answers the specific objection stopping that page's visitors from buying, backed by a concrete detail that proves the answer, rather than generic praise of the product. Judge it by the change in items added to cart and item revenue for that page, not by how it reads.

### Should AI write product descriptions?

Use AI for the draft and not the decision. Feed it the objection you identified from the Search Console queries dimension or from Clarity session recordings, the real specs, and your existing brand wording. Then edit. A description generated from a blank prompt tends to produce the exact flattering-but-empty sentence you are trying to remove. Our longer view on where AI helps a lean store is in [AI marketing for ecommerce](/blog/ai-marketing-for-ecommerce).

### Do duplicate manufacturer descriptions hurt?

Our view is that they hurt commercially before anything else: identical copy gives a shopper no reason to buy from you rather than the next retailer stocking the same item. Rewriting the pages that already receive search clicks is the higher-value fix.

### How many pages should a one-person team rewrite per month?

Fewer than feels productive. A handful of well-chosen pages, each rewritten against a named objection and then measured, beats a pile of rushed rewrites you can never evaluate. The measurement window is the constraint, not the writing.

## Next step

One full cycle of the rewrite-by-objection method can fit into a single week. Run it once, in this order:

1. Open GA4 and pull your ten highest-traffic product pages, with items viewed, items added to cart and item revenue for a fixed recent window.
2. Rank them by the gap: most items viewed, fewest items added to cart.
3. Take the top page, open the Search Console Performance report filtered to that URL and look at its queries, then watch a few Clarity session recordings of that page. Write down one objection in one sentence.
4. Rewrite the description in the order above: objection, proof, context, risk-reducer.
5. Put a date in your diary at the end of an equal-length window to compare the same four metrics, and note any promotion running in that window so the comparison stays honest.

One page, one objection, one check-back date. That is a complete cycle, and it is repeatable next month without any new tools.

The slow part of that cycle is step two, deciding which page deserves the week, because it means holding traffic, conversion and margin side by side for every product you sell. That prioritisation is the job [StoreCMO](/product) is being built to do for ecommerce teams. It is in development, so treat this as our thesis rather than a tool you can pick up today, and run the cycle manually in the meantime. The method works either way.
