import Link from "next/link";

import { cn } from "@/lib/utils";
import { buttonVariants } from "@/components/ui/button";

export default async function IndexPage() {
  return (
    <>
      <section className="space-y-6 pb-8 pt-6 md:pb-12 md:pt-10 lg:py-32">
        <div className="container flex max-w-[64rem] flex-col items-center gap-4 text-center">
          <h1 className="font-heading text-3xl sm:text-5xl md:text-7xl lg:text-7xl">
            SAS Fat to Slim
          </h1>
          <p className="max-w-[42rem] leading-normal text-muted-foreground sm:text-xl sm:leading-8">
            Fat To Slim believes the meaning of DIET Is eating meals that are
          </p>
          <div className="space-x-4">
            <Link
              href="/register"
              className={cn(buttonVariants({ size: "lg" }))}
            >
              Get Started
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
