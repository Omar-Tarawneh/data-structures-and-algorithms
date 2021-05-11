"use strict";
const leftJoin = require("../left-join.js");
const HashTable = require("../../../hash-table/hashtable.js");

describe("left join of hashmaps // tables", () => {
  let table1, table2;
  beforeAll(() => {
    table1 = new HashTable(5);
    table1.add("fond", "enamored");
    table1.add("wrath", "anger");
    table1.add("diligent", "employed");
    table1.add("outfit", "garb");
    table1.add("guide", "usher");
    // table 1
    /*
    key:    |   value:
    ------- |---------
    fond    |   enamored
    wrath   |   anger
    diligent|  employed
    outfit  |  garb
    guide   |  usher 
  */
    table2 = new HashTable(5);
    table2.add("fond", "averse");
    table2.add("wrath", "delight");
    table2.add("diligent", "idle");
    table2.add("guide", "follow");
    table2.add("flow", "jam");
    // table 2
    /*
    key:    |   value:
    ------- |---------
    fond    |  averse 
    wrath   |  delight 
    diligent|  idle 
    guide   |  follow 
    flow    |  jam
*/
  });
  test("Happy Path, should left join to tables correctly", () => {
    expect(leftJoin(table1, table2)).toEqual([
      ["fond", "enamored", "averse"],
      ["wrath", "anger", "delight"],
      ["diligent", "employed", "idle"],
      ["outfit", "garb", "Null"],
      ["guide", "usher", "follow"],
    ]);
  });
  test("should reutrn empty array if the left -first- table is empty :)", () => {
    let table = new HashTable(5);
    expect(leftJoin(table, table2)).toEqual([]);
  });
  test("all the joined values should be null if the second table is empty", () => {
    let table = new HashTable(5);
    expect(leftJoin(table1, table)).toEqual([
      ["fond", "enamored", "Null"],
      ["wrath", "anger", "Null"],
      ["diligent", "employed", "Null"],
      ["outfit", "garb", "Null"],
      ["guide", "usher", "Null"],
    ]);
  });
});
