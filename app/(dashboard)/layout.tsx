import Header from "@/app/components/common/header/Header";
import Sidebar from "@/app/components/common/sidebar/Sidebar";
import SidebarOverlay from "@/app/components/common/sidebar/SidebarOverlay";
import { SidebarProvider } from "@/app/components/context/SidebarProvider";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
      <SidebarProvider>
        <Header />
        <Sidebar />
        <main className="max-w-7xl mt-21 lg:ml-80 px-6 py-12">{children}</main>
        <SidebarOverlay />
      </SidebarProvider>
    </>
  );
}
