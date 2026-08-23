/**
 * Single source of truth for the free tools at /tools. Each entry drives the
 * index card, the tool page (intro, explainer sections, FAQ schema), the
 * sitemap, and the OG image. The interactive component for each slug is mapped
 * in components/tools/tool-widget.tsx.
 */

export type ToolFaq = { question: string; answer: string };
export type ToolSection = { heading: string; body: string[] };

export type Tool = {
  slug: string;
  /** Full tool name, used as the H1 and link label. */
  name: string;
  /** Mono classification label, mirroring the tool categories merchants search in. */
  tag: string;
  /** Meta description and index excerpt. Kept within meta-description length. */
  description: string;
  /** Lead paragraph. Opens with a direct answer to what the tool computes. */
  intro: string;
  /** The formula, in plain words, shown with the explainer. */
  formula: string;
  /** Question-style supporting sections rendered below the tool. */
  sections: ToolSection[];
  /** Feeds FAQPage structured data, like blog articles do. */
  faq: ToolFaq[];
  /** Slugs of related playbook articles. */
  related: string[];
  keywords: string[];
};

export const tools: Tool[] = [
  {
    slug: "ecommerce-profit-margin-calculator",
    name: "Ecommerce Profit Margin Calculator",
    tag: "Unit economics",
    description:
      "Work out the real profit margin on an ecommerce order after COGS, payment and platform fees, shipping, and ad spend. Free, instant, runs in your browser.",
    intro:
      "This calculator shows what you actually keep from an order after every cost is counted: cost of goods, payment and platform fees, shipping, and the advertising it took to win the sale. Most stores that think they have a healthy margin are quoting gross margin; the number that decides whether you can grow is what is left after all four.",
    formula: "Profit = selling price − (COGS + fees + shipping + ad spend). Margin = profit ÷ selling price × 100.",
    sections: [
      {
        heading: "Why does ad spend belong in a margin calculation?",
        body: [
          "Gross margin — price minus product cost — is the number most dashboards show, and it flatters almost every store. If you acquire customers with paid traffic, the ad spend behind an order is as real a cost as the product itself. A store selling at 70% gross margin but spending a third of revenue on ads is running a much thinner business than the dashboard suggests.",
          "Counting ad spend per order also makes channel decisions concrete. If your average order needs $15 of advertising to happen, that $15 has to come out of the same pool that pays for product, fees, and shipping before anything is left for you.",
        ],
      },
      {
        heading: "What counts as fees?",
        body: [
          "Everything a platform or processor takes between the customer's card and your bank account: payment processing (typically a percentage plus a fixed amount per transaction), marketplace or platform commissions, and app charges billed per order. If you are unsure, open one real order's payout breakdown and copy the deductions from there — real numbers beat estimates.",
        ],
      },
      {
        heading: "What should you do with the result?",
        body: [
          "A thin or negative margin is a decision, not just a fact. The levers, in the order most stores can pull them: raise prices on the products that carry demand, cut shipping cost with different packaging or carriers, negotiate COGS at your next reorder volume, and hold ad spend to the products whose contribution margin can afford it. Recalculate after each change — this tool is fastest when you use it to compare scenarios side by side.",
        ],
      },
    ],
    faq: [
      {
        question: "What is a good profit margin for an ecommerce store?",
        answer:
          "There is no single healthy number — it depends on category, price point, and how much of your traffic is paid. What matters is that the margin after all costs is positive and covers your fixed costs at your real order volume. Use the calculator to test whether your current pricing survives your real ad spend per order.",
      },
      {
        question: "Is this gross margin or net margin?",
        answer:
          "Neither, exactly. It is contribution margin per order: price minus all the variable costs of that order, including advertising. It sits between gross margin (which ignores fees, shipping, and ads) and net margin (which also subtracts fixed costs like salaries and software).",
      },
      {
        question: "How do I work out ad spend per order?",
        answer:
          "Divide a period's total ad spend by the number of orders it produced. Last month's Meta and Google spend divided by last month's orders is a reasonable starting point. If a large share of your orders are organic or repeat, calculate paid and organic orders separately — blending them hides how expensive paid orders really are.",
      },
      {
        question: "Does this calculator store or send my numbers anywhere?",
        answer:
          "No. The maths runs entirely in your browser. Nothing you type is sent to a server, stored, or shared — you can verify this from the network tab of your browser's developer tools.",
      },
    ],
    related: ["ecommerce-marketing-strategy-small-budget", "ecommerce-marketing-strategy-for-lean-teams"],
    keywords: ["ecommerce profit margin calculator", "profit margin calculator", "contribution margin ecommerce", "shopify profit calculator"],
  },
  {
    slug: "break-even-roas-calculator",
    name: "Break-Even ROAS Calculator",
    tag: "Paid acquisition",
    description:
      "Find the exact ROAS where your ads stop losing money, from price, COGS, fees, and shipping. Know your break-even before you judge a campaign.",
    intro:
      "Break-even ROAS is the return on ad spend at which a campaign stops losing money — and it is set by your margins, not by your ad account. This calculator derives it from four numbers you already know: selling price, cost of goods, fees, and shipping. Until you know this number, a \"3x ROAS\" report is unreadable: for a high-margin store 3x is comfortable profit, for a thin-margin store it is a loss.",
    formula: "Break-even ROAS = selling price ÷ contribution margin, where contribution margin = price − COGS − fees − shipping.",
    sections: [
      {
        heading: "Why is break-even ROAS different for every store?",
        body: [
          "Because it is your margin structure turned upside down. A store keeping 50% of each order after variable costs breaks even at 2.0x ROAS; a store keeping 25% needs 4.0x just to stand still. Two stores can run identical campaigns with identical reported ROAS and one is compounding profit while the other is financing its ad platform.",
          "This is why comparing your ROAS to another store's — or to a benchmark from a blog post — tells you almost nothing. The only comparison that matters is against your own break-even.",
        ],
      },
      {
        heading: "How should you use the number day to day?",
        body: [
          "Treat it as the floor, not the target. Campaigns at break-even are buying customers for free, which can be rational if those customers reorder — but the first order itself makes nothing. A practical habit: set your target ROAS visibly above break-even for cold traffic, and allow spend closer to break-even only where you have evidence of repeat purchases. Pair this calculator with the LTV:CAC calculator to see whether repeat behaviour actually justifies it.",
        ],
      },
      {
        heading: "What costs should you include?",
        body: [
          "Everything that scales with the order: product cost, payment and platform fees, and shipping you pay for. Leave out fixed costs — rent, salaries, software — because they don't change when one more ad-driven order arrives. If you offer free shipping, the shipping cost is yours and belongs in the calculation; if the customer pays it, set shipping to what it costs you beyond what they pay.",
        ],
      },
    ],
    faq: [
      {
        question: "What is a good ROAS for ecommerce ads?",
        answer:
          "Good is relative to your break-even, which this calculator gives you. A useful reading: anything below break-even loses money on the first order, at break-even you acquire customers at zero first-order profit, and above it you bank margin. Where your target should sit above break-even depends on how much repeat purchasing your store really sees.",
      },
      {
        question: "Does break-even ROAS include ad platform fees?",
        answer:
          "The ad spend itself is what ROAS measures against, so it is not part of the margin inputs. But payment processing and platform commissions on the sale do belong in the fees field, because they reduce what each ad-driven order leaves behind.",
      },
      {
        question: "Should I use gross margin or contribution margin for this?",
        answer:
          "Contribution margin — price minus all per-order variable costs. Using gross margin (price minus product cost only) understates your break-even and makes losing campaigns look profitable, which is the exact mistake this calculator exists to prevent.",
      },
      {
        question: "My campaign is below break-even ROAS. Should I kill it immediately?",
        answer:
          "Not automatically. First-order losses can be rational if the customers it brings genuinely reorder, if it feeds retargeting audiences, or if it is still in learning. But the loss should be a decision you can defend with repeat-purchase data, not a surprise you discover after the quarter closes.",
      },
    ],
    related: ["ecommerce-marketing-strategy-small-budget"],
    keywords: ["break even roas calculator", "break-even roas", "ecommerce roas calculator", "target roas calculator"],
  },
  {
    slug: "cac-ltv-ratio-calculator",
    name: "CAC : LTV Ratio Calculator",
    tag: "Growth",
    description:
      "Calculate customer lifetime value and compare it to your acquisition cost in one tool. See whether what a customer is worth justifies what you pay to win one.",
    intro:
      "This tool answers two questions most calculators split apart: what is a customer worth to your store over their lifetime, and does that justify what you pay to acquire one? Enter your average order value, gross margin, purchase frequency, customer lifespan, and acquisition cost, and it returns your LTV and the LTV:CAC ratio — the single clearest signal of whether your growth spend is building a business or renting revenue.",
    formula: "LTV = average order value × gross margin % × purchases per year × lifespan in years. Ratio = LTV ÷ CAC.",
    sections: [
      {
        heading: "Why look at LTV and CAC together instead of separately?",
        body: [
          "Because neither number means anything alone. A $60 CAC is excellent for a store whose customers are worth $400 over three years and ruinous for one whose customers buy once for $70. Splitting the two metrics into separate tools — as most calculator libraries do — invites exactly that mistake: optimising acquisition cost without asking what the acquired customer is worth.",
          "The ratio also sets your real ceiling on ad spend. If your margin-adjusted LTV is $180, you know precisely how much room you have before customer acquisition becomes value destruction.",
        ],
      },
      {
        heading: "How do you estimate lifespan and frequency honestly?",
        body: [
          "Look backwards, not forwards. From your order history: how many orders does a repeat customer place per year, and how long after their first order do customers typically stop buying? Young stores without years of history should be conservative — a one-year lifespan assumption keeps the LTV honest until real cohort data exists. Resist the temptation to assume the customers you hope to have rather than the ones you do.",
        ],
      },
      {
        heading: "What does the ratio tell you to do?",
        body: [
          "A ratio near or below 1 means acquisition is destroying value — fix the offer, the margin, or the targeting before scaling spend. A common rule of thumb treats around 3:1 as healthy, but the right reading depends on your cash position: a high ratio with slow payback can still strangle a store that needs the cash back this quarter. Use the ratio to decide direction, and your payback period to decide pace.",
        ],
      },
    ],
    faq: [
      {
        question: "What is a good LTV to CAC ratio?",
        answer:
          "A widely used rule of thumb is around 3:1 — a customer worth roughly three times what they cost to acquire. Below 1:1 you are losing money on every customer. But treat the rule as orientation, not law: the right ratio for your store depends on margins, payback speed, and how much cash you can afford to have tied up in acquisition.",
      },
      {
        question: "Should LTV use revenue or margin?",
        answer:
          "Margin. A customer who generates $500 of revenue at 40% gross margin contributes $200 toward acquisition costs and profit — that is the figure to weigh against CAC. Revenue-based LTV overstates value by exactly your cost of goods, which is why this calculator asks for gross margin.",
      },
      {
        question: "How do I calculate my CAC?",
        answer:
          "Divide total acquisition spend for a period — ad spend plus any agency, creative, or affiliate costs tied to winning new customers — by the number of new customers in the same period. Exclude repeat customers from the denominator; blending them in makes CAC look better than it is.",
      },
      {
        question: "My ratio is below 1. What should I change first?",
        answer:
          "Usually margin or offer before channel. Raising average order value, improving gross margin, or increasing repeat purchase rate lifts LTV for every future customer, while channel optimisation only trims CAC at the edges. If the product economics can't support any realistic CAC, no amount of media buying skill fixes it.",
      },
    ],
    related: ["ecommerce-marketing-strategy-small-budget", "ecommerce-marketing-strategy-for-lean-teams"],
    keywords: ["ltv cac ratio calculator", "cac calculator ecommerce", "customer lifetime value calculator", "ltv to cac"],
  },
  {
    slug: "average-order-value-calculator",
    name: "Average Order Value Calculator",
    tag: "Store metrics",
    description:
      "Calculate your store's average order value from revenue and order count, and see what the number is actually for: pricing free shipping, bundles, and ad budgets.",
    intro:
      "Average order value is total revenue divided by number of orders — the simplest metric in ecommerce, and one of the most used, because it prices almost every other decision: where a free-shipping threshold should sit, whether a bundle is working, and how much an ad click can afford to cost. Enter revenue and orders for any period and this calculator gives you the number plus the context to use it.",
    formula: "AOV = total revenue ÷ number of orders, for the same period.",
    sections: [
      {
        heading: "Which revenue figure should you use?",
        body: [
          "Be consistent, and know what you chose. Revenue before or after discounts, including or excluding shipping charged, before refunds or net of them — any of these can be defended, but mixing them across periods makes your AOV trend meaningless. The most decision-useful version for most stores: product revenue after discounts, excluding shipping charged, net of refunds, because that is the money your margin maths runs on.",
        ],
      },
      {
        heading: "How do you actually raise AOV?",
        body: [
          "The levers with the most evidence behind them are structural, not persuasive: a free-shipping threshold set a little above your current AOV, bundles that package what customers already buy together, and volume pricing on consumables. Post-purchase upsells add to the order after the buying decision is made, which is why they tend to outperform pop-ups that interrupt it.",
          "Measure any change against a full period, not a good week — AOV moves with promotions, seasonality, and product mix, and short windows mostly show noise.",
        ],
      },
    ],
    faq: [
      {
        question: "What is a good average order value?",
        answer:
          "Whatever your unit economics need it to be — there is no universal benchmark worth chasing. A $30 AOV store with strong repeat purchasing can out-earn a $150 AOV store with none. Compare your AOV against your own history and against what your CAC and margins require, not against other stores.",
      },
      {
        question: "Should AOV include shipping and taxes?",
        answer:
          "Most stores exclude taxes always, and exclude shipping charged to the customer when the AOV is feeding margin or threshold decisions. The critical thing is consistency: pick one definition, note it, and use it every period, or your trend line stops meaning anything.",
      },
      {
        question: "AOV went up but profit went down. How?",
        answer:
          "AOV is a revenue metric, blind to cost. Discount-heavy bundles, free-shipping thresholds set below cost recovery, or a mix shift toward low-margin products can all raise AOV while shrinking profit. Check contribution margin per order alongside AOV — the profit margin calculator on this site does exactly that.",
      },
    ],
    related: ["ecommerce-marketing-strategy-for-lean-teams"],
    keywords: ["average order value calculator", "aov calculator", "how to calculate aov", "increase average order value"],
  },
  {
    slug: "ecommerce-conversion-rate-calculator",
    name: "Ecommerce Conversion & Revenue Lift Calculator",
    tag: "Conversion",
    description:
      "Calculate your ecommerce conversion rate and model how changes to conversion and average order value affect monthly orders and revenue. Free, no signup.",
    intro:
      "This calculator shows how much revenue your store produces at its current conversion rate and what a realistic improvement could be worth. Enter one month's sessions, conversion rate, and average order value, then set a target scenario. You will see the resulting orders, revenue, and incremental lift without pretending that a benchmark is a forecast for your store.",
    formula:
      "Revenue = sessions × conversion rate × average order value. Projected revenue lift = target-scenario revenue − current-scenario revenue.",
    sections: [
      {
        heading: "Why model conversion rate and average order value together?",
        body: [
          "Because traffic does not become revenue through conversion alone. Sessions decide how many chances you have, conversion rate decides how many become orders, and average order value decides what each order is worth. A small improvement in both conversion and basket size compounds: more visitors buy, and each resulting order contributes more revenue.",
          "The combined view also stops a common measurement mistake. A promotion can raise conversion while lowering AOV, or a bundle can raise AOV while making fewer visitors buy. Looking at revenue from both levers tells you whether the trade actually moved the store forward.",
        ],
      },
      {
        heading: "How should you choose a target conversion rate?",
        body: [
          "Start with your own recent baseline and model a modest change you could plausibly create and measure. Category, device mix, traffic source, price point, season, and whether you count all sessions make cross-store benchmarks unreliable. Your last comparable month is a better baseline than somebody else's average.",
          "Use the target as a scenario, not a promise. If you are evaluating one checkout change, leave target AOV equal to current AOV so the model isolates conversion. If you are planning a bundle or free-shipping test, hold conversion steady first and see what the AOV change alone would produce.",
        ],
      },
      {
        heading: "What should you do with the projected lift?",
        body: [
          "Use it to size opportunities before you prioritise them. The lift shows the revenue available if the target scenario holds at the same traffic level; it does not prove that a specific redesign, app, or promotion will create that change. Compare the upside with the cost and effort of the test, then measure the real result against the same definitions and period used here.",
          "Remember that this tool models revenue, not profit. If the target AOV comes from deeper discounts, free gifts, or higher fulfilment cost, run the projected order through the profit margin calculator before treating the lift as money you get to keep.",
        ],
      },
    ],
    faq: [
      {
        question: "How do you calculate ecommerce conversion rate?",
        answer:
          "Divide orders by store sessions for the same period, then multiply by 100. For example, 200 orders from 10,000 sessions is a 2% conversion rate. Keep the traffic source and period consistent whenever you compare results.",
      },
      {
        question: "What is a good ecommerce conversion rate?",
        answer:
          "There is no universal good rate. It changes with category, price, device, geography, traffic quality, and how analytics counts sessions and orders. Compare your store with its own historical baseline and aim for measured improvement without sacrificing margin or order value.",
      },
      {
        question: "Should you change conversion rate and AOV at the same time?",
        answer:
          "For diagnosis, change one target at a time so you can see what each lever contributes. Use both together only when you are deliberately modeling a combined plan, such as improving checkout while launching bundles, and keep the assumptions visible.",
      },
      {
        question: "Is projected revenue lift a forecast?",
        answer:
          "No. It is a scenario that holds monthly traffic constant and applies the target conversion rate and AOV you entered. Real results can change with traffic quality, seasonality, discounts, product mix, returns, and the implementation itself.",
      },
      {
        question: "Does this calculator store my analytics data?",
        answer:
          "No. The calculation runs entirely in your browser. Nothing you enter is sent to a server, stored, or shared, and you do not need to connect your store or create an account.",
      },
    ],
    related: ["ecommerce-marketing-strategy-for-lean-teams", "ecommerce-marketing-strategy-small-budget"],
    keywords: [
      "ecommerce conversion rate calculator",
      "conversion rate calculator",
      "revenue lift calculator",
      "ecommerce revenue calculator",
      "conversion rate revenue impact",
    ],
  },
  {
    slug: "free-shipping-threshold-calculator",
    name: "Free Shipping Threshold Calculator",
    tag: "Pricing",
    description:
      "Find where to set your free shipping minimum so the extra basket size pays for the shipping you absorb, from your AOV, shipping cost, and margin.",
    intro:
      "A free-shipping threshold works when the extra items customers add to reach it generate enough margin to cover the shipping you give away. This calculator finds that point from three numbers: your current average order value, what shipping an order costs you, and your gross margin. The answer is a starting threshold that is mathematically defensible — above your AOV, and high enough that the added basket pays the freight.",
    formula: "Extra revenue needed = shipping cost ÷ gross margin %. Suggested threshold = current AOV + extra revenue needed, rounded up.",
    sections: [
      {
        heading: "Why set the threshold above your current AOV?",
        body: [
          "A threshold below your average order gives free shipping to orders that would have happened anyway — pure cost, no behaviour change. Setting it above AOV asks customers to stretch, and the stretch is the point: the added items carry margin, and that margin is what funds the shipping. The calculator quantifies the stretch precisely — enough added revenue that, at your margin, it covers the shipping cost you absorb.",
        ],
      },
      {
        heading: "When does the maths break?",
        body: [
          "Three honest caveats. If the computed threshold lands far above your AOV — because margins are thin or shipping is expensive — customers may not stretch that far, and a threshold nobody reaches is just a banner. If your typical basket has no natural second item (one-product stores, big-ticket goods), threshold mechanics have little to work with. And orders that land between your old AOV and the threshold get free shipping without fully paying for it — the calculation covers the average case, not every order. Treat the output as the starting point for a test, not a guarantee.",
        ],
      },
      {
        heading: "How should you roll a threshold out?",
        body: [
          "Announce it where the stretch happens: the cart, via a progress indicator toward the threshold, and product pages near the price. Then check two numbers after a full period: AOV (did baskets actually grow toward the threshold?) and contribution margin per order (did the growth pay for the shipping?). If AOV moved but margin fell, the threshold is too low or the margin inputs were optimistic — recalculate with real period data.",
        ],
      },
    ],
    faq: [
      {
        question: "Where should I set my free shipping minimum?",
        answer:
          "Above your current average order value, by at least enough that the added basket revenue covers your shipping cost at your gross margin — which is exactly what this calculator computes. Setting it below AOV gives away shipping on orders you were getting anyway.",
      },
      {
        question: "Does free shipping actually increase order size?",
        answer:
          "A visible threshold gives customers a concrete reason to add one more item, and cart progress bars make the gap explicit. How strongly it works depends on your catalogue — stores with natural add-on items see the mechanic work hardest, single-product stores barely at all. The only proof that matters is your own before-and-after AOV and margin.",
      },
      {
        question: "Should I offer free shipping on everything instead?",
        answer:
          "Unconditional free shipping is a pricing decision, not a promotion: the cost has to live somewhere, usually inside your prices. It removes the basket-building incentive a threshold creates, but simplifies the offer. Run both scenarios through the profit margin calculator with your real shipping cost and see which your margin can carry.",
      },
    ],
    related: ["ecommerce-marketing-strategy-for-lean-teams"],
    keywords: ["free shipping threshold calculator", "free shipping minimum", "when to offer free shipping", "free shipping strategy"],
  },
  {
    slug: "meta-title-description-generator",
    name: "Meta Title & Description Generator",
    tag: "Ecommerce SEO",
    description:
      "Generate meta titles and descriptions for product, collection, and content pages from your keyword and brand — template-built, length-checked, no AI required.",
    intro:
      "This generator drafts meta titles and descriptions for ecommerce pages from four inputs: the page type, the primary keyword, your brand, and an optional differentiator like a shipping offer. It is deliberately template-driven rather than AI-driven — the structure of a good ecommerce meta tag is well understood, and templates give you output that is instant, predictable, and length-checked against what search results actually display.",
    formula: "Title ≈ keyword + brand within about 60 characters. Description ≈ what the page offers + why choose you, within about 160 characters.",
    sections: [
      {
        heading: "What makes a good ecommerce meta title?",
        body: [
          "The keyword the page targets, phrased the way shoppers search it, plus your brand — inside roughly 60 characters so it displays without truncation. Front-load the keyword: search results bold the query terms, and a title that opens with what the shopper typed earns the glance. Every template here follows that structure; your job is picking the keyword the page genuinely deserves to rank for.",
        ],
      },
      {
        heading: "Do meta descriptions affect rankings?",
        body: [
          "Not directly — search engines have long treated the description as display text, not a ranking signal. It earns its keep in click-through: it is your one sentence of ad copy under the title. That is also why the differentiator field exists: a concrete reason to choose you (free shipping, handmade, ships today) does more in a description than another repetition of the keyword. Search engines rewrite descriptions they judge unhelpful, so writing one that actually describes the page is how you keep control of the snippet.",
        ],
      },
      {
        heading: "Why templates instead of AI?",
        body: [
          "Because the failure mode of meta tags is not insufficient creativity — it is truncated titles, missing keywords, and descriptions that describe nothing. Templates solve exactly those problems, run instantly in your browser, and never invent claims about your products. Use the variants as strong drafts: the edit worth making by hand is swapping generic phrasing for the specific thing that makes your page the right answer.",
        ],
      },
    ],
    faq: [
      {
        question: "How long should a meta title and description be?",
        answer:
          "Keep titles to roughly 60 characters and descriptions to roughly 160 — beyond that, search results truncate what you wrote. The real limit is pixels rather than characters, so treat these numbers as safe working bounds, not exact cliffs. The generator flags any variant that runs over.",
      },
      {
        question: "Will these generated tags hurt my SEO because they are templates?",
        answer:
          "No — search engines evaluate whether a title and description accurately describe the page, not how they were written. Nearly every large ecommerce site generates meta tags from templates at scale. What hurts is duplication across pages, so make sure each page gets its own keyword rather than reusing one keyword everywhere.",
      },
      {
        question: "Does this tool send my keywords to an AI service?",
        answer:
          "No. The variants are built from fixed templates entirely in your browser. Nothing you type leaves the page — no API calls, no logging, no account needed.",
      },
      {
        question: "Which page type should I pick?",
        answer:
          "Match it to the page's job: product for a single item's page, collection for a category listing several products, homepage for the store's front page, and article for guides or blog content. The templates shift structure accordingly — collection titles invite browsing, product titles name the item, article titles promise an answer.",
      },
    ],
    related: ["ai-marketing-for-ecommerce", "ecommerce-marketing-strategy-for-lean-teams"],
    keywords: ["meta title generator", "meta description generator", "ecommerce meta tags", "seo title generator"],
  },
];

export function getTool(slug: string): Tool | undefined {
  return tools.find((tool) => tool.slug === slug);
}
