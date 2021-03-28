"use strict";

/* 
Write a function called reverseArray which takes an array as an argument. Without utilizing any of the built-in methods available to your language, return an array with elements in reversed order.
*/
const reverseArray = (arr) => {
  let output = [];
  for (let index = 0; index < arr.length; index++) {
    output[index] = arr[arr.length - (index + 1)];
  }
  return output;
};

module.exports = reverseArray;
