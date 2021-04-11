"use strict";

// Require the linked list implementation
const { LinkedList, Node } = require("../../linked-list/index.js");
let valueOne = new Node(1);
let valueTwo = new Node(2);
let valueThree = new Node(3);
let valueFour = new Node(4);
let ll = new LinkedList();

ll.append(1);
ll.append(2);
ll.append(3);
ll.append(4);
ll.append(3);
ll.append(2);
ll.append(1);

/*
  Accept a linked list
  Reveres it
  Return it
*/
function reverse(list) {
  let prev = null;
  let current = list.head;
  let nextNode = null;
  while (current != null) {
    nextNode = current.next;
    current.next = prev;
    prev = current;
    current = nextNode;
  }
  return prev;
}

function palindrom(list) {
  return list.toString() === reverse(list);
}
let ll2 = new LinkedList();
console.log(ll.toString());
ll2.head = reverse(ll);
console.log(ll2.toString());
