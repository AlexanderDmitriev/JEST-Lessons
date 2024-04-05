const validateValue = require("./validateValue");


describe("validation", ()=>{
    test("Correct number", () => {
        expect(validateValue(50)).toBe(true);
      });
      test("Less, than correct number", () => {
        expect(validateValue(-1)).toBe(false);
      });
      test("More, than correct number", () => {
        expect(validateValue(101)).toBe(false);
      });
      test("0 number", () => {
        expect(validateValue(0)).toBe(true);
      });
      test("100 number", () => {
        expect(validateValue(100)).toBe(true);
      });
});
