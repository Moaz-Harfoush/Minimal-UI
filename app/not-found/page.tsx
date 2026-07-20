import Image from "next/image";
import { Metadata } from "next";
import Logo from "@/app/components/ui/Logo";
import Button from "@/app/components/ui/Button";

export const metadata: Metadata = {
  title: "404 page not found! | Error - Minimal-UI",
  description:
    "Oops! The page you are looking for doesn't exist or has been moved. Go back to the homepage to find what you need.",
};

export default function NotFound() {
  return (
    <div className="flex flex-col p-6 relative font-sans bg-soft-gray">
      <header>
        <Logo />
      </header>

      <main className="w-full text-center mt-12 flex flex-col items-center justify-center grow">
        <h1 className="text-3xl md:text-4xl font-bold mb-4 current-color leading-tight">
          Sorry, page not found!
        </h1>

        <p className="text-base text-medium-gray leading-relaxed mb-10 px-4 max-w-120">
          Sorry, we couldn’t find the page you’re looking for. Perhaps you’ve
          mistyped the URL? Be sure to check your spelling.
        </p>

        <Image
          src="/assets/illustrations/illustration-404.svg"
          width={400}
          height={200}
          alt="Page not found illustration"
          priority
        />

        <div className="mt-10">
          <Button href="/" variant="primary">
            Go Home
          </Button>
        </div>
      </main>
    </div>
  );
}
