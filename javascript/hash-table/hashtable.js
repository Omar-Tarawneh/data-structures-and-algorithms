"use strict";

const { LinkedList } = require("../linked-list/index.js");

class HashTable {
  constructor() {
    this.table = new Array(101);
  }

  add(key, value) {
    let hash = this.hash(key);
    if (!this.table[hash]) {
      this.table[hash] = new LinkedList();
    }
    this.table[hash].append({ key, value });
  }

  hash(key) {
    const hash = 37;
    let total = 0;

    for (var i = 0; i < key.length; i++) {
      total += hash * total + key.charCodeAt(i);
    }
    total %= this.table.length;
    if (total < 1) {
      this.table.length - 1;
    }
    return parseInt(total);
  }

  get(key) {
    let hash = this.hash(key);
    return this.table[hash];
  }

  contains(key) {
    let hash = this.hash(key);
    if (!this.table[hash]) return false;
    return true;
  }
}

module.exports = HashTable;
