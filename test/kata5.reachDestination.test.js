const { reachDestination } = require("../src");

describe("reachDestination", () => {
  it("returns string with estimated time of arrival", () => {});
  expect(reachDestination(44, 10)).toBe(
    `I should reach my destination in 4.5 hours`
  );
  expect(reachDestination(79, 10)).toBe(
    `I should reach my destination in 8 hours`
  );
});
