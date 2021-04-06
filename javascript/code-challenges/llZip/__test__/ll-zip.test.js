"use strict";
const { LinkedList } = require("../../../linked-list/index.js");
const zipList = require("../ll-zip.js");
describe("testing zip linked list", () => {
  test("Happy Path alternate list", () => {
    let ll1 = new LinkedList();

    ll1.append(1);
    ll1.append(2);
    ll1.append(3);

    let ll2 = new LinkedList();

    ll2.append(4);
    ll2.append(5);
    ll2.append(6);
    ll2.append(7);
    expect(zipList(ll1, ll2).toString()).toEqual(
      "{1} ->{4} ->{2} ->{5} ->{3} ->{6} ->{7} ->NULL"
    );
  });
  test("Expect failed to Zip empty list", () => {
    let ll1 = new LinkedList();

    ll1.append(1);
    ll1.append(2);
    ll1.append(3);

    let ll2 = new LinkedList();

    expect(zipList(ll1, ll2).toString()).toEqual("Failed- Empty list");
  });
  test("alternate list with not same size", () => {
    let ll1 = new LinkedList();

    ll1.append(1);
    ll1.append(2);
    ll1.append(3);

    let ll2 = new LinkedList();

    ll2.append(-1);
    ll2.append(-2);
    expect(zipList(ll1, ll2).toString()).toEqual(
      "{1} ->{-1} ->{2} ->{-2} ->{3} ->NULL"
    );
  });
});
