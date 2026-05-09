import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { Card, CardContent } from "@/components/ui/card";
import { landingTestimonials } from "@/lib/mock/testimonials";

export function TestimonialsSection() {
  return (
    <section id="testimonials" className="scroll-mt-24 px-4 py-20 md:py-28">
      <div className="mx-auto max-w-6xl">
        <h2 className="text-center text-3xl font-bold tracking-tight md:text-4xl">
          Trusted by solo travelers
        </h2>
        <p className="mx-auto mt-4 max-w-2xl text-center text-muted-foreground md:text-lg">
          Early previews from people testing the concierge and matchmaking
          flows.
        </p>

        <div className="mt-14 grid gap-6 md:grid-cols-3">
          {landingTestimonials.map((item) => (
            <Card
              key={item.id}
              className="h-full border-border/80 bg-card shadow-sm"
            >
              <CardContent className="flex h-full flex-col gap-6 pt-6 pb-6">
                <p className="flex-1 text-sm leading-relaxed text-foreground">
                  &ldquo;{item.quote}&rdquo;
                </p>
                <div className="flex items-center gap-3 border-t border-border/60 pt-4">
                  <Avatar size="sm">
                    <AvatarFallback className="bg-muted text-xs font-medium">
                      {item.initials}
                    </AvatarFallback>
                  </Avatar>
                  <div className="text-left text-sm">
                    <p className="font-semibold">{item.name}</p>
                    <p className="text-muted-foreground">{item.detail}</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
