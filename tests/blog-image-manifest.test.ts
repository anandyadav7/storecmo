import test from "node:test";
import assert from "node:assert/strict";
import { readFile, readdir } from "node:fs/promises";
import { join } from "node:path";
import { blogImages } from "../lib/blog-images.ts";

// The manifest is hand-maintained, and a missing entry fails silently: the
// renderer just omits width/height and the post shifts layout as the SVG loads.
test("every blog SVG has a manifest entry matching its viewBox", async () => {
  const dir = join(process.cwd(), "public/images/blog");
  const files = (await readdir(dir)).filter((f) => f.endsWith(".svg"));

  assert.ok(files.length > 0, "expected blog SVGs to exist");

  for (const file of files) {
    const meta = blogImages[file];
    assert.ok(meta, `${file} is missing from lib/blog-images.ts`);

    const svg = await readFile(join(dir, file), "utf8");
    const viewBox = svg.match(/viewBox="0 0 (\d+) (\d+)"/);
    assert.ok(viewBox, `${file} has no parseable viewBox`);

    assert.equal(meta.width, Number(viewBox[1]), `${file} width disagrees with its viewBox`);
    assert.equal(meta.height, Number(viewBox[2]), `${file} height disagrees with its viewBox`);
  }
});

test("the manifest has no entries for SVGs that no longer exist", async () => {
  const files = new Set(await readdir(join(process.cwd(), "public/images/blog")));
  for (const name of Object.keys(blogImages)) {
    assert.ok(files.has(name), `${name} is in the manifest but not on disk`);
  }
});
