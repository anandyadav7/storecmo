# StoreCMO.com

Marketing and content website for **StoreCMO**, an AI CMO for ecommerce that is in development. This repository is the public site only: positioning, the playbook (blog), about, contact, and a waitlist. It is not the product.

## Stack

- [Next.js 16](https://nextjs.org) (App Router, TypeScript, React Server Components)
- Plain CSS with a token system in `app/globals.css` (no Tailwind, no UI kit)
- Markdown articles in `content/blog/` parsed by a small zero-dependency parser (`lib/markdown.ts`)
- `next/font` self-hosted Instrument Sans + DM Mono
- Unit tests with Node's built-in test runner (`node:test`), no test framework dependency

No database, auth, analytics, or third-party scripts.

## Getting started

```bash
npm install
cp .env.example .env.local   # optional, see Environment below
npm run dev                   # http://localhost:3000
```

Other scripts:

```bash
npm run build      # production build (also validates metadata, sitemap, OG images)
npm run start      # serve the production build
npm run lint       # eslint
npm run typecheck  # tsc --noEmit
npm test           # unit tests for lib/ (blog parsing, markdown, validation)
```

## Project structure

```
app/
  layout.tsx            fonts, global metadata, header/footer, Organization + WebSite JSON-LD
  page.tsx              homepage (hero + waitlist, question ledger, audiences, approach, playbook, CTA)
  product/page.tsx      what is being built (honest, in-development scope)
  blog/page.tsx         playbook index
  blog/[slug]/page.tsx  article page: Article + Breadcrumb + FAQ JSON-LD, TOC, related posts
  blog/[slug]/opengraph-image.tsx   generated per-article OG image
  about/page.tsx, contact/page.tsx, not-found.tsx
  actions.ts            Server Actions for the waitlist and contact forms
  sitemap.ts, robots.ts, feed.xml/route.ts, opengraph-image.tsx, icon.tsx
components/             header/nav, footer, forms, markdown renderer, post list, breadcrumbs, CTA band, JSON-LD
content/blog/*.md       articles (frontmatter + markdown)
lib/
  site.ts               site config: name, URL, author, navigation, social
  blog.ts               read + parse posts, reading time, date formatting
  markdown.ts           markdown subset parser, FAQ extraction, plain-text helper
  schema.ts             schema.org builders (Organization, Person, WebSite, Article, Breadcrumb, FAQ, WebPage)
  validation.ts         form validation shared by the Server Actions
  submissions.ts        delivers submissions to a configurable webhook
public/                 logo SVG, llms.txt
tests/                  node:test unit tests + fixtures
```

## Adding a blog article

Create `content/blog/<slug>.md`. The filename is the URL slug (`/blog/<slug>`).

```md
---
title: Article title
description: One or two sentences. Used as the deck, meta description, and list excerpt.
publishedAt: 2026-08-20
updatedAt: 2026-08-20        # optional, defaults to publishedAt
category: Ecommerce SEO
tags: ecommerce seo, shopify marketing
seoTitle: Optional override for <title>
seoDescription: Optional override for the meta description
---

Opening paragraph that answers the article's main question directly. It is rendered as the lead.

## Headings are questions where possible

Body copy. Supported markdown: `##` / `###` headings, paragraphs, `-` and `1.` lists, `>` quotes,
fenced code blocks, pipe tables, **bold**, `code`, [links](/product), ![images](/path.png).

## Frequently asked questions

### Each `###` question in this section becomes FAQPage structured data

Answer paragraph(s).
```

The article page, sitemap, RSS feed, homepage list, OG image, and structured data all update automatically.

## Environment

| Variable | Purpose |
| --- | --- |
| `NEXT_PUBLIC_SITE_URL` | Canonical origin for links, sitemap, feed, and schema. Defaults to `https://storecmo.com`. |
| `NEXT_PUBLIC_CONTACT_EMAIL` | Optional. When set, shown as a mailto link on the contact page. |
| `WAITLIST_WEBHOOK_URL` | Waitlist submissions are POSTed here as JSON: `{ kind, email, source, submittedAt }`. |
| `CONTACT_WEBHOOK_URL` | Contact submissions are POSTed here as JSON: `{ kind, name, email, message, submittedAt }`. |

Any endpoint that accepts a JSON POST works: Formspree, Zapier, Make, a Slack incoming webhook, or the future StoreCMO backend. **When a webhook is not configured, submissions are only logged to the server console** (as an error in production), so set these before launch.

Forms are progressively enhanced Server Actions: they validate on the server, include a honeypot field for bots, and work without client-side JavaScript.

## SEO, AEO, GEO checklist (implemented)

- Semantic landmarks, skip link, accessible headings, keyboard focus styles, reduced-motion support
- Per-page `<title>`, meta description, canonical URL, Open Graph and Twitter cards
- Generated OG images for the site and every article
- `sitemap.xml`, `robots.txt`, `feed.xml`, `llms.txt`
- JSON-LD: Organization, Person, WebSite (global); WebPage/AboutPage/ContactPage/CollectionPage; BreadcrumbList; Article + FAQPage on posts
- Articles open with a direct answer, use question headings, and carry an FAQ section

## Deploying

Standard Next.js. On Vercel: import the repo, set the environment variables above, deploy. Elsewhere: `npm run build && npm run start`.

## Deliberately not in this repo

Authentication, dashboards, AI agents, Shopify integration, payments, a database, a CMS, analytics. Those belong to the StoreCMO product, which will be built separately and can later share this codebase.
