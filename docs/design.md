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

## Visual system

| Token | Value | Role |
| --- | --- | --- |
| `--bg` | `#f7f5f0` | warm off-white page |
| `--surface` | `#ffffff` | white content panels |
| `--ink` | `#15140f` | near-black type |
| `--muted` | `#6b675e` | metadata |
| `--border` | `#e3dfd6` | hairlines |
| `--accent` | `#0e6b43` | the one accent: deep commerce green (growth / "order confirmed"), distinct from ZeroCMO's lime |

Type: **Instrument Sans** (display + body, tight-tracked headlines at 600) and **DM Mono** for small labels (eyebrows, ledger labels, metadata) — a nod to SKUs, receipts, order numbers. 4px radii, hairline rules, no gradients/glass/3D/illustration, no animation beyond hover/focus transitions. `prefers-reduced-motion` respected.

**Signature element:** the homepage hero pairs the thesis ("Your AI CMO for ecommerce.") with a white "question ledger" listing the eight questions an ecommerce CMO answers every week (Strategy, SEO, Content, Competitors, Conversion, Paid, Retention, Growth). It communicates the job StoreCMO is being built to do without faking a product screenshot.

Structural devices encode meaning: numbered steps only where order matters (the "how it works" sequence); mono labels only for classification (discipline, category, status).

## Pages

`/` hero + waitlist, ledger, who it's for, how it's designed to work, playbook (latest 3), CTA band · `/product` scope in development, principles, status · `/blog` playbook index · `/blog/[slug]` article with TOC, FAQ schema, related, CTA · `/about` · `/contact` form · `404`.

## SEO / AEO / GEO

Per-page title, description, canonical, full Open Graph + Twitter (helper: `lib/seo.ts`, because Next replaces nested `openGraph` objects rather than merging). Generated OG images for site and each article. `sitemap.xml`, `robots.txt`, `feed.xml`, `llms.txt`. JSON-LD: Organization + Person + WebSite (root), WebPage/AboutPage/ContactPage/CollectionPage, BreadcrumbList, Article, FAQPage (from the `## Frequently asked questions` section). Articles open with a direct answer and use question-style headings.

## Content voice

Plain, specific, calmly opinionated, honest about status. Never invent stats, customers, or results. "We" refers only to the people building StoreCMO. The product is described as being built, never as available.
