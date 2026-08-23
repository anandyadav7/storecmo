import type { ComponentType } from "react";
import AovCalculator from "@/components/tools/aov-calculator";
import BreakEvenRoasCalculator from "@/components/tools/break-even-roas-calculator";
import ConversionRevenueLiftCalculator from "@/components/tools/conversion-revenue-lift-calculator";
import FreeShippingCalculator from "@/components/tools/free-shipping-calculator";
import LtvCacCalculator from "@/components/tools/ltv-cac-calculator";
import MetaTagGenerator from "@/components/tools/meta-tag-generator";
import ProfitMarginCalculator from "@/components/tools/profit-margin-calculator";

const widgets: Record<string, ComponentType> = {
  "ecommerce-profit-margin-calculator": ProfitMarginCalculator,
  "break-even-roas-calculator": BreakEvenRoasCalculator,
  "cac-ltv-ratio-calculator": LtvCacCalculator,
  "average-order-value-calculator": AovCalculator,
  "ecommerce-conversion-rate-calculator": ConversionRevenueLiftCalculator,
  "free-shipping-threshold-calculator": FreeShippingCalculator,
  "meta-title-description-generator": MetaTagGenerator,
};

export default function ToolWidget({ slug }: { slug: string }) {
  const Widget = widgets[slug];
  return Widget ? <Widget /> : null;
}
