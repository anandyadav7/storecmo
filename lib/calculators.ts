/**
 * Pure calculation logic behind the free tools at /tools. Every function is
 * deterministic, runs entirely in the browser, and returns null (or a null
 * field) instead of NaN/Infinity when an input makes the metric undefined.
 */

export type ProfitMarginInput = { price: number; cogs: number; fees: number; shipping: number; adSpend: number };

export function profitMargin(input: ProfitMarginInput) {
  const totalCost = input.cogs + input.fees + input.shipping + input.adSpend;
  const profit = input.price - totalCost;
  const marginPct = input.price > 0 ? (profit / input.price) * 100 : 0;
  return { totalCost, profit, marginPct };
}

export type BreakEvenRoasInput = { price: number; cogs: number; fees: number; shipping: number };

export function breakEvenRoas(input: BreakEvenRoasInput) {
  const contribution = input.price - input.cogs - input.fees - input.shipping;
  const contributionMarginPct = input.price > 0 ? (contribution / input.price) * 100 : 0;
  const roas = contribution > 0 ? input.price / contribution : null;
  return { contribution, contributionMarginPct, roas };
}

export type LtvCacInput = { averageOrderValue: number; grossMarginPct: number; purchasesPerYear: number; lifespanYears: number; cac: number };

export function ltvCac(input: LtvCacInput) {
  const ltv = input.averageOrderValue * (input.grossMarginPct / 100) * input.purchasesPerYear * input.lifespanYears;
  const ratio = input.cac > 0 ? ltv / input.cac : null;
  return { ltv, ratio };
}

export function averageOrderValue(input: { revenue: number; orders: number }) {
  return input.orders > 0 ? input.revenue / input.orders : null;
}

export type FreeShippingThresholdInput = { averageOrderValue: number; shippingCost: number; grossMarginPct: number };

export function freeShippingThreshold(input: FreeShippingThresholdInput) {
  if (input.grossMarginPct <= 0) return null;
  const extraRevenueNeeded = input.shippingCost / (input.grossMarginPct / 100);
  const suggestedThreshold = input.averageOrderValue + extraRevenueNeeded;
  const roundedThreshold = Math.ceil(suggestedThreshold / 5) * 5;
  return { extraRevenueNeeded, suggestedThreshold, roundedThreshold };
}

export const TITLE_LIMIT = 60;
export const DESCRIPTION_LIMIT = 160;

export type MetaTagInput = {
  pageType: "product" | "collection" | "homepage" | "article";
  keyword: string;
  brand: string;
  differentiator?: string;
};

export type MetaVariant = {
  title: string;
  description: string;
  titleLength: number;
  descriptionLength: number;
  titleWithinLimit: boolean;
  descriptionWithinLimit: boolean;
};

function titleCase(text: string) {
  return text.replace(/(^|\s)\S/g, (match) => match.toUpperCase());
}

export function metaTagVariants(input: MetaTagInput): MetaVariant[] {
  const keyword = input.keyword.trim();
  const brand = input.brand.trim();
  const differentiator = input.differentiator?.trim() || "";
  if (!keyword || !brand) return [];

  const heading = titleCase(keyword);
  const tail = differentiator ? ` ${differentiator}.` : "";

  const templates: Record<MetaTagInput["pageType"], Array<{ title: string; description: string }>> = {
    product: [
      { title: `${heading} | ${brand}`, description: `Shop the ${keyword} from ${brand}. See details, materials, and sizing, and order yours today.${tail}` },
      { title: `Buy ${heading} Online | ${brand}`, description: `The ${keyword}, made by ${brand}. Everything you need to know before you buy, in one place.${tail}` },
      { title: `${heading} — ${brand}`, description: `Looking for the right ${keyword}? ${brand} has it, with clear photos, honest specs, and easy checkout.${tail}` },
    ],
    collection: [
      { title: `${heading} | ${brand}`, description: `Browse ${keyword} at ${brand}. Compare styles and prices, and find the one that fits.${tail}` },
      { title: `Shop ${heading} | ${brand}`, description: `${brand}'s full range of ${keyword}, in one collection. New pieces added regularly.${tail}` },
      { title: `${heading} — Shop the Collection | ${brand}`, description: `Every ${keyword} option ${brand} carries, side by side, so you can choose quickly.${tail}` },
    ],
    homepage: [
      { title: `${brand} | ${heading}`, description: `${brand} is your home for ${keyword}. See what we make and why customers come back.${tail}` },
      { title: `${brand} — ${heading}`, description: `Discover ${keyword} at ${brand}. Browse the range and find your next favourite.${tail}` },
      { title: `${heading} by ${brand}`, description: `From first click to delivery, ${brand} makes shopping for ${keyword} simple.${tail}` },
    ],
    article: [
      { title: `${heading} | ${brand}`, description: `A practical guide to ${keyword} from the team at ${brand}. What to know, in plain language.${tail}` },
      { title: `${heading}: A Guide | ${brand}`, description: `${brand} explains ${keyword}: what matters, what doesn't, and how to decide.${tail}` },
      { title: `${heading} — What to Know | ${brand}`, description: `Everything worth knowing about ${keyword}, written to answer the question you searched for.${tail}` },
    ],
  };

  return templates[input.pageType].map(({ title, description }) => ({
    title,
    description,
    titleLength: title.length,
    descriptionLength: description.length,
    titleWithinLimit: title.length <= TITLE_LIMIT,
    descriptionWithinLimit: description.length <= DESCRIPTION_LIMIT,
  }));
}
