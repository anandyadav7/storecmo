import test from "node:test";
import assert from "node:assert/strict";
import {
  averageOrderValue,
  breakEvenRoas,
  freeShippingThreshold,
  ltvCac,
  metaTagVariants,
  profitMargin,
  DESCRIPTION_LIMIT,
  TITLE_LIMIT,
} from "../lib/calculators.ts";

test("profitMargin computes per-order profit and margin from all costs", () => {
  const result = profitMargin({ price: 100, cogs: 40, fees: 8, shipping: 12, adSpend: 15 });
  assert.equal(result.totalCost, 75);
  assert.equal(result.profit, 25);
  assert.equal(result.marginPct, 25);
});

test("profitMargin reports a negative margin when costs exceed price", () => {
  const result = profitMargin({ price: 50, cogs: 40, fees: 8, shipping: 12, adSpend: 15 });
  assert.equal(result.profit, -25);
  assert.equal(result.marginPct, -50);
});

test("profitMargin returns a 0 margin instead of NaN when price is 0", () => {
  const result = profitMargin({ price: 0, cogs: 10, fees: 0, shipping: 0, adSpend: 0 });
  assert.equal(result.profit, -10);
  assert.equal(result.marginPct, 0);
});

test("breakEvenRoas divides price by contribution margin", () => {
  const result = breakEvenRoas({ price: 100, cogs: 40, fees: 5, shipping: 15 });
  assert.equal(result.contribution, 40);
  assert.equal(result.contributionMarginPct, 40);
  assert.equal(result.roas, 2.5);
});

test("breakEvenRoas returns null when there is no contribution margin to spend", () => {
  const result = breakEvenRoas({ price: 60, cogs: 50, fees: 5, shipping: 5 });
  assert.equal(result.contribution, 0);
  assert.equal(result.roas, null);
  assert.equal(breakEvenRoas({ price: 0, cogs: 0, fees: 0, shipping: 0 }).roas, null);
});

test("ltvCac multiplies order profit across frequency and lifespan, then divides by CAC", () => {
  const result = ltvCac({ averageOrderValue: 80, grossMarginPct: 50, purchasesPerYear: 4, lifespanYears: 2, cac: 80 });
  assert.equal(result.ltv, 320);
  assert.equal(result.ratio, 4);
});

test("ltvCac returns a null ratio when CAC is 0", () => {
  const result = ltvCac({ averageOrderValue: 80, grossMarginPct: 50, purchasesPerYear: 4, lifespanYears: 2, cac: 0 });
  assert.equal(result.ltv, 320);
  assert.equal(result.ratio, null);
});

test("averageOrderValue divides revenue by orders", () => {
  assert.equal(averageOrderValue({ revenue: 12500, orders: 250 }), 50);
});

test("averageOrderValue returns null when there are no orders", () => {
  assert.equal(averageOrderValue({ revenue: 12500, orders: 0 }), null);
});

test("freeShippingThreshold adds the margin-covering revenue to AOV and rounds up to 5", () => {
  const result = freeShippingThreshold({ averageOrderValue: 60, shippingCost: 8, grossMarginPct: 50 });
  assert.equal(result?.extraRevenueNeeded, 16);
  assert.equal(result?.suggestedThreshold, 76);
  assert.equal(result?.roundedThreshold, 80);

  const other = freeShippingThreshold({ averageOrderValue: 62, shippingCost: 5, grossMarginPct: 25 });
  assert.equal(other?.extraRevenueNeeded, 20);
  assert.equal(other?.suggestedThreshold, 82);
  assert.equal(other?.roundedThreshold, 85);
});

test("freeShippingThreshold returns null when the margin is 0 or negative", () => {
  assert.equal(freeShippingThreshold({ averageOrderValue: 60, shippingCost: 8, grossMarginPct: 0 }), null);
  assert.equal(freeShippingThreshold({ averageOrderValue: 60, shippingCost: 8, grossMarginPct: -10 }), null);
});

test("metaTagVariants returns three variants with the keyword and brand in every title", () => {
  const variants = metaTagVariants({ pageType: "collection", keyword: "organic cotton t-shirts", brand: "Loomwell" });
  assert.equal(variants.length, 3);
  for (const variant of variants) {
    assert.match(variant.title, /Organic Cotton T-shirts/);
    assert.match(variant.title, /Loomwell/);
    assert.match(variant.description, /organic cotton t-shirts/i);
  }
});

test("metaTagVariants measures lengths and flags variants over the limits", () => {
  const variants = metaTagVariants({ pageType: "product", keyword: "mug", brand: "Kiln" });
  for (const variant of variants) {
    assert.equal(variant.titleLength, variant.title.length);
    assert.equal(variant.descriptionLength, variant.description.length);
    assert.equal(variant.titleWithinLimit, variant.title.length <= TITLE_LIMIT);
    assert.equal(variant.descriptionWithinLimit, variant.description.length <= DESCRIPTION_LIMIT);
  }

  const long = metaTagVariants({
    pageType: "product",
    keyword: "hand-thrown stoneware pour-over coffee dripper with matching carafe",
    brand: "The Extremely Long Brand Name Ceramics Company",
  });
  assert.equal(long.some((variant) => !variant.titleWithinLimit), true);
});

test("metaTagVariants includes the differentiator in at least one description when given", () => {
  const variants = metaTagVariants({
    pageType: "homepage",
    keyword: "specialty coffee",
    brand: "Kiln",
    differentiator: "Free shipping over $40",
  });
  assert.equal(variants.some((variant) => variant.description.includes("Free shipping over $40")), true);
});

test("metaTagVariants returns an empty list when keyword or brand is blank", () => {
  assert.deepEqual(metaTagVariants({ pageType: "product", keyword: "  ", brand: "Kiln" }), []);
  assert.deepEqual(metaTagVariants({ pageType: "product", keyword: "mug", brand: "" }), []);
});
