"use strict";
const { Stack } = require("../stacksAndQueues/stacks-and-queues.js");
class PseudoQueue {
  constructor() {
    this.pushStack = new Stack();
    this.popStack = new Stack();
  }
  enqueue(value) {
    this.pushStack.push(value);
  }
  dequeue() {
    // if the pop stack is empty push the nodes from the pushStack to popStack and pop the first
    if (this.popStack.isEmpty() && !this.pushStack.isEmpty()) {
      while (this.pushStack.top) {
        this.popStack.push(this.pushStack.top.value);
        this.pushStack.top = this.pushStack.top.next;
      }
      this.popStack.pop();
      // if both stacks  empty Exception
    } else if (this.pushStack.isEmpty() && this.popStack.isEmpty()) {
      return "Exception: Stacks are empty";
      // popStack is not empty so pop the first node
    } else {
      this.popStack.pop();
    }
  }
}

const queue = new PseudoQueue();

module.exports = PseudoQueue;
