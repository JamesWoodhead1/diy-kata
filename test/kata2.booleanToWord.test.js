const { booleanToWord } = require("../src");

describe("booleanToWord", () => {
  it("returns yes instead of true", () => {});
  expect(booleanToWord(true)).toBe("Yes");
  it("return no instead of false", () => {});
  expect(booleanToWord(false)).toBe("No");
});
