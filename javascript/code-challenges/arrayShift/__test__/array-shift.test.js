"use strict";
const arrayShift = require("../array-shift.js");

describe("shifted array", () => {
  test("It should return an array with a value added to the middle ", () => {
    expect(arrayShift([1, 2, 3, 4, 5, 6], 100)).toStrictEqual([
      1,
      2,
      3,
      100,
      4,
      5,
      6,
    ]);
    expect(arrayShift([89, 2354, 3546], 111)).toStrictEqual([
      89,
      2354,
      111,
      3546,
    ]);
  });
});
