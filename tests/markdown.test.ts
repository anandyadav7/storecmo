import test from "node:test";
import assert from "node:assert/strict";
import { extractFaq, parseInline, parseMarkdown, toPlainText } from "../lib/markdown.ts";

test("parseMarkdown builds headings, paragraphs, lists, quotes, code, tables", () => {
  const md = [
    "## Heading two",
    "",
    "Line one",
    "line two of same paragraph.",
    "",
    "### Heading three",
    "",
    "- item a",
    "- item b",
    "",
    "1. first",
    "2. second",
    "",
    "> a quote",
    "",
    "```js",
    "const x = 1;",
    "```",
    "",
    "| Col A | Col B |",
    "| --- | --- |",
    "| 1 | 2 |",
  ].join("\n");
  const blocks = parseMarkdown(md);
  assert.deepEqual(blocks.map((b) => b.type), ["h2", "p", "h3", "ul", "ol", "blockquote", "code", "table"]);
  assert.equal(blocks[1].type === "p" && blocks[1].text, "Line one line two of same paragraph.");
  assert.deepEqual(blocks[3].type === "ul" && blocks[3].items, ["item a", "item b"]);
  assert.deepEqual(blocks[4].type === "ol" && blocks[4].items, ["first", "second"]);
  assert.equal(blocks[6].type === "code" && blocks[6].language, "js");
  const table = blocks[7];
  assert.ok(table.type === "table");
  assert.deepEqual(table.headers, ["Col A", "Col B"]);
  assert.deepEqual(table.rows, [["1", "2"]]);
});

test("headings carry stable ids for anchors", () => {
  const blocks = parseMarkdown("## What Is an AI CMO?\n\n## What Is an AI CMO?");
  assert.equal(blocks[0].type === "h2" && blocks[0].id, "what-is-an-ai-cmo");
  assert.equal(blocks[1].type === "h2" && blocks[1].id, "what-is-an-ai-cmo-2");
});

test("parseInline splits bold, code, links, and images", () => {
  const parts = parseInline("Go **bold** and `code` then [link](/x) and ![alt](/img.png) end");
  assert.deepEqual(parts, [
    { type: "text", text: "Go " },
    { type: "strong", text: "bold" },
    { type: "text", text: " and " },
    { type: "code", text: "code" },
    { type: "text", text: " then " },
    { type: "link", text: "link", href: "/x" },
    { type: "text", text: " and " },
    { type: "image", alt: "alt", src: "/img.png" },
    { type: "text", text: " end" },
  ]);
});

test("toPlainText removes markdown syntax", () => {
  assert.equal(toPlainText("Some **bold** and `code` with a [link](/x).\nNext line"), "Some bold and code with a link. Next line");
});

test("extractFaq returns question/answer pairs from the FAQ section only", () => {
  const md = [
    "## Intro",
    "",
    "### Not a FAQ",
    "",
    "ignore me",
    "",
    "## Frequently asked questions",
    "",
    "### Is this a question?",
    "",
    "Yes, **it** is.",
    "",
    "More detail.",
    "",
    "### Another one?",
    "",
    "Short.",
    "",
    "## Conclusion",
    "",
    "### Not included",
    "",
    "nope",
  ].join("\n");
  assert.deepEqual(extractFaq(md), [
    { question: "Is this a question?", answer: "Yes, it is. More detail." },
    { question: "Another one?", answer: "Short." },
  ]);
  assert.deepEqual(extractFaq("## No faq here\n\ntext"), []);
});
