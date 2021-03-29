"use strict";
const arrayShift = (arr, num) => {
  let output = [];
  let indexOfnewElement = Math.ceil(arr.length / 2);
  for (let i = 0; i < arr.length + 1; i++) {
    if (i < indexOfnewElement) {
      output[i] = arr[i];
    } else if (i == indexOfnewElement) {
      output[i] = num;
    } else if (i > indexOfnewElement) {
      output[i] = arr[i - 1];
    }
  }
  return output;
};

module.exports = arrayShift;
