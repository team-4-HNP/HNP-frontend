import { Card, CardContent } from "@/components/ui/card";
import { Bot, DollarSign, Shield } from "lucide-react";

const features = [
  {
    icon: Shield,
    title: "Verified profiles",
    body: "Trust-building signals and reviews so you know who you might share a listing with.",
  },
  {
    icon: Bot,
    title: "AI matching",
    body: "Natural-language preferences turned into ranked stays and compatible travelers.",
  },
  {
    icon: DollarSign,
    title: "Split costs",
    body: "See nightly totals and per-person splits before you commit to a match.",
  },
] as const;

export function FeaturesSection() {
  return (
    <section
      id="features"
      className="scroll-mt-24 border-t border-border/80 bg-muted/30 px-4 py-20 md:py-28"
    >
      <div className="mx-auto max-w-5xl">
        <h2 className="text-center text-3xl font-bold tracking-tight md:text-4xl">
          Why choose StayMate
        </h2>
        <p className="mx-auto mt-4 max-w-2xl text-center text-muted-foreground md:text-lg">
          Built for solo travelers who want better fits — not endless tabs.
        </p>

        <div className="mt-14 grid gap-10 md:grid-cols-3 md:gap-8">
          {features.map(({ icon: Icon, title, body }) => (
            <Card
              key={title}
              className="border-0 bg-transparent text-center shadow-none ring-0"
            >
              <CardContent className="flex flex-col items-center gap-4 px-2 pt-0">
                <span className="flex size-14 items-center justify-center rounded-full bg-background shadow-sm ring-1 ring-border">
                  <Icon className="size-7 text-foreground" strokeWidth={1.75} />
                </span>
                <h3 className="text-lg font-semibold">{title}</h3>
                <p className="max-w-xs text-sm leading-relaxed text-muted-foreground">
                  {body}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
