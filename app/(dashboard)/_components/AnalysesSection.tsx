"use client";

import dynamic from "next/dynamic";
import StatsGrid from "./analyses/StatsGrid";

const PieChartWithCustomizedLabel = dynamic(
  () => import("./analyses/PieChartWithCustomizedLabel"),
  { ssr: false },
);

const WebsiteVisitsCard = dynamic(
  () => import("./analyses/WebsiteVisitsCard"),
  { ssr: false },
);

const ConversionRates = dynamic(() => import("./analyses/ConversionRates"), {
  ssr: false,
});

const SimpleRadarChart = dynamic(() => import("./analyses/CurrentSubject"), {
  ssr: false,
});

export default function AnalysesSection() {
  return (
    <>
      <StatsGrid />

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <PieChartWithCustomizedLabel />
        <WebsiteVisitsCard />
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <ConversionRates />
        <SimpleRadarChart />
      </div>
    </>
  );
}
