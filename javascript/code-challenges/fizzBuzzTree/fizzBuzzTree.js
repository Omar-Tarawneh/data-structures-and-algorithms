"use strcit";

const { BinaryTree, Node } = require("../../tree/tree.js");

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
const fizzBuzzTree = (tree) => {
  if (!tree.root) {
    return null;
  }
  let root = tree.root;
  const fizzBuzz = (node) => {
    if (node.value % 3 == 0 && node.value % 5 == 0) {
      node.value = "fizzBuzz";
      return node;
    } else if (node.value % 3 == 0) {
      node.vlaue = "fizz";
      return node;
    } else if (node.value % 5 == 0) {
      node.value = "buzz";
      return node;
    } else {
      node.value = `${node.value}`;
      return node;
    }
  };
  const _traverse = (node) => {
    if (node.left) {
      node.left = fizzBuzz(node.left);
      _traverse(node.left);
    }
    node = fizzBuzz(node);
    if (node.right) {
      node.right = fizzBuzz(node.right);
      _traverse(node.right);
    }
  };
  _traverse(root);
  return tree;
};

console.log(fizzBuzzTree(tree));
module.exports = fizzBuzzTree;
