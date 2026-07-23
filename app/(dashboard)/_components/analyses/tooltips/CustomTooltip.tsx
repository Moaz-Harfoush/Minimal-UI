import { memo } from "react";
import { RechartsCustomTooltipProps } from "@/app/(dashboard)/_types/analyses.types";

const CustomTooltip = ({
  active,
  payload,
  label,
}: RechartsCustomTooltipProps) => {
  if (active && payload && payload.length) {
    return (
      <div className="bg-pure-white p-3 rounded-xl shadow-xl min-w-35 border border-border-gray">
        <p className="text-center font-bold text-dark-gray text-sm border-b border-soft-gray mb-1">
          {label}
        </p>

        <div className="space-y-1.5 text-xs">
          {payload.map((entry, index) => (
            <div key={`item-${index}`} className="flex items-center gap-1">
              <div className="flex items-center gap-1.5">
                <span
                  className="w-2.5 h-2.5 rounded-full inline-block"
                  style={{ backgroundColor: entry.color }}
                />
                <span className="text-medium-gray font-medium">
                  {entry.name}:
                </span>
              </div>
              <span className="font-semibold text-dark-gray">
                {entry.value}
              </span>
            </div>
          ))}
        </div>
      </div>
    );
  }

  return null;
};

export default memo(CustomTooltip);
