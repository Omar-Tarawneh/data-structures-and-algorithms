"use strict";

class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

class LinkedList {
  constructor() {
    this.head = null;
    this.length = 0;
  }
  insert(node) {
    if (!this.head) {
      this.head = node;
      this.length++;
    } else {
      let lastHead = this.head;
      this.head = node;
      this.head.next = lastHead;
      this.length++;
    }
  }
  includes(value) {
    let lastNode = this.head;
    while (lastNode.next) {
      if (lastNode.value == value) {
        return true;
      }
      lastNode = lastNode.next;
    }
    return false;
  }
  append(value) {
    let node = new Node(value);
    if (!this.head) {
      this.head = node;
      this.length++;
    } else {
      let lastNode = this.head;
      while (lastNode.next) {
        lastNode = lastNode.next;
      }
      lastNode.next = node;
      this.length++;
    }
  }

  insertAfter(value, newVal) {
    let node = new Node(newVal);
    let current = this.head;
    while (current) {
      if (current.value === value) {
        let temp = current.next;
        current.next = node;
        node.next = temp;
        this.length++;
        return;
      }
      current = current.next;
    }
    return "Exeption";
  }
  insertBefore(value, newVal) {
    let node = new Node(newVal);
    let current = this.head;
    while (current && current.next !== null) {
      if (current.next.value === value) {
        let temp = current.next;
        current.next = node;
        node.next = temp;
        this.length++;
        return;
      }
      current = current.next;
    }
    return "Exeption";
  }
  toString() {
    let lastNode = this.head;
    let listString = "";
    while (lastNode) {
      listString += `{${lastNode.value}} ->`;
      lastNode = lastNode.next;
    }
    listString += `NULL`;
    return listString;
  }
}

let valueOne = new Node(1);
let valueTwo = new Node(2);
let valueThree = new Node(3);
let ll = new LinkedList();

ll.append(valueOne);
ll.append(valueTwo);
ll.append(valueThree);
module.exports = {
  Node: Node,
  LinkedList: LinkedList,
};
