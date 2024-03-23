"use client";

import * as React from "react";
import { useSearchParams } from "next/navigation";
import { signIn } from "next-auth/react";

import { cn } from "@/lib/utils";
import { buttonVariants } from "@/components/ui/button";
import { Icons } from "@/components/icons";

export function UserAuthButton() {
  const [isGoogleLoading, setIsGoogleLoading] = React.useState<boolean>(false);
  const searchParams = useSearchParams();

  return (
    <div className="grid gap-6">
      <button
        type="button"
        className={cn(buttonVariants({ variant: "outline" }))}
        onClick={async () => {
          setIsGoogleLoading(true);
          await signIn("google", { callbackUrl: "/dashboard" });
        }}
        disabled={isGoogleLoading}
      >
        {isGoogleLoading ? (
          <Icons.spinner className="mr-2 h-5 w-5 animate-spin" />
        ) : (
          <Icons.google className="mr-2 h-5 w-5" />
        )}{" "}
        Google
      </button>
    </div>
  );
}
