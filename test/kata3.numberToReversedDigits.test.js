const { numberToReversedDigits } = require("../src");

describe("numberToReversedDigits", () => {
  it("returns a reversed array of the number's digits", () => {});
  expect(numberToReversedDigits(12345)).toEqual([5, 4, 3, 2, 1]);
  expect(numberToReversedDigits(67890)).toEqual([0, 9, 8, 7, 6]);
  expect(numberToReversedDigits(13579)).toEqual([9, 7, 5, 3, 1]);
});
