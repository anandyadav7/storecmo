import test from "node:test";
import assert from "node:assert/strict";
import path from "node:path";
import { getAllPosts, getPost, parsePost, readingTimeMinutes } from "../lib/blog.ts";

const fixtures = path.join(import.meta.dirname, "fixtures", "blog");

test("parsePost reads frontmatter, derives slug from filename, splits tags", () => {
  const source = `---\ntitle: Hello: World\ndescription: A desc\npublishedAt: 2026-08-20\ncategory: Growth\ntags: a, b ,c\n---\n\nBody text here.`;
  const post = parsePost(source, "hello-world.md");
  assert.equal(post.slug, "hello-world");
  assert.equal(post.title, "Hello: World");
  assert.equal(post.description, "A desc");
  assert.equal(post.publishedAt, "2026-08-20");
  assert.equal(post.updatedAt, "2026-08-20", "updatedAt defaults to publishedAt");
  assert.equal(post.category, "Growth");
  assert.deepEqual(post.tags, ["a", "b", "c"]);
  assert.equal(post.content, "Body text here.");
  assert.equal(post.wordCount, 3);
});

test("parsePost strips surrounding quotes from values", () => {
  const source = `---\ntitle: "Quoted"\ndescription: 'Single'\npublishedAt: 2026-01-01\ncategory: X\ntags: y\n---\nBody`;
  const post = parsePost(source, "q.md");
  assert.equal(post.title, "Quoted");
  assert.equal(post.description, "Single");
});

test("parsePost throws on missing required fields", () => {
  assert.throws(() => parsePost(`---\ntitle: Only title\n---\nBody`, "bad.md"), /bad\.md/);
  assert.throws(() => parsePost(`No frontmatter at all`, "none.md"), /none\.md/);
});

test("getAllPosts sorts newest first and getPost finds by slug", () => {
  const posts = getAllPosts(fixtures);
  assert.deepEqual(posts.map((p) => p.slug), ["newer-post", "older-post"]);
  assert.equal(getPost("older-post", fixtures)?.title, "Older Post");
  assert.equal(getPost("missing", fixtures), undefined);
});

test("readingTimeMinutes rounds up and never returns zero", () => {
  assert.equal(readingTimeMinutes(0), 1);
  assert.equal(readingTimeMinutes(230), 1);
  assert.equal(readingTimeMinutes(231), 2);
  assert.equal(readingTimeMinutes(1200), 6);
});
