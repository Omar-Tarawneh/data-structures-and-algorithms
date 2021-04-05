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
  append(node) {
    let current = this.head;
    while (current) {
      if (current.next == null) {
        current.next = node;
        break;
      }
      current = current.next;
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

module.exports = {
  Node: Node,
  LinkedList: LinkedList,
};
