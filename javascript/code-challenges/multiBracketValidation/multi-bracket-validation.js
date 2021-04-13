"use strict";

const { Stack } = require("../../stacksAndQueues/stacks-and-queues.js");

const multiBracketValidation = (str) => {
  let stack = new Stack();
  let array = str.split("");
  let check;
  for (let i = 0; i < array.length; i++) {
    if (array[i] == "[" || array[i] == "{" || array[i] == "(") {
      stack.push(array[i]);
    } else if (array[i] == "]" || array[i] == "}" || array[i] == ")") {
      check = stack.peek() + array[i];
      if (check == "{}" || check == "[]" || check == "()") {
        stack.pop();
      } else {
        return false;
      }
    }
  }
  return stack.length === 0;
};

module.exports = multiBracketValidation;
