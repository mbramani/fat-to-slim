import Link from "next/link";

// import { marketingConfig } from "@/config/marketing"
import { cn } from "@/lib/utils";
import { buttonVariants } from "@/components/ui/button";
import { ModeToggle } from "@/components/mode-toggle";
// import { MainNav } from "@/components/main-nav"
// import { SiteFooter } from "@/components/site-footer";

interface MarketingLayoutProps {
  children: React.ReactNode;
}

export default async function MarketingLayout({
  children,
}: MarketingLayoutProps) {
  return (
    <div className="flex min-h-screen flex-col">
      <header className="container z-40 bg-background">
        <div className="flex h-20 items-center justify-between py-6">
          <Link className="items-center space-x-2 font-bold md:flex" href="/">
            FatToSlim
          </Link>
          {/* <MainNav items={marketingConfig.mainNav} /> */}
          <nav>
            <ModeToggle />
            <Link
              href="/login"
              className={cn(
                buttonVariants({ variant: "secondary", size: "sm" }),
                "px-4",
              )}
            >
              Login
            </Link>
          </nav>
        </div>
      </header>
      <main className="flex-1">{children}</main>
      {/* <SiteFooter /> */}
    </div>
  );
}
