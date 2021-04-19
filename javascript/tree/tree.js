"use strict";

class Node {
  constructor(value, left = null, right = null) {
    this.value = value;
    this.left = left;
    this.right = right;
  }
}

class BinaryTree {
  constructor(root = null) {
    this.root = root;
  }
  // Root left Right
  preOrder() {
    const output = [];
    const _traverse = (node) => {
      output.push(node.value);

      if (node.left) _traverse(node.left);

      if (node.right) _traverse(node.right);
    };
    _traverse(this.root);
    return output;
  }
  // Left - Root - Right
  inOrder() {
    const output = [];
    const _traverse = (node) => {
      if (node.left) _traverse(node.left);
      output.push(node.value);
      if (node.right) _traverse(node.right);
    };
    _traverse(this.root);
    return output;
  }
  // Left - Right - Root
  postOrder() {
    const output = [];
    const _traverse = (node) => {
      if (node.left) _traverse(node.left);
      if (node.right) _traverse(node.right);
      output.push(node.value);
    };
    _traverse(this.root);
    return output;
  }
  findMax() {
    let max = 0;
    if (!this.root) return null;
    const _traverse = (node) => {
      if (node.left) {
        max = _max(node.left, max);
        _traverse(node.left);
      }
      max = _max(node, max);
      if (node.right) {
        max = _max(node.right, max);
        _traverse(node.right);
      }
    };
    _traverse(this.root);
    return max;
  }
  breadthFirst() {
    let output = [];
    if (!this.root) {
      return null;
    }
    const _breadthFirst = (root) => {
      let queue = [root];

      while (queue.length > 0) {
        let node = queue.shift();
        let value = node.value;
        output.push(value); // global array
        if (node.left == null && node.right == null) {
          continue;
        }
        if (node.left != null) {
          queue.push(node.left);
        }
        if (node.right != null) {
          queue.push(node.right);
        }
      }
    };
    _breadthFirst(this.root);
    return output;
  }
}

class BinarySearchTree extends BinaryTree {
  constructor(root) {
    super(root);
  }
  add(value) {
    let node = new Node(value);
    if (!this.root) {
      this.root = node;
      return;
    }
    _add(this.root, node);
  }
  contains(value) {
    if (!this.root) return null;
    else {
      let root = this.root;

      while (root) {
        if (value === root.value) {
          return true;
        }
        if (value < root.value) {
          root = root.left;
        } else {
          root = root.right;
        }
      }
      return false;
    }
  }
}
// private function

// compare node value with max variable;
const _max = (node, max) => {
  if (node.value > max) {
    max = node.value;
    return max;
  }
  return max;
};
// add a node to binary search tree
const _add = (root, node) => {
  if (node.value < root.value) {
    if (root.left == null) {
      root.left = node;
    } else {
      _add(root.left, node);
    }
  } else {
    if (root.right == null) {
      root.right = node;
    } else {
      _add(root.right, node);
    }
  }
};

module.exports = {
  BinaryTree,
  BinarySearchTree,
  Node,
};
