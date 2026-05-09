import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { formatMoneyFromCents } from "@/lib/format-money";
import { splitPricePerPersonCents } from "@/lib/pricing";
import type { AccommodationListing } from "@/lib/types/accommodation";
import Image from "next/image";

export function AccommodationCard({
  listing,
}: {
  listing: AccommodationListing;
}) {
  const splitCents = splitPricePerPersonCents(
    listing.totalPricePerNightCents,
    listing.splitCount,
  );

  return (
    <Card className="overflow-hidden pt-0 transition-shadow hover:shadow-md">
      <div className="relative aspect-16/10 w-full bg-muted">
        {listing.imageSrc ? (
          <Image
            src={listing.imageSrc}
            alt={`${listing.name} photo`}
            fill
            className="object-cover"
            sizes="(max-width:768px) 100vw, 33vw"
          />
        ) : (
          <div className="flex size-full items-center justify-center text-sm text-muted-foreground">
            Photo coming soon
          </div>
        )}
      </div>
      <CardContent className="gap-2 px-4 pt-4 pb-2">
        <p className="text-xs font-medium text-muted-foreground uppercase tracking-wide">
          {listing.country} · {listing.place}
        </p>
        <h3 className="text-lg leading-snug font-semibold">{listing.name}</h3>
        <p className="text-sm text-muted-foreground">{listing.roomType}</p>
        <Separator className="my-3" />
        <dl className="grid gap-2 text-sm">
          <div className="flex items-center justify-between gap-2">
            <dt className="text-muted-foreground">Nightly total</dt>
            <dd className="font-medium tabular-nums">
              {formatMoneyFromCents(listing.totalPricePerNightCents)}
            </dd>
          </div>
          <div className="flex items-center justify-between gap-2">
            <dt className="text-muted-foreground">
              Split ({listing.splitCount} people)
            </dt>
            <dd className="font-semibold tabular-nums text-primary">
              {formatMoneyFromCents(splitCents)}
              <span className="ml-1 font-normal text-muted-foreground">
                / person
              </span>
            </dd>
          </div>
        </dl>
      </CardContent>
      <CardFooter className="px-4 pb-4">
        <p className="text-xs text-muted-foreground">
          Demo listing — rates will sync from search providers once wired.
        </p>
      </CardFooter>
    </Card>
  );
}
