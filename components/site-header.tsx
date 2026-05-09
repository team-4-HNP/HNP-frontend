import { cn } from "@/lib/utils";
import Link from "next/link";

const links = [
  { href: "/", label: "Home" },
  { href: "/login", label: "Login" },
  { href: "/chat", label: "Chat" },
  { href: "/matchmaking", label: "Matchmaking" },
  { href: "/profile", label: "Profile" },
] as const;

export function SiteHeader() {
  return (
    <header className="sticky top-0 z-50 border-b border-border bg-background/80 backdrop-blur-md">
      <div className="mx-auto flex max-w-5xl flex-wrap items-center justify-between gap-3 px-4 py-3">
        <Link
          href="/"
          className="text-base font-semibold tracking-tight text-foreground"
        >
          HNP AI
        </Link>
        <nav className="flex flex-wrap items-center gap-1 sm:gap-2">
          {links.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={cn(
                "rounded-md px-2 py-1.5 text-sm text-muted-foreground transition-colors hover:bg-muted hover:text-foreground",
              )}
            >
              {link.label}
            </Link>
          ))}
        </nav>
      </div>
    </header>
  );
}
