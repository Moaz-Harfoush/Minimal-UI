"use client";

import { memo } from "react";
import { TrendingUp, TrendingDown } from "lucide-react";
import { StatCardProps } from "@/app/(dashboard)/_types/analyses.types";

const StatCard = ({
  title,
  value,
  percentage,
  isPositive = true,
  icon,
  bgGradient,
  textColor,
}: StatCardProps) => {
  return (
    <div
      className={`p-6 rounded-3xl shadow-xl flex flex-col justify-between h-44 relative overflow-hidden ${bgGradient}`}
    >
      <div className="flex items-center justify-between z-10">
        <img src={icon} alt="" className="w-10" />

        <div
          className={`flex items-center gap-1 font-bold text-xs ${textColor}`}
        >
          {isPositive ? (
            <TrendingUp className="w-3.5 h-3.5" />
          ) : (
            <TrendingDown className="w-3.5 h-3.5" />
          )}
          <span>{percentage}</span>
        </div>
      </div>

      <div className="z-10">
        <p className="text-xs font-semibold text-medium-gray mb-1">{title}</p>
        <h3 className={`text-2xl font-extrabold ${textColor}`}>{value}</h3>
      </div>
    </div>
  );
};

export default memo(StatCard);
