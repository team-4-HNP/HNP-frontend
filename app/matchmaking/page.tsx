import { AccommodationCard } from "@/components/accommodation-card";
import { mockAccommodations } from "@/lib/mock/accommodations";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Matchmaking",
};

export default function MatchmakingPage() {
  return (
    <div className="flex flex-1 flex-col gap-8 px-4 py-10">
      <div className="mx-auto w-full max-w-5xl space-y-3">
        <p className="text-sm font-semibold tracking-wide text-primary uppercase">
          Shared stays
        </p>
        <h1 className="text-3xl font-semibold tracking-tight">
          Trips open for matchmaking
        </h1>
        <p className="max-w-3xl text-muted-foreground">
          Preview cards mirror what we&apos;ll hydrate from your backend and
          partner search tools — swap in live inventory whenever APIs are ready.
        </p>
      </div>

      <div className="mx-auto grid w-full max-w-5xl gap-6 md:grid-cols-2 xl:grid-cols-3">
        {mockAccommodations.map((listing) => (
          <AccommodationCard key={listing.id} listing={listing} />
        ))}
      </div>
    </div>
  );
}
