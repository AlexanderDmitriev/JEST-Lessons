const square = require("./square");

describe("validation square", () => {
  test("Correct result", () => {
    expect(square(2)).toBe(4);
  });
  test("Correct result", () => {
    expect(square(2)).toBeLessThan(5);
  });
  test("Correct result", () => {
    expect(square(2)).toBeGreaterThan(1);
  });
  test("Correct result", () => {
    expect(square(2)).not.toBeUndefined();
  });
});
