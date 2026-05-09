import { buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import Link from "next/link";

export function LandingCtaSection() {
  return (
    <section id="cta" className="scroll-mt-24 px-4 pb-20 md:pb-28">
      <div className="mx-auto max-w-5xl rounded-2xl bg-foreground px-6 py-14 text-center text-background md:px-16 md:py-16">
        <h2 className="text-balance text-2xl font-bold tracking-tight md:text-3xl">
          Ready to save on your next trip?
        </h2>
        <p className="mx-auto mt-4 max-w-lg text-sm leading-relaxed text-background/80 md:text-base">
          Create an account when OAuth is live — for now jump straight into the
          concierge or browse demo listings.
        </p>
        <Link
          href="/login"
          className={cn(
            buttonVariants({ variant: "secondary", size: "lg" }),
            "mt-8 rounded-full bg-background px-8 text-base font-semibold text-foreground hover:bg-background/90",
          )}
        >
          Get started
        </Link>
      </div>
    </section>
  );
}
