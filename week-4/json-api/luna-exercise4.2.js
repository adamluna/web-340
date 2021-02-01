/*
============================================
; Title:  luna-exercise4.2.js
; Author: Professor Krasso
; Date:   31 February 2021
; Description: This program demonstrates how to return JSON from a Node.js server.
;===========================================
*/

// Import required libraries
var express = require("express");
var http = require("http");

// Initialize app
var app = express();

// Create your own get request and return a JSON object
app.get("/user/:id", function (request, response) {
  var id = parseInt(request.params.id, 14);

  response.json({
    firstName: "Jamie",
    lastName: "Benn",
    userId: id,
  });
});
// Create server and listen on port 8080
http.createServer(app).listen(8080, function () {
  console.log("Application started on port 8080");
});
