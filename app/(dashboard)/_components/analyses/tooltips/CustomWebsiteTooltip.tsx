import { memo } from "react";
import { RechartsCustomTooltipProps } from "@/app/(dashboard)/_types/analyses.types";

const CustomWebsiteTooltip = ({
  active,
  payload,
  label,
}: RechartsCustomTooltipProps) => {
  if (active && payload && payload.length) {
    return (
      <div className="bg-pure-white/95 backdrop-blur-sm p-3 rounded-xl shadow-xl min-w-325">
        <p className="text-center font-bold text-dark-gray text-xs mb-2">
          {label}
        </p>

        <div className="space-y-1.5 text-xs">
          {payload.map((entry, index) => (
            <div
              key={`tooltip-item-${index}`}
              className="flex items-center justify-between gap-3"
            >
              <div className="flex items-center gap-1.5">
                <span
                  className="w-2.5 h-2.5 rounded-full inline-block"
                  style={{ backgroundColor: entry.color }}
                />
                <span className="text-medium-gray font-medium">
                  {entry.name}:
                </span>
              </div>
              <span className="font-bold text-dark-gray">
                {entry.value} visits
              </span>
            </div>
          ))}
        </div>
      </div>
    );
  }

  return null;
};

export default memo(CustomWebsiteTooltip);
