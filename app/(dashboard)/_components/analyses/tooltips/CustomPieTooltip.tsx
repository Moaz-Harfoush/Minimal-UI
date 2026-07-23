import { memo } from "react";
import {
  RechartsCustomTooltipProps,
  VisitDataItem,
} from "@/app/(dashboard)/_types/analyses.types";

const CustomPieTooltip = ({ active, payload }: RechartsCustomTooltipProps) => {
  if (active && payload && payload.length) {
    const itemData = payload[0].payload as VisitDataItem;

    return (
      <div className="bg-pure-white px-3 py-2 rounded-lg shadow-md border border-border-gray flex items-center gap-2 text-xs">
        <span
          className="w-2.5 h-2.5 rounded-full shrink-0"
          style={{ backgroundColor: itemData.color }}
        />

        <span className="font-semibold text-medium-gray">
          {itemData.name}:{" "}
          <span className="font-bold text-dark-gray">
            {itemData.value.toLocaleString()}
          </span>
        </span>
      </div>
    );
  }

  return null;
};

export default memo(CustomPieTooltip);
