/*
============================================
; Title:  luna-exercise1.3.js
; Author: Professor Krasso
; Date:   10 January 2021
; Modified by: Adam Luna
; Description: Demonstrates how to parse a Node.js URL
;===========================================
*/
const url = require("url");

const parsedURL = url.parse("https://www.example.com/profile?name=luna");

console.log(parsedURL.protocol);
console.log(parsedURL.host);
console.log(parsedURL.query);