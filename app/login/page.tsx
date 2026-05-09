import { buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Login",
};

export default function LoginPage() {
  return (
    <div className="flex flex-1 items-center justify-center px-4 py-16">
      <Card className="w-full max-w-md shadow-lg">
        <CardHeader>
          <CardTitle>Welcome back</CardTitle>
          <CardDescription>
            Google OAuth wiring lands soon — for now this button simply routes
            you to the concierge demo.
          </CardDescription>
        </CardHeader>
        <CardContent className="flex flex-col gap-4">
          <Link
            href="/chat"
            className={cn(
              buttonVariants({ variant: "outline" }),
              "h-11 justify-center border-border bg-background hover:bg-muted",
            )}
          >
            <span
              aria-hidden
              className="mr-3 inline-flex size-5 items-center justify-center rounded-full bg-[oklch(0.97_0_0)] text-[10px] font-bold dark:bg-[oklch(0.25_0_0)]"
            >
              G
            </span>
            Continue with Google
          </Link>
          <p className="text-center text-xs text-muted-foreground">
            By continuing you acknowledge this UI stub does not authenticate you
            yet.
          </p>
        </CardContent>
      </Card>
    </div>
  );
}
