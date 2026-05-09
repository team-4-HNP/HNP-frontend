import { describe, expect, it } from "vitest";
import { splitPricePerPersonCents } from "./pricing";

describe("splitPricePerPersonCents", () => {
  it("rounds up each person's share in cents", () => {
    expect(splitPricePerPersonCents(1000, 3)).toBe(334);
  });

  it("returns full amount when splitting alone", () => {
    expect(splitPricePerPersonCents(9999, 1)).toBe(9999);
  });
});
