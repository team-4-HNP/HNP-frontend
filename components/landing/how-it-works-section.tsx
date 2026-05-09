export function HowItWorksSection() {
  const steps = [
    {
      step: "01",
      title: "Describe your trip",
      body: "Chat through destination, dates, budget, and house rules in plain language.",
    },
    {
      step: "02",
      title: "See curated stays",
      body: "Ranked listings aligned with your preferences — savings and split math surfaced upfront.",
    },
    {
      step: "03",
      title: "Match & split",
      body: "Connect with travelers booking the same accommodation and lock in shared rates.",
    },
  ];

  return (
    <section
      id="how-it-works"
      className="scroll-mt-24 border-t border-border/80 px-4 py-16 md:py-20"
    >
      <div className="mx-auto grid max-w-5xl gap-10 md:grid-cols-3 md:gap-8">
        {steps.map((item) => (
          <div key={item.step} className="relative text-left">
            <p className="font-mono text-xs font-medium tracking-widest text-muted-foreground uppercase">
              {item.step}
            </p>
            <h3 className="mt-2 text-lg font-semibold">{item.title}</h3>
            <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
              {item.body}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}
