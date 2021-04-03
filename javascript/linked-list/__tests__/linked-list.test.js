"use strict";
const { Node, LinkedList } = require("../index");

describe("testing the linked list", () => {
  test("empty instance of linked list", () => {
    let linkedList = new LinkedList();
    expect(linkedList.head).toEqual(null);
  });
  test("the head will point to the first node", () => {
    let firstNode = new Node(1);
    let linkedList = new LinkedList();

    linkedList.insert(firstNode);
    expect(linkedList.head.value).toEqual(1);
  });
  test("insert into the linked list", () => {
    let valueOne = new Node(1);
    let valueTwo = new Node(2);
    let valueThree = new Node(3);
    let linkedList = new LinkedList();

    linkedList.insert(valueOne);
    linkedList.insert(valueTwo);
    linkedList.insert(valueThree);

    expect(linkedList.head.value).toEqual(3);
    expect(linkedList.head.next.value).toEqual(2);
    expect(linkedList.head.next.next.value).toEqual(1);
  });
  test("check if node exist in the list or not", () => {
    let valueOne = new Node(1);
    let valueTwo = new Node(2);
    let valueThree = new Node(3);
    let linkedList = new LinkedList();

    linkedList.insert(valueOne);
    linkedList.insert(valueTwo);
    linkedList.insert(valueThree);

    expect(linkedList.includes(4)).toBeFalsy();
    expect(linkedList.includes(2)).toBeTruthy();
  });
  test("return String of the nodes on the linked list", () => {
    let valueOne = new Node(1);
    let valueTwo = new Node(2);
    let valueThree = new Node(3);
    let linkedList = new LinkedList();

    linkedList.insert(valueOne);
    linkedList.insert(valueTwo);
    linkedList.insert(valueThree);

    expect(linkedList.toString()).toEqual("{3} -> {2} -> {1} -> NULL");
  });
});
