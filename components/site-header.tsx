import { LogoMark } from "@/components/landing/logo-mark";
import { buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import Link from "next/link";

const navClass =
  "rounded-md px-3 py-2 text-sm font-medium text-muted-foreground transition-colors hover:bg-muted hover:text-foreground";

export function SiteHeader() {
  return (
    <header className="sticky top-0 z-50 border-b border-border bg-background/90 backdrop-blur-md">
      <div className="mx-auto flex max-w-6xl flex-wrap items-center justify-between gap-4 px-4 py-3">
        <Link
          href="/"
          className="flex items-center gap-2.5 font-semibold tracking-tight text-foreground"
        >
          <LogoMark className="size-8 text-[11px]" />
          StayMate
        </Link>

        <nav className="flex flex-1 flex-wrap items-center justify-center gap-1 md:gap-2 lg:flex-none">
          <Link href="/#features" className={navClass}>
            Features
          </Link>
          <Link href="/#how-it-works" className={navClass}>
            How it works
          </Link>
          <Link
            href="/#testimonials"
            className={cn(navClass, "hidden sm:inline")}
          >
            Stories
          </Link>
        </nav>

        <div className="flex flex-wrap items-center justify-end gap-2">
          <Link href="/login" className={cn(navClass, "px-3")}>
            Log in
          </Link>
          <Link
            href="/login"
            className={cn(buttonVariants({ size: "sm" }), "rounded-full px-5")}
          >
            Get started
          </Link>
        </div>
      </div>
    </header>
  );
}
