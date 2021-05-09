"use strict";

const HashTable = require("../../hash-table/hashtable.js");

function repeatedWord(str) {
  let strWithoutSympols = str.replace(/[^a-zA-Z ]/g, "").toLowerCase(); // make sure that the str not contain any special char e.g.: it, how? ...etc
  let words = strWithoutSympols.split(" ");
  let hashtable = new HashTable(words.length);

  for (let i = 0; i < words.length; i++) {
    if (hashtable.get(words[i])) return words[i];
    hashtable.add(words[i], words[i]);
  }
  return null;
}

module.exports = repeatedWord;
