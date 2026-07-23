import Image from "next/image";
import { newsData } from "@/app/(dashboard)/_components/dashboardData";
import { NewsItem } from "@/app/(dashboard)/_types/dashboard.types";

interface NewsProps {
  items?: NewsItem[];
}

const News = ({ items = newsData }: NewsProps) => {
  return (
    <div className="bg-pure-white w-full h-full p-6 rounded-2xl shadow-xl flex flex-col justify-between">
      <h2 className="text-xl font-bold text-dark-gray mb-6">News</h2>

      <div className="divide-y divide-border-gray/50 flex-1 flex flex-col justify-between">
        {items.map((item) => (
          <div
            key={item.id}
            className="flex items-center justify-between gap-4 py-3 first:pt-0 last:pb-0"
          >
            <div className="flex items-center gap-4 min-w-0">
              <div className="relative w-12 h-12 rounded-xl overflow-hidden shrink-0 bg-soft-gray">
                <Image
                  src={item.image}
                  alt={item.title}
                  fill
                  sizes="48px"
                  className="object-cover"
                />
              </div>
              <div className="min-w-0 flex-1">
                <h4 className="text-sm font-semibold text-dark-gray truncate hover:underline cursor-pointer">
                  {item.title}
                </h4>
                <p className="text-xs text-medium-gray truncate mt-0.5">
                  {item.description}
                </p>
              </div>
            </div>

            <span className="text-xs text-medium-gray/70 shrink-0">
              {item.time}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default News;
