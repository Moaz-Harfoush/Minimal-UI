"use client";

import { memo } from "react";
import {
  Radar,
  RadarChart,
  PolarGrid,
  PolarAngleAxis,
  ResponsiveContainer,
  Legend,
} from "recharts";
import { subjectsData } from "@/app/(dashboard)/_components/analyses/analysesData";

const CurrentSubjectCard = () => {
  return (
    <div className="p-6 bg-pure-white rounded-2xl shadow-xl w-full border border-border-gray">
      <h3 className="text-lg font-bold text-dark-gray">Current subject</h3>

      <div className="h-90 w-full">
        <ResponsiveContainer width="100%" height="100%">
          <RadarChart
            outerRadius="65%"
            margin={{ top: 10, right: 30, bottom: 10, left: 30 }}
            data={subjectsData}
          >
            <PolarGrid stroke="var(--color-border-gray)" />
            <PolarAngleAxis
              dataKey="subject"
              tick={{ fill: "var(--color-medium-gray)", fontSize: 12 }}
            />

            <Radar
              name="Series 1"
              dataKey="Series1"
              stroke="var(--color-bright-blue)"
              fill="var(--color-bright-blue)"
              fillOpacity={0.65}
            />
            <Radar
              name="Series 2"
              dataKey="Series2"
              stroke="var(--color-bright-cyan)"
              fill="var(--color-bright-cyan)"
              fillOpacity={0.65}
            />
            <Radar
              name="Series 3"
              dataKey="Series3"
              stroke="var(--color-medium-gray)"
              fill="var(--color-medium-gray)"
              fillOpacity={0.65}
            />

            <Legend
              iconType="circle"
              iconSize={8}
              wrapperStyle={{
                paddingTop: "45px",
                fontSize: "12px",
                color: "var(--color-very-dark-gray)",
              }}
            />
          </RadarChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
};

export default memo(CurrentSubjectCard);
