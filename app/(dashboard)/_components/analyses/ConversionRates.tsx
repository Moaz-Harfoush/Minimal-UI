"use client";

import { memo } from "react";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  ResponsiveContainer,
  Tooltip,
  CartesianGrid,
} from "recharts";
import CustomTooltip from "@/app/(dashboard)/_components/analyses/tooltips/CustomTooltip";
import { conversionData } from "@/app/(dashboard)/_components/analyses/analysesData";

const ConversionRatesCard = () => {
  return (
    <div className="p-6 bg-pure-white rounded-2xl shadow-xl w-full border border-border-gray">
      <h3 className="text-lg font-bold text-dark-gray">Conversion rates</h3>
      <p className="text-sm text-medium-gray mb-6">(+43%) than last year</p>

      <div className="h-72 w-full">
        <ResponsiveContainer width="100%" height="100%">
          <BarChart
            data={conversionData}
            layout="vertical"
            margin={{ left: 0 }}
          >
            <CartesianGrid
              strokeDasharray="3 3"
              horizontal={false}
              stroke="var(--color-soft-gray)"
            />
            <XAxis
              type="number"
              axisLine={false}
              tickLine={false}
              tick={{ fill: "var(--color-medium-gray)", fontSize: 12 }}
            />
            <YAxis
              dataKey="country"
              type="category"
              axisLine={false}
              tickLine={false}
              tick={{ fill: "var(--color-very-dark-gray)", fontSize: 13 }}
            />
            <Tooltip
              content={<CustomTooltip />}
              cursor={{ fill: "rgba(0, 0, 0, 0.03)" }}
            />
            <Bar
              dataKey="2022"
              fill="var(--color-bright-blue)"
              radius={[0, 4, 4, 0]}
              barSize={8}
            />
            <Bar
              dataKey="2023"
              fill="var(--color-bright-cyan)"
              radius={[0, 4, 4, 0]}
              barSize={8}
            />
          </BarChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
};

export default memo(ConversionRatesCard);
