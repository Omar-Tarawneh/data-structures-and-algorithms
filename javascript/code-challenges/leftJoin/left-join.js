"use strict";

const leftJoin = (table1, table2) => {
  let output = [];
  for (let i = 0; i < table1.keys.length; i++) {
    if (table2.contains(table1.keys[i])) {
      let key = table1.keys[i];
      output[output.length] = [
        table1.keys[i],
        table1.get(key).value,
        table2.get(key).value,
      ];
    } else {
      let key = table1.keys[i];
      output[output.length] = [table1.keys[i], table1.get(key).value, "Null"];
    }
  }
  return output;
};

module.exports = leftJoin;
