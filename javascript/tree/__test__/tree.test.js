"use strict";
const { BinaryTree, BinarySearchTree, Node } = require("../tree.js");

describe("Testing the binary search tree", () => {
  test("Can successfully instantiate an empty tree", () => {
    // let root = new Node(2);
    let binaryTree = new BinarySearchTree();
    expect(binaryTree.root).toBeNull();
  });
  test("Can successfully instantiate a tree with a single root node", () => {
    let root = new Node(2);
    let binaryTree = new BinarySearchTree(root);
    expect(binaryTree.root.value).toEqual(2);
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
  test("Can successfully return the maximum value in the tree", () => {
    let root = new Node(2);
    let sec = new Node(7);
    sec.left = new Node(2);
    let thi = new Node(6);
    thi.right = new Node(11);
    thi.left = new Node(5);
    sec.right = thi;
    root.left = sec;
    let four = new Node(5);
    let fif = new Node(9);
    fif.left = new Node(4);
    four.right = fif;
    root.right = four;
    let tree = new BinaryTree(root);
    //        2
    //      /  \
    //     7    5
    //    / \    \
    //   2   6    9
    //      / \   /
    //     5  11 4
    expect(tree.findMax()).toEqual(11);
  });
  test("Can successfully return the maximum value in the tree", () => {
    let root = new Node(2);
    let tree = new BinaryTree(root);
    //        2
    //      /   \
    //     null null
    expect(tree.findMax()).toEqual(2);
  });
  test("Can successfully return null when the tree is empty", () => {
    let tree = new BinaryTree();
    expect(tree.findMax()).toBeNull();
  });
  test("Can successfully return breadth first of the tree", () => {
    let root = new Node(2);
    let sec = new Node(7);
    sec.left = new Node(2);
    let thi = new Node(6);
    thi.right = new Node(11);
    thi.left = new Node(5);
    sec.right = thi;
    root.left = sec;
    let four = new Node(5);
    let fif = new Node(9);
    fif.left = new Node(4);
    four.right = fif;
    root.right = four;
    let tree = new BinaryTree(root);
    //        2
    //      /  \
    //     7    5
    //    / \    \
    //   2   6    9
    //      / \   /
    //     5  11 4
    expect(tree.breadthFirst()).toStrictEqual([2, 7, 5, 2, 6, 9, 5, 11, 4]);
  });
  test("Can successfully return null the tree is empty", () => {
    let tree = new BinaryTree();
    expect(tree.breadthFirst()).toBeNull();
  });
});
