const { BinaryTree, Node } = require("../../../tree/tree.js");
const fizzBuzzTree = require("../fizzBuzzTree.js");

describe("Testing the FizzBuzzTree function", () => {
  test("change the value of node to fizz and buzz if not value to string", () => {
    let root = new Node(2);
    let sec = new Node(7);
    sec.left = new Node(2);
    let thi = new Node(6);
    thi.right = new Node(11);
    thi.left = new Node(15);
    sec.right = thi;
    root.left = sec;
    let four = new Node(15);
    let fif = new Node(9);
    fif.left = new Node(4);
    four.right = fif;
    root.right = four;
    let tree = new BinaryTree(root);
    let fizzTree = fizzBuzzTree(tree);
    expect(fizzTree.root.right.value).toEqual("fizzBuzz");
    expect(fizzTree.root.value).toEqual("2");
  });
  test("Return null if the tree is empty", () => {
    let tree = new BinaryTree();
    let fizzTree = fizzBuzzTree(tree);
    expect(fizzTree).toBeNull();
  });
});
