"use strict";

const multiBracketValidation = require("../multi-bracket-validation.js");

describe("Multi Bracket Valdation", () => {
  it("should return false when there is only one bracket unclosed ", () => {
    expect(multiBracketValidation("()[]]")).toBeFalsy();
  });
  it("should return true when all the brackets are closed", () => {
    expect(multiBracketValidation("()[[Extra Characters]]")).toBeTruthy();
  });
  it("should return true when all the brackets are closed", () => {
    expect(multiBracketValidation("{}{Code}[Fellows](())")).toBeTruthy();
  });
  it("Edge Case were all the brackets are open:", () => {
    expect(multiBracketValidation("{[(((({")).toBeFalsy();
  });
});
