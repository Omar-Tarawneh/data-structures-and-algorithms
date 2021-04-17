"use strict";
const { BinarySearchTree } = require("../tree.js");
const { Node } = require("../../linked-list/index.js");

describe("Testing the binary search tree", () => {
  test("Can successfully instantiate an empty tree", () => {
    let root = new Node(2);
    let binaryTree = new BinarySearchTree(root);
    expect(binaryTree.root.next).toBeNull();
  });
  test("Can successfully instantiate a tree with a single root node", () => {
    let root = new Node(2);
    let binaryTree = new BinarySearchTree(root);
    expect(binaryTree.root.next).toBeNull();
  });
  test("Can successfully add a left child and right child to a single root node", () => {
    let root = new Node(2);
    let binaryTree = new BinarySearchTree(root);
    binaryTree.add(11);
    binaryTree.add(1);

    expect(binaryTree.root.left.value).toEqual(1);
    expect(binaryTree.root.right.value).toEqual(11);
  });
  test("Can successfully return a collection from a preorder traversal", () => {
    let root = new Node(2);
    let binaryTree = new BinarySearchTree(root);

    binaryTree.add(4);
    binaryTree.add(11);
    binaryTree.add(6);
    binaryTree.add(9);
    binaryTree.add(0);
    expect(binaryTree.preOrder()).toStrictEqual([2, 0, 4, 11, 6, 9]);
  });
  test("Can successfully return a collection from an inorder traversal", () => {
    let root = new Node(2);
    let binaryTree = new BinarySearchTree(root);

    binaryTree.add(4);
    binaryTree.add(11);
    binaryTree.add(6);
    binaryTree.add(9);
    binaryTree.add(0);
    expect(binaryTree.inOrder()).toStrictEqual([0, 2, 4, 6, 9, 11]);
  });
  test("Can successfully return a collection from a postorder traversal", () => {
    let root = new Node(2);
    let binaryTree = new BinarySearchTree(root);

    binaryTree.add(4);
    binaryTree.add(11);
    binaryTree.add(6);
    binaryTree.add(9);
    binaryTree.add(0);
    expect(binaryTree.postOrder()).toStrictEqual([0, 9, 6, 11, 4, 2]);
  });
});
