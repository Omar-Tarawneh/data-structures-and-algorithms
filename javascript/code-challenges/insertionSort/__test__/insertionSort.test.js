const insertionSort = require("../insertionSort");

describe("Insertion Sort", () => {
  test("Happy Path it shoule return the array sorted", () => {
    expect(insertionSort([34, 4, 23, 0])).toStrictEqual([0, 4, 23, 34]);
  });
  test("if the array is empty return null", () => {
    expect(insertionSort([])).toBeNull();
  });
  test("if the array have one element return the array as it is", () => {
    expect(insertionSort([1])).toStrictEqual([1]);
  });
});
