const delay = require("./delay");

describe("validation async", () => {
  test("Correct result", async() => {
    const sum = await delay(()=>5+5,1000);
    expect(sum).toBe(10);
  });
});