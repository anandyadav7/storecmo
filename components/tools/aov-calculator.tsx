"use client";

import { useState } from "react";
import { averageOrderValue } from "@/lib/calculators";
import { money, num, NumberField, ResultRow, ToolCard } from "@/components/tools/fields";

const defaults = { revenue: "12500", orders: "250" };

export default function AovCalculator() {
  const [revenue, setRevenue] = useState(defaults.revenue);
  const [orders, setOrders] = useState(defaults.orders);

  const reset = () => {
    setRevenue(defaults.revenue);
    setOrders(defaults.orders);
  };

  const inputs = { revenue: num(revenue), orders: num(orders) };
  const ready = Object.values(inputs).every(Number.isFinite);
  const result = ready ? averageOrderValue(inputs) : null;

  return (
    <ToolCard
      inputs={
        <>
          <NumberField label="Total revenue" prefix="$" value={revenue} onChange={setRevenue} hint="Product revenue for the period, after discounts and refunds." />
          <NumberField label="Number of orders" value={orders} onChange={setOrders} hint="Orders in the same period." />
        </>
      }
      results={
        <ResultRow
          label="Average order value"
          value={ready ? (result === null ? "n/a" : money(result)) : "—"}
          primary
          detail={ready && result === null ? "Order count has to be above zero." : "Use the same period for both numbers, and the same definition every time you measure."}
        />
      }
      note="Example numbers — replace them with a real month. Runs entirely in your browser; nothing is stored or sent anywhere."
      onReset={reset}
    />
  );
}
