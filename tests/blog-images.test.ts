import test from "node:test";
import assert from "node:assert/strict";
import { readFile } from "node:fs/promises";
import { join } from "node:path";

const articles = [
  ["ai-tools-for-ecommerce-marketing", "ecommerce-ai-tool-jobs-map.svg", "Six ecommerce marketing jobs mapped to the AI tools that fit them, with production jobs shown as crowded and the decision layer above them shown as sparse."],
  ["ai-marketing-for-ecommerce", "ai-marketing-three-layers.svg", "Three-layer model showing analysis informing decisions, which guide execution, with most AI tools concentrated in execution."],
  ["best-ai-agents-for-ecommerce", "ecommerce-ai-agent-bottleneck-map.svg", "Decision map connecting common ecommerce bottlenecks to support, conversion, retention, measurement, and store-admin AI agents."],
  ["ecommerce-marketing-strategy-for-lean-teams", "lean-ecommerce-strategy-loop.svg", "Five-part ecommerce marketing strategy loop covering growth opportunity, customer positioning, channels, calendar, and weekly measurement."],
  ["ecommerce-marketing-strategy-small-budget", "small-budget-marketing-sequence.svg", "Four-stage sequence for small-budget ecommerce marketing: conversion first, then retention, owned traffic, and narrowly targeted paid acquisition."],
  ["should-you-let-an-ai-cmo-decide", "ai-cmo-human-oversight-loop.svg", "Human oversight loop showing an AI recommendation with reasoning reviewed by a marketer before action and outcome review."],
  ["what-is-an-ai-cmo", "ai-cmo-capability-ladder.svg", "Capability ladder from analysis and prioritisation through strategy and execution, with human judgment shown as the final boundary."],
] as const;

test("every article has its planned explanatory image with descriptive alt text", async () => {
  for (const [slug, filename, alt] of articles) {
    const article = await readFile(join(process.cwd(), "content/blog", `${slug}.md`), "utf8");
    assert.match(article, new RegExp(`!\\[${alt.replace(/[.*+?^${}()|[\\]\\]/g, "\\$&")}\\]\\(/images/blog/${filename.replace(".", "\\.")}\\)`));
  }
});
