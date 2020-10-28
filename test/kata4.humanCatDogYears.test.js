const { humanCatDogYears } = require("../src");

describe("humanCatDogYears", () => {
  it("returns number as an array of human years, cat years and dog years", () => {});
  expect(humanCatDogYears(10)).toEqual([10, 56, 64]);
  expect(humanCatDogYears(1)).toEqual([1, 15, 15]);
  expect(humanCatDogYears(2)).toEqual([2, 24, 24]);
  expect(humanCatDogYears(5)).toEqual([5, 36, 39]);
});
