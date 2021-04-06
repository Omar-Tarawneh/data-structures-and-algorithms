"use strict";
const { LinkedList, Node } = require("../../linked-list/index.js");

const zipList = (list1, list2) => {
  if (!list1.head || !list2.head) {
    return "Failed- Empty list";
  }
  let listOneNode = list1.head;
  let listTwoNode = list2.head;
  let outputList = new LinkedList();
  for (let i = 0; i < list1.length + list2.length - 1; i++) {
    if (i % 2 == 0) {
      outputList.append(listOneNode.value);
      listOneNode = listOneNode.next;
    } else {
      outputList.append(listTwoNode.value);
      listTwoNode = listTwoNode.next;
    }
  }
  if (listTwoNode) {
    outputList.append(listTwoNode.value);
  } else if (listOneNode) {
    outputList.append(listOneNode.value);
  }
  return outputList;
};
module.exports = zipList;
