"use client";

import { useState } from "react";
import { ltvCac } from "@/lib/calculators";
import { money, num, NumberField, ResultRow, ToolCard } from "@/components/tools/fields";

const defaults = { aov: "60", margin: "55", frequency: "3", lifespan: "2", cac: "35" };

export default function LtvCacCalculator() {
  const [aov, setAov] = useState(defaults.aov);
  const [margin, setMargin] = useState(defaults.margin);
  const [frequency, setFrequency] = useState(defaults.frequency);
  const [lifespan, setLifespan] = useState(defaults.lifespan);
  const [cac, setCac] = useState(defaults.cac);

  const reset = () => {
    setAov(defaults.aov);
    setMargin(defaults.margin);
    setFrequency(defaults.frequency);
    setLifespan(defaults.lifespan);
    setCac(defaults.cac);
  };

  const inputs = {
    averageOrderValue: num(aov),
    grossMarginPct: num(margin),
    purchasesPerYear: num(frequency),
    lifespanYears: num(lifespan),
    cac: num(cac),
  };
  const ready = Object.values(inputs).every(Number.isFinite);
  const result = ready ? ltvCac(inputs) : null;

  return (
    <ToolCard
      inputs={
        <>
          <NumberField label="Average order value" prefix="$" value={aov} onChange={setAov} hint="Revenue divided by orders, for a recent period." />
          <NumberField label="Gross margin" suffix="%" value={margin} onChange={setMargin} hint="Revenue left after cost of goods, as a percentage." />
          <NumberField label="Purchases per year" value={frequency} onChange={setFrequency} hint="How many orders a typical customer places in a year." />
          <NumberField label="Customer lifespan" suffix="yrs" value={lifespan} onChange={setLifespan} hint="How many years a customer keeps buying. Be conservative." />
          <NumberField label="Customer acquisition cost" prefix="$" value={cac} onChange={setCac} hint="Acquisition spend divided by new customers, same period." />
        </>
      }
      results={
        <>
          <ResultRow label="Lifetime value (margin)" value={result ? money(result.ltv) : "-"} />
          <ResultRow
            label="LTV : CAC ratio"
            value={result ? (result.ratio === null ? "n/a" : `${result.ratio.toLocaleString("en-US", { maximumFractionDigits: 1 })} : 1`) : "-"}
            primary
            detail={
              result
                ? result.ratio === null
                  ? "Enter a CAC above zero to compute the ratio."
                  : result.ratio < 1
                    ? "Each customer is worth less than they cost to acquire. Fix margin or offer before scaling spend."
                    : "A common rule of thumb treats around 3:1 as healthy, but read it against your own payback needs."
                : undefined
            }
          />
        </>
      }
      note="Example numbers. Replace them with your store's real history. Runs entirely in your browser; nothing is stored or sent anywhere."
      onReset={reset}
    />
  );
}
