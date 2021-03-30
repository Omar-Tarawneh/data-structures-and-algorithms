"use strict";

function binarySearch(arr, value) {
  let first = 0;
  let last = arr.length - 1;
  while (first <= last) {
    let middle = Math.floor((first + last) / 2);
    if (arr[middle] === value) {
      return middle;
    } else if (arr[middle] < value) {
      first = middle + 1;
    } else {
      last = middle - 1;
    }
  }
  return -1;
}

module.exports = binarySearch;
