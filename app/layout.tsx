import "./globals.css";
import { Public_Sans } from "next/font/google";

const publicSans = Public_Sans({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800"],
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`h-full antialiased`}>
      <body
        className={`${publicSans.className} bg-soft-gray min-h-full flex flex-col  gap-1.5`}
      >
        {children}
      </body>
    </html>
  );
}
