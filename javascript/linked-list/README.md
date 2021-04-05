# Singly Linked List

A linked list is an ordered collection of data elements. A data element can be represented as a node in a linked list. Each node consists of two parts: data & pointer to the next node.

I solve the last three method with: Ruba, Bayan, and Samer.

## Challenge

Create a class for the Linked list and the Node with three methods `insert, includes and toString` which do the following:

## Approach & Efficiency

- `insert`: insert a new node to the linked list. Big O `O(1)`
- `append`: append a new node to the end of the linked list. Big O `O(n)`
- `insertAfter`: insert a new node to the linked list after the value given. Big O `O(n)`
- `insertBefore`: insert a new node to the linked list before the value given. Big O `O(n)`
- `includes`: accept a value and check if the value exist in the list or not. `Time O(n) \ space O(1)`
- `kthFromEnd`: accept an index and return the value of the node from the end. `Time O(n) \ space O(1)`
- `toString`: return a string of the nodes value in the followin format `{a} -> {b} -> {c} -> NULL`. `Time O(n) \ space O(1)`

## API

![white-board](/assets/linked-list-whiteboard.png)
![kthfromEnd](/assets/whiteboard-kth.png)

- `insert`: accept a node as an argument and insert it to the first of the linked list.
- `includes`: accept a value as an argument and return **true** if the value exist or **false** if not.
- `toString`: accept no argument and return a string of the nodes value in the followin format `{a} -> {b} -> {c} -> NULL`.
- `append`: accept a value and creat and instance node with value and append it to the end of the linked list.
- `insertAfter`: accept a value and new value as argument and insert the new value after the value.
- `insertBefore`: accept a value and new value as argument and insert the new value before the value.
- `kthFromEnd`: accept an index and return the value of the node from the end of the list if the index is not in the list return Exception.
