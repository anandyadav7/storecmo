import test from "node:test";
import assert from "node:assert/strict";
import fs from "node:fs";
import path from "node:path";
import { getTool, tools } from "../lib/tools.ts";

const expectedSlugs = [
  "ecommerce-profit-margin-calculator",
  "break-even-roas-calculator",
  "cac-ltv-ratio-calculator",
  "average-order-value-calculator",
  "ecommerce-conversion-rate-calculator",
  "free-shipping-threshold-calculator",
  "meta-title-description-generator",
];

test("the registry lists the seven tools in order", () => {
  assert.deepEqual(tools.map((tool) => tool.slug), expectedSlugs);
});

test("slugs are unique and url-safe", () => {
  const slugs = tools.map((tool) => tool.slug);
  assert.equal(new Set(slugs).size, slugs.length);
  for (const slug of slugs) assert.match(slug, /^[a-z0-9]+(-[a-z0-9]+)*$/);
});

test("every tool carries complete page content", () => {
  for (const tool of tools) {
    assert.ok(tool.name.length > 0, `${tool.slug} name`);
    assert.ok(tool.tag.length > 0, `${tool.slug} tag`);
    assert.ok(tool.description.length >= 50 && tool.description.length <= 165, `${tool.slug} description length (${tool.description.length})`);
    assert.ok(tool.intro.length > 100, `${tool.slug} intro`);
    assert.ok(tool.formula.length > 0, `${tool.slug} formula`);
    assert.ok(tool.sections.length >= 2, `${tool.slug} sections`);
    for (const section of tool.sections) {
      assert.ok(section.heading.length > 0 && section.body.length > 0, `${tool.slug} section content`);
    }
    assert.ok(tool.faq.length >= 3, `${tool.slug} faq count`);
    for (const item of tool.faq) {
      assert.ok(item.question.endsWith("?"), `${tool.slug} faq question: ${item.question}`);
      assert.ok(item.answer.length > 40, `${tool.slug} faq answer for: ${item.question}`);
    }
  }
});

test("related article slugs point at real playbook posts", () => {
  const blogDir = path.join(import.meta.dirname, "..", "content", "blog");
  for (const tool of tools) {
    assert.ok(tool.related.length > 0, `${tool.slug} has related posts`);
    for (const slug of tool.related) {
      assert.ok(fs.existsSync(path.join(blogDir, `${slug}.md`)), `${tool.slug} related post missing: ${slug}`);
    }
  }
});

test("getTool finds tools by slug and returns undefined otherwise", () => {
  assert.equal(getTool("average-order-value-calculator")?.name, tools[3].name);
  assert.equal(getTool("missing-tool"), undefined);
});
