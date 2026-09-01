# StoreCMO site — instructions for Claude

- Read `README.md` first. This is a marketing + content site only; do not add product features (auth, dashboards, AI agents, Shopify integration, payments, database, CMS).
- Design tokens live in `app/globals.css` (`:root` variables). Change colours/type there, not inline.
- Blog posts are markdown files in `content/blog/`; the filename is the slug. See README "Adding a blog article" for frontmatter and supported markdown.
- Keep copy honest about status: the product is **in development**. Do not describe features as available.
- Articles: open with a direct answer, use question-style headings, include a `## Frequently asked questions` section with `###` questions (it feeds FAQPage schema), never invent stats, customers, or results.
- Run `npm test`, `npm run lint`, `npm run typecheck`, and `npm run build` before calling work done.
- Copy style: no em dashes anywhere in site copy (articles, tool text, UI strings, metadata). Use a
  full stop, comma, colon, or brackets instead, and rewrite the sentence if none of those read naturally.
