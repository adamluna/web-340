/*
============================================
; Title:  luna-exercise7.3.js
; Author: Professor Krasso
; Date:   21 February 2021
; Modified by: Adam Luna
; Description: This program demonstrates how to write a Chai test.
;===========================================
*/

// Import function
var fruits = require("../luna-fruits");

// Import chai and assert
var chai = require("chai");
var assert = chai.assert;

// Test the imported function
describe("fruits", function () {
  it("should return an array of fruits", function () {
    var f = fruits("Apple,Orange,Mango");

    assert(Array.isArray(f));
  });
});
