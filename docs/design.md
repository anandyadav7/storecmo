# StoreCMO.com — site design notes

_Last updated: 2026-08-20._ Captures the decisions behind the marketing site so they are not re-litigated by accident. The brief this was built from is in the initial commit message.

## Purpose and boundary

A marketing + content site for StoreCMO, an AI CMO for ecommerce that is **in development**. Jobs: establish the brand, communicate positioning honestly, build SEO authority through the playbook, collect waitlist interest, and serve as a foundation the product can later grow into. No product functionality (auth, dashboards, agents, Shopify, payments, database, CMS, analytics).

## Stack choices

- **Next.js 16 App Router + TypeScript**, mirroring the sibling `zerocmo-site` so the two codebases stay familiar and can eventually share a backend.
- **No Tailwind, no UI kit.** Plain CSS with a token system in `app/globals.css`; a marketing site of this size is easier to keep consistent with one stylesheet than with utility classes.
- **Markdown articles** in `content/blog/` with a small in-repo parser (`lib/markdown.ts`). Zero content dependencies; the filename is the slug.
- **Server Actions** for forms, forwarding to a configurable webhook (`WAITLIST_WEBHOOK_URL`, `CONTACT_WEBHOOK_URL`). No database. Honeypot + server validation. Progressive enhancement: works without client JS.
- **`node:test`** for unit tests on the pure modules (blog parsing, markdown, validation). No test framework.

## Visual system — "Soft Commerce" (redesigned 2026-08-22)

The original launch design was a warm-paper "receipt/ledger" system (Instrument Sans + DM Mono, deep green `#0e6b43`, 4px radii, hairline rules). On 2026-08-22 the owner ran a five-direction art-direction exploration on a design canvas ("StoreCMO Homepage" artifact) and chose **Soft Commerce**: friendly modern SaaS — familiar and reassuring to Shopify-era merchants, conversion-first. Its known tradeoff, accepted at the time: it is the most conventional of the five directions explored.

| Token | Value | Role |
| --- | --- | --- |
| `--bg` | `#f3f5f0` | light warm-green page |
| `--surface` | `#ffffff` | white cards, soft shadows |
| `--ink` | `#1c211b` | near-black type, warm green cast |
| `--muted` | `#8a927f` | metadata |
| `--border` | `#dde3d9` | hairlines and input borders |
| `--accent` | `#0f8a5f` | primary: fresh commerce green |
| `--peach` | `#ff8a5c` | secondary: warm peach (header CTA, highlights) |
| `--band` | `#103a2a` | deep green CTA band card |

Type: **Bricolage Grotesque** (display: headlines, card titles, wordmark) + **Figtree** (body, labels) + **DM Mono** kept only for code blocks, tool formulas, and character counts. Pill radii on buttons/inputs/chips (999px), 20px card radius, soft shadows instead of hairline card borders. Mono-uppercase labels became rounded chips (accent-soft green or white with border). The header is a floating white pill; the CTA band is a rounded deep-green card. `prefers-reduced-motion` respected. One deliberate motion element (owner request, 2026-08-22): the homepage platform marquee — a CSS-only scrolling strip of platform-name chips under the hero, text not logos, phrased "being built for stores on" to stay honest about status; pauses on hover and renders static under reduced motion.

**Signature element:** the homepage hero pairs the thesis ("Your AI CMO for ecommerce.", with a peach highlight wash on "AI CMO") with a white soft-shadow card listing the eight questions an ecommerce CMO answers every week (Strategy, SEO, Content, Competitors, Conversion, Paid, Retention, Growth). It communicates the job StoreCMO is being built to do without faking a product screenshot.

Structural devices encode meaning: numbered circle badges only where order matters (the "how it works" sequence); chips only for classification (discipline, category, status).

## Pages

`/` hero + waitlist, ledger, who it's for, how it's designed to work, playbook (latest 3), CTA band · `/product` scope in development, principles, status · `/blog` playbook index · `/blog/[slug]` article with TOC, FAQ schema, related, CTA · `/tools` free-tools index · `/tools/[slug]` interactive tool + formula explainer + FAQ schema + related posts · `/about` · `/contact` form · `404`.

## Free tools (added 2026-08-22)

Seven client-side tools as an SEO/lead-gen play, from the competitive research in the "Free Tools Opportunity Brief" artifact: profit margin, break-even ROAS, CAC:LTV ratio, AOV, conversion and revenue lift, and free-shipping threshold calculators, plus a template-driven meta title/description generator. Deliberate constraints: pure browser-side maths (no backend, no AI calls, nothing typed is transmitted — this keeps the "marketing site only" boundary); a registry (`lib/tools.ts`) drives pages/sitemap/schema; calculation logic lives in `lib/calculators.ts` under unit tests; copy never invents benchmarks (the 3:1 LTV:CAC heuristic is labeled a rule of thumb). Each tool page carries the same explainer + FAQ + interlinking treatment as articles so pages rank on long-tail phrasing rather than shipping thin.

## SEO / AEO / GEO

Per-page title, description, canonical, full Open Graph + Twitter (helper: `lib/seo.ts`, because Next replaces nested `openGraph` objects rather than merging). Generated OG images for site and each article. `sitemap.xml`, `robots.txt`, `feed.xml`, `llms.txt`. JSON-LD: Organization + Person + WebSite (root), WebPage/AboutPage/ContactPage/CollectionPage, BreadcrumbList, Article, FAQPage (from the `## Frequently asked questions` section). Articles open with a direct answer and use question-style headings.

## Content voice

Plain, specific, calmly opinionated, honest about status. Never invent stats, customers, or results. "We" refers only to the people building StoreCMO. The product is described as being built, never as available.
