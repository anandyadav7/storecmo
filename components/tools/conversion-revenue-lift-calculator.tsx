"use client";

import { useState } from "react";
import { conversionRevenueLift } from "@/lib/calculators";
import { money, num, NumberField, percent, ResultRow, ToolCard } from "@/components/tools/fields";

const defaults = { sessions: "50000", currentRate: "2", currentAov: "60", targetRate: "2.5", targetAov: "66" };

function orders(value: number) {
  return value.toLocaleString("en-US", { maximumFractionDigits: 1 });
}

export default function ConversionRevenueLiftCalculator() {
  const [sessions, setSessions] = useState(defaults.sessions);
  const [currentRate, setCurrentRate] = useState(defaults.currentRate);
  const [currentAov, setCurrentAov] = useState(defaults.currentAov);
  const [targetRate, setTargetRate] = useState(defaults.targetRate);
  const [targetAov, setTargetAov] = useState(defaults.targetAov);

  const reset = () => {
    setSessions(defaults.sessions);
    setCurrentRate(defaults.currentRate);
    setCurrentAov(defaults.currentAov);
    setTargetRate(defaults.targetRate);
    setTargetAov(defaults.targetAov);
  };

  const inputs = {
    sessions: num(sessions),
    currentConversionRatePct: num(currentRate),
    currentAverageOrderValue: num(currentAov),
    targetConversionRatePct: num(targetRate),
    targetAverageOrderValue: num(targetAov),
  };
  const ready = Object.values(inputs).every(Number.isFinite);
  const result = ready ? conversionRevenueLift(inputs) : null;

  return (
    <ToolCard
      inputs={
        <>
          <NumberField label="Monthly sessions" value={sessions} onChange={setSessions} hint="Store visits for one representative month." />
          <NumberField label="Current conversion rate" suffix="%" value={currentRate} onChange={setCurrentRate} hint="Orders divided by sessions, multiplied by 100." />
          <NumberField label="Current average order value" prefix="$" value={currentAov} onChange={setCurrentAov} hint="Revenue divided by orders for the same month." />
          <NumberField label="Target conversion rate" suffix="%" value={targetRate} onChange={setTargetRate} hint="The rate you want to model. Use a change you could realistically test." />
          <NumberField label="Target average order value" prefix="$" value={targetAov} onChange={setTargetAov} hint="Leave this equal to current AOV to isolate conversion-rate lift." />
        </>
      }
      results={
        ready && result === null ? (
          <ResultRow label="Projected revenue lift" value="n/a" primary detail="Sessions and order values cannot be negative, and conversion rates must be between 0% and 100%." />
        ) : (
          <>
            <ResultRow label="Current monthly revenue" value={result ? money(result.currentRevenue) : "-"} />
            <ResultRow label="Projected monthly revenue" value={result ? money(result.projectedRevenue) : "-"} />
            <ResultRow
              label="Projected revenue lift"
              value={result ? money(result.revenueLift) : "-"}
              primary
              detail={result ? `${result.revenueLiftPct === null ? "No percentage comparison is available from zero current revenue." : `${percent(result.revenueLiftPct)} versus the current scenario.`} This is a model, not a forecast.` : undefined}
            />
            <ResultRow label="Additional monthly orders" value={result ? orders(result.additionalOrders) : "-"} detail={result ? `${orders(result.currentOrders)} current orders → ${orders(result.projectedOrders)} projected orders.` : undefined} />
          </>
        )
      }
      note="Example numbers. Replace them with one consistent month. Change one target at a time to see which lever creates the lift. Runs entirely in your browser."
      onReset={reset}
    />
  );
}
