import { Drug, Pharmacy } from "./pharmacy";

describe("Pharmacy", () => {
  it("should decrease the benefit and expiresIn", () => {
    expect(new Pharmacy([new Drug("test", 2, 3)]).updateBenefitValue()).toEqual(
      [new Drug("test", 1, 2)],
    );
  });
  it("should degrade Dafalgan twice as fast", () => {
    const pharmacy = new Pharmacy([new Drug("Dafalgan", 5, 10)]);
    expect(pharmacy.updateBenefitValue()).toEqual([new Drug("Dafalgan", 4, 8)]);
  });

  it("should degrade Dafalgan four times as fast after expiration", () => {
    const pharmacy = new Pharmacy([new Drug("Dafalgan", 0, 10)]);
    expect(pharmacy.updateBenefitValue()).toEqual([
      new Drug("Dafalgan", -1, 6),
    ]);
  });
});
