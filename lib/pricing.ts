export function splitPricePerPersonCents(
  totalCents: number,
  splitCount: number,
): number {
  if (
    !Number.isFinite(totalCents) ||
    !Number.isFinite(splitCount) ||
    splitCount < 1
  ) {
    throw new Error("totalCents must be finite and splitCount must be >= 1");
  }

  return Math.ceil(totalCents / splitCount);
}
