import { cn } from "@/lib/utils";

export function LogoMark({ className }: { className?: string }) {
  return (
    <span
      className={cn(
        "flex size-9 shrink-0 items-center justify-center rounded-lg bg-foreground text-[13px] font-bold tracking-tight text-background",
        className,
      )}
      aria-hidden
    >
      S
    </span>
  );
}
