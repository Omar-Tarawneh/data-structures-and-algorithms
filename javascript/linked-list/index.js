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
  kthFromEnd(k) {
    let current = this.head;
    if (k <= this.length - 1 && k >= 0) {
      for (let i = this.length - 1; i >= 0; i--) {
        if (k == i) {
          return current.value;
        }
        current = current.next;
      }
    } else {
      return "Exception";
    }
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
