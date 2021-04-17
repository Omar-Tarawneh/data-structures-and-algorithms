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
};
