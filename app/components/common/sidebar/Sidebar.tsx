import dynamic from "next/dynamic";
import Image from "next/image";
import SidebarWrapper from "@/app/components/common/sidebar/SidebarWrapper";
import Logo from "@/app/components/ui/Logo";
import Button from "@/app/components/ui/Button";

const SidebarTeamSwitcher = dynamic(
  () => import("@/app/components/common/sidebar/SidebarTeamSwitcher"),
);
const SidebarNav = dynamic(
  () => import("@/app/components/common/sidebar/SidebarNav"),
);

export default function Sidebar() {
  return (
    <SidebarWrapper>
      <div className="flex flex-col gap-6 overflow-hidden flex-1">
        <div className="p-2 shrink-0">
          <Logo />
        </div>

        <SidebarTeamSwitcher />

        <SidebarNav />
      </div>

      <div className="mt-auto pt-6 flex flex-col items-center text-center shrink-0">
        <h5 className="text-xl font-bold bg-linear-to-r from-[#9030FF] to-[#FFA000] bg-clip-text text-transparent mb-0.5">
          More features?
        </h5>
        <p className="text-xs text-medium-gray mb-3">
          From only <span className="font-bold text-dark-gray">$69</span>
        </p>

        <div className="w-full max-w-40 aspect-4/3 mb-3 flex items-center justify-center relative">
          <Image
            src="/assets/illustrations/illustration-dashboard.webp"
            alt="Dashboard upgrade features illustration"
            width={160}
            height={120}
            className="object-contain"
          />
        </div>
        <Button variant="primary">Upgrade to Pro</Button>
      </div>
    </SidebarWrapper>
  );
}
