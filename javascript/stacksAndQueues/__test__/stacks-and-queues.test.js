"use strict";

const { Stack, Queue } = require("../stacks-and-queues");

describe("Stack testing", () => {
  it("Can successfully push onto a stack", () => {
    let stack = new Stack();
    stack.push(1);
    expect(stack.top.value).toEqual(1);
  });
  it("Can successfully push multiple values onto a stack", () => {
    let stack = new Stack();
    stack.push(1);
    stack.push(2);
    stack.push(3);
    expect(stack.top.value).toEqual(3);
  });
  it("Can successfully pop off the stack", () => {
    let stack = new Stack();
    stack.push(1);
    stack.push(2);
    stack.pop();
    expect(stack.top.value).toEqual(1);
  });
  it("Can successfully empty a stack after multiple pops", () => {
    let stack = new Stack();
    stack.push(1);
    stack.push(2);
    stack.pop();
    stack.pop();
    expect(stack.top).toBeNull();
  });
  it("Can successfully peek the next item on the stack", () => {
    let stack = new Stack();
    stack.push(1);
    stack.push(2);
    expect(stack.peek()).toEqual(2);
  });
  it("Can successfully instantiate an empty stack", () => {
    let stack = new Stack();
    expect(stack.isEmpty()).toBeTruthy();
  });
  it("Calling pop or peek on empty stack raises exception", () => {
    let stack = new Stack();
    expect(stack.peek()).toEqual("Stack is empty");
    expect(stack.pop()).toEqual("Stack is empty");
  });
});

describe("Queue testing", () => {
  it("Can successfully enqueue into a queue", () => {
    let queue = new Queue();
    queue.enqueue(1);
    expect(queue.front.value).toEqual(1);
  });
  it("Can successfully enqueue multiple values into a queue", () => {
    let queue = new Queue();
    queue.enqueue(1);
    queue.enqueue(2);
    queue.enqueue(3);
    expect(queue.front.value).toEqual(1);
    expect(queue.front.next.value).toEqual(2);
    expect(queue.front.next.next.value).toEqual(3);
  });
  it("Can successfully dequeue out of a queue the expected value", () => {
    let queue = new Queue();
    queue.enqueue(1);
    queue.enqueue(2);
    queue.enqueue(3);
    expect(queue.dequeue()).toEqual(1);
  });
  it("Can successfully peek into a queue, seeing the expected value", () => {
    let queue = new Queue();
    queue.enqueue(1);
    queue.enqueue(2);
    queue.enqueue(3);
    expect(queue.peek()).toEqual(1);
  });
  it("Can successfully empty a queue after multiple dequeues", () => {
    let queue = new Queue();
    queue.enqueue(1);
    queue.enqueue(2);
    queue.enqueue(3);

    queue.dequeue();
    queue.dequeue();
    queue.dequeue();
    expect(queue.isEmpty()).toBeTruthy();
  });
  it("Can successfully instantiate an empty queue", () => {
    let queue = new Queue();

    expect(queue.isEmpty()).toBeTruthy();
  });
  it("Calling dequeue or peek on empty queue raises exception", () => {
    let queue = new Queue();

    expect(queue.dequeue()).toEqual("Queue is empty");
    expect(queue.peek()).toEqual("Queue is empty");
  });
});
