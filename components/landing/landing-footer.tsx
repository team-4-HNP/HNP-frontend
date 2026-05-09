import { LogoMark } from "@/components/landing/logo-mark";
import Link from "next/link";

export function LandingFooter() {
  return (
    <footer className="border-t border-border px-4 py-12">
      <div className="mx-auto flex max-w-6xl flex-col gap-8 md:flex-row md:items-center md:justify-between">
        <div className="flex items-center gap-3">
          <LogoMark />
          <div>
            <p className="font-semibold">StayMate</p>
            <p className="text-sm text-muted-foreground">
              © {new Date().getFullYear()} StayMate. All rights reserved.
            </p>
          </div>
        </div>
        <nav className="flex flex-wrap gap-x-6 gap-y-2 text-sm text-muted-foreground">
          <Link href="/chat" className="hover:text-foreground">
            Chat demo
          </Link>
          <Link href="/matchmaking" className="hover:text-foreground">
            Matchmaking
          </Link>
          <Link href="/profile" className="hover:text-foreground">
            Profile
          </Link>
          <span className="text-muted-foreground/70">Privacy</span>
          <span className="text-muted-foreground/70">Terms</span>
        </nav>
      </div>
    </footer>
  );
}
