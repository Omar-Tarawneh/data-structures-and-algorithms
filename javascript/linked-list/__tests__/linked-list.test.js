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

    expect(linkedList.toString()).toEqual("{3} ->{2} ->{1} ->NULL");
  });
  test("append a value to the end of linked list", () => {
    let valueOne = new Node(1);
    let valueTwo = new Node(2);
    let valueThree = new Node(3);
    let linkedList = new LinkedList();

    linkedList.insert(valueOne);
    linkedList.insert(valueTwo);
    linkedList.insert(valueThree);

    linkedList.append(4);
    expect(linkedList.toString()).toEqual("{3} ->{2} ->{1} ->{4} ->NULL");
  });
  test("append multible value to the end of linked list", () => {
    let valueOne = new Node(1);
    let valueTwo = new Node(2);
    let valueThree = new Node(3);
    let linkedList = new LinkedList();

    linkedList.insert(valueOne);
    linkedList.insert(valueTwo);
    linkedList.insert(valueThree);

    linkedList.append(4);
    linkedList.append(5);
    expect(linkedList.toString()).toEqual("{3} ->{2} ->{1} ->{4} ->{5} ->NULL");
  });
  test("Can successfully insert a node before a node located i the middle of a linked list", () => {
    let valueOne = new Node(1);
    let valueTwo = new Node(2);
    let valueThree = new Node(3);
    let linkedList = new LinkedList();

    linkedList.insert(valueOne);
    linkedList.insert(valueTwo);
    linkedList.insert(valueThree);

    linkedList.insertBefore(2, 5);
    expect(linkedList.toString()).toEqual("{3} ->{5} ->{2} ->{1} ->NULL");
  });
  test("Can successfully insert a node before the first node of a linked list", () => {
    let valueOne = new Node(1);
    let valueTwo = new Node(2);
    let valueThree = new Node(3);
    let linkedList = new LinkedList();

    linkedList.insert(valueOne);
    linkedList.insert(valueTwo);
    linkedList.insert(valueThree);

    linkedList.insert(new Node(5));
    expect(linkedList.toString()).toEqual("{5} ->{3} ->{2} ->{1} ->NULL");
  });
  test("Can successfully insert after a node in the middle of the linked list", () => {
    let valueOne = new Node(1);
    let valueTwo = new Node(2);
    let valueThree = new Node(3);
    let linkedList = new LinkedList();

    linkedList.insert(valueOne);
    linkedList.insert(valueTwo);
    linkedList.insert(valueThree);

    linkedList.insertAfter(2, 5);

    expect(linkedList.toString()).toEqual("{3} ->{2} ->{5} ->{1} ->NULL");
  });
  test("Can successfully insert a node after the last node of the linked list", () => {
    let valueOne = new Node(1);
    let valueTwo = new Node(2);
    let valueThree = new Node(3);
    let linkedList = new LinkedList();

    linkedList.insert(valueOne);
    linkedList.insert(valueTwo);
    linkedList.insert(valueThree);

    linkedList.insertAfter(1, 5);

    expect(linkedList.toString()).toEqual("{3} ->{2} ->{1} ->{5} ->NULL");
  });
  test(" k is greater than the length of the linked list", () => {
    let valueOne = new Node(1);
    let valueTwo = new Node(2);
    let valueThree = new Node(3);
    let linkedList = new LinkedList();

    linkedList.insert(valueOne);
    linkedList.insert(valueTwo);
    linkedList.insert(valueThree);

    expect(linkedList.kthFromEnd(5)).toEqual("Exception");
  });
  test(" k and the length of the list are the same", () => {
    let valueOne = new Node(1);
    let valueTwo = new Node(2);
    let valueThree = new Node(3);
    let linkedList = new LinkedList();

    linkedList.insert(valueOne);
    linkedList.insert(valueTwo);
    linkedList.insert(valueThree);

    expect(linkedList.kthFromEnd(3)).toEqual("Exception");
  });
  test(" k is not a positive integer", () => {
    let valueOne = new Node(1);
    let valueTwo = new Node(2);
    let valueThree = new Node(3);
    let linkedList = new LinkedList();

    linkedList.insert(valueOne);
    linkedList.insert(valueTwo);
    linkedList.insert(valueThree);

    expect(linkedList.kthFromEnd(-1)).toEqual("Exception");
  });
  test(" linked list is of a size 1", () => {
    let valueOne = new Node(1);
    let linkedList = new LinkedList();
    linkedList.insert(valueOne);

    expect(linkedList.kthFromEnd(0)).toEqual(1);
  });
  test(" k is not at the end, but somewhere in the middle of the linked list", () => {
    let valueOne = new Node(1);
    let valueTwo = new Node(2);
    let valueThree = new Node(3);
    let linkedList = new LinkedList();

    linkedList.insert(valueOne);
    linkedList.insert(valueTwo);
    linkedList.insert(valueThree);

    expect(linkedList.kthFromEnd(1)).toEqual(2);
  });
});
