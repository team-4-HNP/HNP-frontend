import { buttonVariants } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { cn } from "@/lib/utils";
import Link from "next/link";

export function HeroSection() {
  return (
    <section className="relative px-4 pt-12 pb-16 md:pt-16 md:pb-24">
      <div className="mx-auto flex max-w-4xl flex-col items-center text-center">
        <h1 className="text-balance text-4xl font-bold tracking-tight md:text-5xl lg:text-[3.25rem] lg:leading-[1.08]">
          Find your perfect travel roommate
        </h1>
        <p className="mt-5 max-w-xl text-pretty text-lg text-muted-foreground md:text-xl">
          Tell us where you&apos;re headed — we&apos;ll match stays and people
          who fit your budget, habits, and vibe.
        </p>

        <Card className="mt-10 w-full max-w-xl shadow-lg ring-foreground/15">
          <CardHeader className="gap-1 pb-2 text-left">
            <CardTitle className="text-base font-semibold">
              Plan your stay
            </CardTitle>
            <CardDescription>
              Search is a preview — results wire up when your backend is ready.
            </CardDescription>
          </CardHeader>
          <CardContent className="gap-4 pt-2">
            <div className="grid gap-4 sm:grid-cols-2">
              <div className="text-left">
                <label className="sr-only" htmlFor="landing-destination">
                  Where are you going?
                </label>
                <Input
                  id="landing-destination"
                  name="destination"
                  placeholder="Where are you going?"
                  className="h-11 rounded-xl bg-background"
                />
              </div>
              <div className="text-left">
                <label className="sr-only" htmlFor="landing-dates">
                  Dates
                </label>
                <Input
                  id="landing-dates"
                  name="dates"
                  placeholder="Dates"
                  className="h-11 rounded-xl bg-background"
                />
              </div>
            </div>
            <Link
              href="/matchmaking"
              className={cn(
                buttonVariants({ size: "lg" }),
                "h-12 w-full rounded-full text-base font-semibold sm:col-span-2",
              )}
            >
              Search
            </Link>
          </CardContent>
        </Card>
      </div>
    </section>
  );
}
