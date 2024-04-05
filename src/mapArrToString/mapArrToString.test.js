const mapArrToString = require("./mapArrToString");

describe("validation arr", () => {
  test("Correct array", () => {
    expect(mapArrToString([1, 2, 3])).toEqual(["1", "2", "3"]);
  });
  test("Incorrect array", () => {
    expect(mapArrToString([1, 2, 3,'',null])).toEqual(["1", "2", "3"]);
  });
  test("Empty array", () => {
    expect(mapArrToString([])).toEqual([]);
  });
  test("Not equal", () => {
    expect(mapArrToString([1,2,3])).not.toEqual(['1','2','3','4']);
  });
});
