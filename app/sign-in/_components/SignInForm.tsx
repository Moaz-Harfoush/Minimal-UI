"use client";

import { memo } from "react";
import Button from "@/app/components/ui/Button";
import FloatingInput from "@/app/components/ui/FloatingInput";

const SignInForm = () => {
  return (
    <div className="w-full flex flex-col gap-5">
      <FloatingInput
        id="email"
        type="email"
        label="Email address"
        defaultValue="hello@gmail.com"
      />

      <div className="flex flex-col gap-2">
        <div className="text-right">
          <p className="text-xs font-medium text-medium-gray hover:underline cursor-pointer">
            Forgot password?
          </p>
        </div>
        <FloatingInput
          id="password"
          type="password"
          label="Password"
          defaultValue="12345678"
        />
      </div>

      <div className="*:w-full">
        <Button variant="primary" href="/">
          Sign in
        </Button>
      </div>
    </div>
  );
};

export default memo(SignInForm);
