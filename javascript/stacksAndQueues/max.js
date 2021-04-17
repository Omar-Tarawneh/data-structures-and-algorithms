const { Stack } = require("./stacks-and-queues");

class MaxStack {
  constructor() {
    this.stack = new Stack();
    this.max = new Stack();
  }

  push(value) {
    if (this.stack.isEmpty() && this.max.isEmpty()) {
      this.stack.push(value);
      this.max.push(value);
      return;
    }
    if (value >= this.max.peek()) {
      this.stack.push(value);
      this.max.push(value);
    } else {
      this.stack.push(value);
    }
  }
  pop() {
    if (this.stack.peek() == this.max.peek()) {
      this.stack.pop();
      this.max.pop();
    } else {
      this.stack.pop();
    }
  }
  getMax() {
    return this.max.peek();
  }
}
