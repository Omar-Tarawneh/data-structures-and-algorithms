"use strict";
const { BinaryTree, Node } = require("../../../tree/tree.js");
const treeIntersection = require("../tree-intersection.js");

describe("tree intersection", () => {
  let treeOne;
  let treeTwo;
  beforeAll(() => {
    // ---break
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
    treeOne = new BinaryTree(root);
    //        2
    //      /  \
    //     7    5
    //    / \    \
    //   2   6    9
    //      / \   /
    //     5  11 4
    let root1 = new Node(3);
    let sec1 = new Node(7);
    sec1.left = new Node(2);
    let thi1 = new Node(8);
    thi1.right = new Node(14);
    thi1.left = new Node(5);
    sec1.right = thi1;
    root1.left = sec1;
    let four1 = new Node(5);
    let fif1 = new Node(9);
    fif1.left = new Node(4);
    four1.right = fif1;
    root1.right = four1;
    treeTwo = new BinaryTree(root1);
    //        3
    //      /  \
    //     7    5
    //    / \    \
    //   2   8    9
    //      / \   /
    //     5  14  4
  });
  test("Happy Path return the common values from two trees", () => {
    expect(treeIntersection(treeOne, treeTwo)).toEqual([2, 7, 5, 5, 4, 9]);
  });
  test("return null if one of the tree is empty", () => {
    let tree = new BinaryTree();
    expect(treeIntersection(treeOne, tree)).toBeNull();
  });
});
