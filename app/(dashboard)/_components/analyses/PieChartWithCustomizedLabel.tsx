"use client";

import { memo, useCallback } from "react";
import {
  Pie,
  PieChart,
  PieLabelRenderProps,
  Tooltip,
  Cell,
  Legend,
  ResponsiveContainer,
} from "recharts";
import CustomPieTooltip from "@/app/(dashboard)/_components/analyses/tooltips/CustomPieTooltip";
import { regionVisitsData } from "@/app/(dashboard)/_components/analyses/analysesData";

const RADIAN = Math.PI / 180;

interface CurrentVisitsCardProps {
  isAnimationActive?: boolean;
}

const CurrentVisitsCard = ({
  isAnimationActive = true,
}: CurrentVisitsCardProps) => {
  const renderCustomizedLabel = useCallback(
    ({
      cx,
      cy,
      midAngle,
      innerRadius,
      outerRadius,
      percent,
    }: PieLabelRenderProps) => {
      if (
        cx == null ||
        cy == null ||
        innerRadius == null ||
        outerRadius == null
      ) {
        return null;
      }
      const radius =
        Number(innerRadius) + (Number(outerRadius) - Number(innerRadius)) * 0.8;
      const ncx = Number(cx);
      const x = ncx + radius * Math.cos(-(midAngle ?? 0) * RADIAN);
      const ncy = Number(cy);
      const y = ncy + radius * Math.sin(-(midAngle ?? 0) * RADIAN);

      return (
        <text
          x={x}
          y={y}
          fill="var(--color-pure-white)"
          textAnchor="middle"
          dominantBaseline="central"
          className="text-xs font-semibold select-none"
        >
          {`${((percent ?? 1) * 100).toFixed(1)}%`}
        </text>
      );
    },
    [],
  );

  return (
    <div className="bg-pure-white p-6 rounded-2xl shadow-xl border border-border-gray">
      <h3 className="text-lg font-bold text-dark-gray mb-2">Current visits</h3>

      <div className="w-full h-80">
        <ResponsiveContainer width="100%" height="100%">
          <PieChart>
            <Tooltip content={<CustomPieTooltip />} />

            <Pie
              startAngle={90}
              endAngle={-270}
              data={regionVisitsData}
              labelLine={false}
              label={renderCustomizedLabel}
              dataKey="value"
              isAnimationActive={isAnimationActive}
            >
              {regionVisitsData.map((entry, index) => (
                <Cell key={`cell-${index}`} fill={entry.color} />
              ))}
            </Pie>

            <Legend
              verticalAlign="bottom"
              align="center"
              iconType="circle"
              iconSize={10}
              wrapperStyle={{
                paddingTop: "20px",
                fontSize: "12px",
                fontWeight: "600",
                color: "var(--color-very-dark-gray)",
              }}
            />
          </PieChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
};

export default memo(CurrentVisitsCard);
