import dynamic from "next/dynamic";
import MenuButton from "@/app/components/common/header/MenuButton";

const Search = dynamic(() => import("@/app/components/common/header/Search"));
const LanguageDropdown = dynamic(
  () => import("@/app/components/common/header/LanguageDropdown"),
);
const NotificationsDropdown = dynamic(
  () => import("@/app/components/common/header/NotificationsDropdown"),
);
const ProfileDropdown = dynamic(
  () => import("@/app/components/common/header/ProfileDropdown"),
);

export default function Header() {
  return (
    <header className="fixed top-0 z-40 flex p-6 w-full items-center justify-between border-b-2 border-border-gray bg-pure-white/80 backdrop-blur-md">
      <MenuButton />

      <div className="flex items-center justify-end gap-3 flex-1">
        <Search />
        <LanguageDropdown />
        <NotificationsDropdown />
        <ProfileDropdown />
      </div>
    </header>
  );
}
