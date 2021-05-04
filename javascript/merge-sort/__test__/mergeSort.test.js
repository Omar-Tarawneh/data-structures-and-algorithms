const mergeSort = require("../mergeSort.js");

test("Happy Path return an array sorted successfully", () => {
  let arr = [8, 4, 23, 42, 16, 15];
  expect(mergeSort(arr)).toStrictEqual([4, 8, 15, 16, 23, 42]);
});

test("Should return null if the arr is empty - Failuer", () => {
  let arr = [];
  expect(mergeSort(arr)).toBeNull();
});

test("if the array is sorted return it", () => {
  let arr = [1, 2, 3, 9];

  expect(mergeSort(arr)).toStrictEqual([1, 2, 3, 9]);
});
