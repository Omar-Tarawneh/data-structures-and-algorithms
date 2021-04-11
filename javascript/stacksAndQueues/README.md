# Stacks and Queues

Stack is a container of objects that are inserted and removed according to the last-in first-out (LIFO) principle. Queue is a container of objects (a linear collection) that are inserted and removed according to the first-in first-out (FIFO) principle

## Challenge

- Create a Node class that has properties for the value stored in the Node, and a pointer to the next node.
- Create a Stack class that has a top property. It creates an empty Stack when instantiated.
- This object should be aware of a default empty value assigned to top when the stack is created.
- Define a method called push which takes any value as an argument and adds a new node with that value to the top of the stack with an O(1) Time performance.
- Define a method called pop that does not take any argument, removes the node from the top of the stack, and returns the node’s value.
  Should raise exception when called on empty stack
- Define a method called peek that does not take an argument and returns the value of the node located on top of the stack, without removing it from the stack.
  Should raise exception when called on empty stack
- Define a method called isEmpty that takes no argument, and returns a boolean indicating whether or not the stack is empty.
- Create a Queue class that has a front property. It creates an empty Queue when instantiated.
  This object should be aware of a default empty value assigned to front when the queue is created.
- Define a method called enqueue which takes any value as an argument and adds a new node with that value to the back of the queue with an O(1) Time performance.
- Define a method called dequeue that does not take any argument, removes the node from the front of the queue, and returns the node’s value.
  Should raise exception when called on empty queue
- Define a method called peek that does not take an argument and returns the value of the node located in the front of the queue, without removing it from the queue.
  Should raise exception when called on empty queue
- Define a method called isEmpty that takes no argument, and returns a boolean indicating whether or not the queue is empty.

## Approach & Efficiency

<!-- What approach did you take? Why? What is the Big O space/time for this approach? -->

Stack and Queue are the same thing actually but the difference in the way we add or remove from it.

- Stack:

  - Push method: time complexity O(1), space complexity O(1).
  - Pop method: time complexity O(1), space Complexity O(1).
  - peek: time complexity O(1), space Complexity O(1).
  - isEmpty method: time complexity O(1), space Complexity O(1).

- Queue:
  - enqueue method: time complexity O(1), space Complexity O(1). note: I have use the back property to get time complexity of 1, using the front property only will make the time complexity O(n). So I give up some of memory for the time
  - dequeue: time complexity O(1), space Complexity O(1).
  - peek: time complexity O(1), space Complexity O(1).
  - isEmpty: time complexity O(1), space Complexity O(1).

## API

<!-- Description of each method publicly available to your Stack and Queue-->

- Stack:

  - Push method: take any value as argument add it to the top of the stack
  - Pop method: takes no args and remove the node from the top of the stack.
  - peek: takes no args and return the value of the top node of the stack.
  - isEmpty method: takes no args return true if empty false if not.

- Queue:
  - enqueue method: takes a value as args and add it to back of the queue
  - dequeue: takes no args and remove the node from the front of the queue.
  - peek: takes no args and return the value of the node in the front of the queue.
  - isEmpty: takes no args return true if empty false if not.
