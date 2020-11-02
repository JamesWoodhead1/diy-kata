const { joinNames } = require("../src");

describe("joinNames", () => {
  it("returns string of names, seperated by commas and an ampersand", () => {});
  expect(
    joinNames([
      { name: "Bart" }, 
      { name: "Lisa" }, 
      { name: "Maggie" }
    ])
  ).toBe("Bart, Lisa & Maggie");
  expect(
    joinNames([
      { name: "Vince" },
      { name: "Howard" },
      { name: "Naboo" },
      { name: "Bollo" }
    ])
  ).toBe("Vince, Howard, Naboo & Bollo");
});
