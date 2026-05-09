import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { mockProfile } from "@/lib/mock/profile";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Profile",
};

export default function ProfilePage() {
  const initials = mockProfile.displayName
    .split(" ")
    .map((part) => part[0])
    .join("")
    .slice(0, 2)
    .toUpperCase();

  return (
    <div className="flex flex-1 flex-col gap-8 px-4 py-10">
      <div className="mx-auto flex w-full max-w-4xl flex-col gap-8 lg:flex-row">
        <Card className="flex-1 shadow-md">
          <CardHeader className="gap-4">
            <div className="flex flex-wrap items-center gap-4">
              <Avatar size="lg">
                {mockProfile.avatarSrc ? (
                  <AvatarImage
                    src={mockProfile.avatarSrc}
                    alt={`${mockProfile.displayName} avatar`}
                  />
                ) : null}
                <AvatarFallback>{initials}</AvatarFallback>
              </Avatar>
              <div>
                <CardTitle className="text-2xl">
                  {mockProfile.displayName}
                </CardTitle>
                <CardDescription className="text-base">
                  Age {mockProfile.age} · {mockProfile.gender}
                </CardDescription>
              </div>
            </div>
            <Separator />
            <p className="text-sm leading-relaxed text-muted-foreground">
              {mockProfile.bio}
            </p>
          </CardHeader>
          <CardContent className="gap-3">
            <p className="text-xs font-semibold tracking-wide text-muted-foreground uppercase">
              Interests
            </p>
            <div className="flex flex-wrap gap-2">
              {mockProfile.interests.map((interest) => (
                <Badge key={interest} variant="secondary">
                  {interest}
                </Badge>
              ))}
            </div>
          </CardContent>
        </Card>

        <Card className="flex-1 shadow-md">
          <CardHeader>
            <CardTitle>Reviews from hosts & guests</CardTitle>
            <CardDescription>
              Placeholder social proof until profiles sync from production data.
            </CardDescription>
          </CardHeader>
          <CardContent className="flex flex-col gap-4">
            {mockProfile.reviews.map((review) => (
              <div
                key={review.id}
                className="rounded-xl border bg-muted/40 p-4"
              >
                <div className="flex items-center justify-between gap-3">
                  <p className="font-medium">{review.authorName}</p>
                  <p className="text-sm text-muted-foreground">
                    {review.rating.toFixed(1)} / 5
                  </p>
                </div>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                  {review.comment}
                </p>
              </div>
            ))}
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
