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
  toString() {
    let lastNode = this.head;
    let listString = "";
    for (let index = 0; index < this.length; index++) {
      listString += `{${lastNode.value}} -> `;
      lastNode = lastNode.next;
    }
    listString += `NULL`;
    return listString;
  }
}

module.exports = {
  Node: Node,
  LinkedList: LinkedList,
};
