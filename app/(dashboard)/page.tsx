import { Metadata } from "next";
import TrafficBySite from "@/app/(dashboard)/_components/TrafficBySite";
import TaskList from "@/app/(dashboard)/_components/TaskList";
import News from "@/app/(dashboard)/_components/News";
import OrderTimeline from "@/app/(dashboard)/_components/OrderTimeline";
import AnalysesSection from "@/app/(dashboard)/_components/AnalysesSection";

export const metadata: Metadata = {
  title: "Dashboard - Minimal-UI",
  description:
    "Explore our wide collection of premium products, modern footwear, and exclusive deals. Shop the latest styles and enjoy high-quality choices today.",
};

const DashboardPage = () => {
  return (
    <div className="flex flex-col gap-10">
      <h2 className="font-bold text-2xl text-very-dark-gray">
        Hi, Welcome back 👋
      </h2>

      <AnalysesSection />

      <div className="flex flex-col lg:flex-row gap-6 w-full items-stretch">
        <div className="lg:w-[65%] w-full">
          <News />
        </div>
        <div className="lg:w-[35%] w-full">
          <OrderTimeline />
        </div>
      </div>

      <div className="flex flex-col md:flex-row gap-6 w-full items-stretch">
        <div className="flex-1 w-full">
          <TrafficBySite />
        </div>
        <div className="flex-1 w-full">
          <TaskList />
        </div>
      </div>
    </div>
  );
};

export default DashboardPage;
