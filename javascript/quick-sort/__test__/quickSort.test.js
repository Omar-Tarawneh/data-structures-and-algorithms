const quickSort = require("../quickSort.js");

describe("Quick Sort Algorithm testing", () => {
  test("Happy Path should successfully return the array sorted", () => {
    let arr = [8, 4, 23, 42, 16, 15];
    expect(quickSort(arr, 0, arr.length - 1)).toEqual([4, 8, 15, 16, 23, 42]);
  });
  test("Should return null if the array is emtpy", () => {
    let arr = [];
    expect(quickSort(arr, 0, arr.length - 1)).toBeNull();
  });
  test("return the same array if it's have only one element", () => {
    let arr = [8];
    expect(quickSort(arr, 0, arr.length - 1)).toEqual([8]);
  });
});
