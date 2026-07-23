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
import CustomWebsiteTooltip from "@/app/(dashboard)/_components/analyses/tooltips/CustomWebsiteTooltip";
import { websiteVisitsData } from "@/app/(dashboard)/_components/analyses/analysesData";

const WebsiteVisitsCard = () => {
  return (
    <div className="p-6 bg-pure-white rounded-2xl shadow-xl w-full border border-border-gray">
      <div className="flex flex-wrap items-start justify-between gap-4 mb-6">
        <div>
          <h3 className="text-lg font-bold text-dark-gray">Website visits</h3>
          <p className="text-sm text-medium-gray mt-0.5">
            (+43%) than last year
          </p>
        </div>

        <div className="flex items-center gap-4 text-xs font-semibold text-very-dark-gray pt-1">
          <div className="flex items-center gap-1.5">
            <span className="w-2.5 h-2.5 rounded-full bg-bright-blue" />
            <span>Team A</span>
          </div>
          <div className="flex items-center gap-1.5">
            <span className="w-2.5 h-2.5 rounded-full bg-bright-cyan" />
            <span>Team B</span>
          </div>
        </div>
      </div>

      <div className="h-72 w-full">
        <ResponsiveContainer width="100%" height="100%">
          <BarChart
            data={websiteVisitsData}
            margin={{ top: 10, right: 10, left: -20, bottom: 0 }}
            barGap={6}
          >
            <CartesianGrid
              strokeDasharray="3 3"
              vertical={false}
              stroke="var(--color-soft-gray)"
            />

            <XAxis
              dataKey="month"
              axisLine={false}
              tickLine={false}
              tick={{ fill: "var(--color-medium-gray)", fontSize: 12 }}
              dy={10}
            />

            <YAxis
              axisLine={false}
              tickLine={false}
              tick={{ fill: "var(--color-medium-gray)", fontSize: 12 }}
              domain={[0, 80]}
              ticks={[0, 20, 40, 60, 80]}
            />

            <Tooltip
              cursor={{ fill: "rgba(0, 0, 0, 0.02)" }}
              content={<CustomWebsiteTooltip />}
            />

            <Bar
              name="Team A"
              dataKey="Team A"
              fill="var(--color-bright-blue)"
              radius={[4, 4, 0, 0]}
              barSize={10}
            />
            <Bar
              name="Team B"
              dataKey="Team B"
              fill="var(--color-bright-cyan)"
              radius={[4, 4, 0, 0]}
              barSize={10}
            />
          </BarChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
};

export default memo(WebsiteVisitsCard);
