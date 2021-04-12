"use strict";
const { Queue } = require("../stacksAndQueues/stacks-and-queues.js");

class AnimalShelter {
  constructor() {
    this.dogs = new Queue();
    this.cats = new Queue();
  }

  enqueue(animal) {
    if (animal.type === "dog") {
      this.dogs.enqueue(animal);
    } else if (animal.type === "cat") {
      this.cats.enqueue(animal);
    } else {
      return "Exception";
    }
  }
  dequeue(pref) {
    if (pref === "dog") {
      this.dogs.dequeue();
    } else if (pref === "cat") {
      this.cats.dequeue();
    } else {
      return null;
    }
  }
}

module.exports = AnimalShelter;
