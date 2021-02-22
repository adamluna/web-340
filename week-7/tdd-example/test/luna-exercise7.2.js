/*
============================================
; Title:  luna-exercise7.2.js
; Author: Professor Krasso
; Date:   21 February 2021
; Modified by: Adam Luna
; Description: This program demonstrates how to write and run a TDD test case.
;===========================================
*/

var assert = require("assert");

describe("String#split", function () {
  it("should return an array of fruits", function () {
    assert(Array.isArray("Apple,Orange,Mango".split(",")));
  });
});
