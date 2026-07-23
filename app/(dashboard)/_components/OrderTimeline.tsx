import { timelineData } from "@/app/(dashboard)/_components/dashboardData";

const OrderTimeline = () => {
  return (
    <div className="bg-pure-white w-full h-full p-6 rounded-2xl shadow-xl flex flex-col justify-between">
      <h2 className="text-xl font-bold text-dark-gray mb-6">Order timeline</h2>

      <div className="relative flex-1 flex flex-col justify-between">
        {timelineData.map((item, index) => {
          const isLast = index === timelineData.length - 1;

          return (
            <div
              key={item.id}
              className="relative flex items-start gap-4 pb-2 last:pb-0"
            >
              {!isLast && (
                <span className="absolute left-1.25 top-3 bottom-0 w-0.5 bg-border-gray" />
              )}

              <span
                className={`relative z-10 w-3 h-3 rounded-full mt-1 shrink-0 ${item.colorClass}`}
              />

              <div className="flex flex-col">
                <span className="text-sm font-semibold text-dark-gray">
                  {item.title}
                </span>
                <span className="text-xs text-medium-gray mt-0.5">
                  {item.date}
                </span>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default OrderTimeline;
