import { Metadata } from "next";
import { Chrome, Github, X } from "lucide-react";
import SignInForm from "@/app/sign-in/_components/SignInForm";
import Logo from "@/app/components/ui/Logo";

export const metadata: Metadata = {
  title: "Sign in - Minimal-UI",
  description:
    "Access your account to manage your dashboard, explore new insights, and stay connected. Sign in securely to get started.",
};

export default function SignInPage() {
  return (
    <div className="min-h-screen w-full flex items-center justify-center p-4 relative overflow-hidden bg-soft-gray text-dark-gray">
      <div className="absolute top-6 left-6 flex items-center gap-2">
        <Logo />
      </div>

      <div className="absolute top-8 right-8">
        <p className="text-sm font-semibold hover:underline text-dark-gray">
          Need help?
        </p>
      </div>

      <div className="w-full max-w-120 bg-pure-white/95 backdrop-blur-md p-6 sm:p-10 rounded-3xl shadow-[0_24px_48px_-12px_rgba(0,0,0,0.08)] border border-border-gray z-10 flex flex-col items-center">
        <h1 className="text-2xl sm:text-3xl font-bold tracking-tight mb-2">
          Sign in
        </h1>
        <p className="text-xs sm:text-sm text-medium-gray mb-8 text-center">
          Don’t have an account?{" "}
          <span className="text-bright-blue font-semibold hover:underline cursor-pointer">
            Get started
          </span>
        </p>

        <SignInForm />

        <div className="w-full flex items-center my-6">
          <div className="flex-1 h-px bg-border-gray" />
          <span className="px-3 text-xs text-medium-gray font-bold uppercase tracking-wider">
            OR
          </span>
          <div className="flex-1 h-px bg-border-gray" />
        </div>

        <div className="flex justify-center gap-4 sm:gap-6 w-full">
          <div className="p-2.5 rounded-full hover:bg-border-gray cursor-pointer transition-colors border border-transparent hover:border-border-gray text-google-red">
            <Chrome className="w-5 h-5" />
          </div>

          <div className="p-2.5 rounded-full hover:bg-border-gray cursor-pointer transition-colors border border-transparent hover:border-border-gray text-github-black">
            <Github className="w-5 h-5" />
          </div>

          <div className="p-2.5 rounded-full hover:bg-border-gray cursor-pointer transition-colors border border-transparent hover:border-border-gray text-dark-gray">
            <X className="w-5 h-5" />
          </div>
        </div>
      </div>
    </div>
  );
}
