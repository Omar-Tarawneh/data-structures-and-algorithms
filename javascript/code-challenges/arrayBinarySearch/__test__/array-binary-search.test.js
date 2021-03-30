"use strict";
const binarySearch = require("../array-binary-search.js");
describe("binary search", () => {
  test("It should return the index of the value or -1 if not exist", () => {
    expect(binarySearch([4, 8, 15, 16, 23, 42], 15)).toEqual(2);
    expect(binarySearch([1, 2, 3, 5, 6, 7], 4)).toEqual(-1);
    expect(binarySearch([11, 22, 33, 44, 55, 66, 77], 90)).toEqual(-1);
  });
});
