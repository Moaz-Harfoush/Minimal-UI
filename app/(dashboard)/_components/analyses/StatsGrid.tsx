"use client";

import { memo } from "react";
import StatCard from "./StatCard";
import { statsCardsData } from "@/app/(dashboard)/_components/analyses/analysesData";

const StatsGrid = () => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
      {statsCardsData.map((card) => (
        <StatCard key={card.title} {...card} />
      ))}
    </div>
  );
};

export default memo(StatsGrid);
