/*
============================================
; Title:  luna-exercise2.2.js
; Author: Professor Massoud
; Date:   17 January 2021
; Modified By: Adam Luna
; Description: Hello World using Express.js
;===========================================
*/

//Require Express
let express = require("express");
//Require http
let http = require("http");

//Assign express to the app variable
let app = express();

//Create app and print the results.
app.use(function (request, response) {
  console.log("In comes a request to: " + request.url);
  response.end("Hello World");
});

//Create and listen for server on port 8080.
http.createServer(app).listen(8080);
