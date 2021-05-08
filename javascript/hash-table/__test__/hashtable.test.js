"use strict";

const HashTable = require("../hashtable");

describe("Hash Tables tests", () => {
  const hashtable = new HashTable();
  beforeAll(() => {
    hashtable.add("striker", "Ronaldo");
    hashtable.add("defender", "Ramos");
    hashtable.add("Goal Keeper", "Buffon");
  });

  test("Adding a key/value to your hashtable results in the value being in the data structure", () => {
    let filteredTable = hashtable.table.filter((value) => value !== null);
    expect(filteredTable.length).toBe(3);
  });
  test("Retrieving based on a key returns the value stored", () => {
    let index = hashtable.hash("striker");
    expect(hashtable.table[index].head.value.value).toStrictEqual("Ronaldo");
  });
  test("Successfully returns null for a key that does not exist in the hashtable", () => {
    expect(hashtable.contains("Omar :)")).toBeFalsy();
  });
  test("Successfully handle a collision within the hashtable", () => {
    hashtable.add("striker", "Messi");
    let bucket = hashtable.get("striker");
    expect(bucket.head.next.value.value).toEqual("Messi");
  });
  test("Successfully retrieve a value from a bucket within the hashtable that has a collision", () => {
    let bucket = hashtable.get("striker");
    expect(bucket.values()).toEqual([
      {
        key: "striker",
        value: "Ronaldo",
      },
      {
        key: "striker",
        value: "Messi",
      },
    ]);
  });
  test("Successfully handle a collision within the hashtable", () => {
    let hash = hashtable.hash("Hello World!");
    expect(hash).toBeLessThan(101); // 101 is the hard coded length of the array :(
  });
});
