import { ReactNode } from "react";
import { Facebook, Chrome, Linkedin, Twitter } from "lucide-react";

import { TrafficSiteItem } from "@/app/(dashboard)/_types/dashboard.types";
import { trafficSitesData } from "@/app/(dashboard)/_components/dashboardData";

interface TrafficBySiteProps {
  sites?: TrafficSiteItem[];
}

const ICON_MAP: Record<TrafficSiteItem["iconName"], ReactNode> = {
  facebook: <Facebook className="w-7 h-7 text-bright-blue" />,
  google: <Chrome className="w-7 h-7 text-danger" />,
  linkedin: <Linkedin className="w-7 h-7 text-bright-blue" />,
  twitter: <Twitter className="w-7 h-7 text-dark-gray" />,
};

const TrafficBySite = ({ sites = trafficSitesData }: TrafficBySiteProps) => {
  return (
    <div className="bg-pure-white w-full h-full p-6 rounded-2xl shadow-xl flex flex-col justify-between">
      <h2 className="text-xl font-bold text-dark-gray mb-6">Traffic by site</h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 flex-1">
        {sites.map((site) => (
          <div
            key={site.id}
            className="flex flex-col items-center justify-center p-4 w-full h-full border border-border-gray rounded-xl hover:bg-soft-gray/50 transition-colors min-h-25"
          >
            <div className="mb-2">{ICON_MAP[site.iconName]}</div>
            <span className="text-xl font-bold text-dark-gray">
              {site.value}
            </span>
            <span className="text-sm text-medium-gray mt-1">{site.name}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TrafficBySite;
