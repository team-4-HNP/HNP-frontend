import { buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import Link from "next/link";

export default function HomePage() {
  return (
    <div className="relative flex flex-1 flex-col overflow-hidden">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top,_oklch(0.94_0.03_250)_0%,_transparent_55%)] dark:bg-[radial-gradient(circle_at_top,_oklch(0.28_0.05_250)_0%,_transparent_55%)]" />
      <section className="relative mx-auto flex w-full max-w-5xl flex-1 flex-col justify-center gap-10 px-4 py-16 sm:py-24">
        <div className="max-w-2xl space-y-6">
          <p className="text-sm font-semibold tracking-wide text-primary uppercase">
            Preferences-first travel
          </p>
          <h1 className="text-4xl leading-tight font-semibold tracking-tight sm:text-5xl">
            HNP AI finds stays that feel right — then helps you split them.
          </h1>
          <p className="text-lg text-muted-foreground">
            Chat through what matters to you, compare curated accommodations,
            and match with travelers who want the same listing so everyone saves
            on nightly rates.
          </p>
          <div className="flex flex-col gap-3 sm:flex-row sm:items-center">
            <Link href="/login" className={cn(buttonVariants({ size: "lg" }))}>
              Get started
            </Link>
            <Link
              href="/chat"
              className={cn(buttonVariants({ variant: "outline", size: "lg" }))}
            >
              Try the concierge demo
            </Link>
          </div>
          <p className="text-sm text-muted-foreground">
            Voice search, live providers, and OAuth login arrive in upcoming
            milestones — this scaffold focuses on the core journeys.
          </p>
        </div>
      </section>
    </div>
  );
}
