"use strict";

class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

class Stack {
  constructor() {
    this.top = null;
    this.length = 0;
  }
  push(value) {
    let node = new Node(value);
    if (!this.top) {
      this.top = node;
      this.length++;
    } else {
      node.next = this.top;
      this.top = node;
      this.length++;
    }
  }
  pop() {
    if (this.top) {
      let value = this.top.value;
      let temp = this.top.next;
      this.top = temp;
      this.length--;
      return value;
    } else {
      return "Stack is empty";
    }
  }
  peek() {
    if (this.top) {
      return this.top.value;
    }
    return "Stack is empty";
  }
  isEmpty() {
    if (this.top) {
      return false;
    }
    return true;
  }
}

class Queue {
  constructor() {
    this.front = null;
    this.back = null;
  }
  enqueue(value) {
    let node = new Node(value);
    if (this.front) {
      this.back.next = node;
      this.back = node;
    } else {
      this.front = node;
      this.back = node;
    }
  }
  dequeue() {
    if (this.front) {
      let temp = this.front.next;
      let value = this.front.value;
      this.front = temp;
      return value;
    }
    return "Queue is empty";
  }
  peek() {
    if (this.front) {
      return this.front.value;
    }
    return "Queue is empty";
  }
  isEmpty() {
    if (this.front) {
      return false;
    }
    return true;
  }
}

module.exports = {
  Stack,
  Queue,
};
