"use strict";

const AnimalShelter = require("../fifo-animal-shelter.js");

describe("Animal Shelter tests", () => {
  it("Happy Path enqueue into the shelter", () => {
    let shelter = new AnimalShelter();
    shelter.enqueue({ type: "dog", name: "jack" });
    expect(shelter.dogs.isEmpty()).toBeFalsy();
  });
  it("Happy Path enqueue multi time into the shelter", () => {
    let shelter = new AnimalShelter();
    shelter.enqueue({ type: "dog", name: "jack" });
    shelter.enqueue({ type: "cat", name: "meshmesh" });
    shelter.enqueue({ type: "dog", name: "belly" });
    expect(shelter.cats.isEmpty()).toBeFalsy();
    expect(shelter.dogs.isEmpty()).toBeFalsy();
  });
  it("Faliur Path dequeue animals other than dogs and cats from shelter", () => {
    let shelter = new AnimalShelter();
    shelter.enqueue({ type: "dog", name: "jack" });
    shelter.enqueue({ type: "cat", name: "meshmesh" });

    expect(shelter.dequeue("camel")).toBeNull();
  });
  it("dequeue should empty animals cats and dogs from the shelter ", () => {
    let shelter = new AnimalShelter();
    shelter.enqueue({ type: "dog", name: "jack" });
    shelter.enqueue({ type: "cat", name: "meshmesh" });
    shelter.dequeue("dog");
    shelter.dequeue("cat");
    expect(shelter.cats.isEmpty()).toBeTruthy();
    expect(shelter.dogs.isEmpty()).toBeTruthy();
  });
});
