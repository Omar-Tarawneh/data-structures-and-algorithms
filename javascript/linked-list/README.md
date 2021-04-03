# Singly Linked List

A linked list is an ordered collection of data elements. A data element can be represented as a node in a linked list. Each node consists of two parts: data & pointer to the next node.

## Challenge

Create a class for the Linked list and the Node with three methods `insert, includes and toString` which do the following:

## Approach & Efficiency

- `insert`: insert a new node to the linked list. Big O `O(1)`
- `includes`: accept a value and check if the value exist in the list or not. `Time O(n) \ space O(1)`
- `toString`: return a string of the nodes value in the followin format `{a} -> {b} -> {c} -> NULL`. `Time O(n) \ space O(1)`

## API

- `insert`: accept a node as an argument and insert it to the first of the linked list.
- `includes`: accept a value as an argument and return **true** if the value exist or **false** if not.
- `toString`: accept no argument and return a string of the nodes value in the followin format `{a} -> {b} -> {c} -> NULL`.
