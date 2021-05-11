"use strict";

function treeIntersection(tree1, tree2) {
  if (!tree1.root || !tree2.root) return null;
  let output = [];
  const _filter = (node1, node2) => {
    if (node1.left && node2.left) _filter(node1.left, node2.left);
    if (node1.value === node2.value) output.push(node1.value);
    if (node1.right && node2.right) _filter(node1.right, node2.right);
  };
  _filter(tree1.root, tree2.root);
  return output;
}

module.exports = treeIntersection;
