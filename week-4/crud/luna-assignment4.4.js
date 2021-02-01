/*
============================================
; Title:  luna-assignment4.4.js
; Author: Professor Krasso
; Date:   31 February 2021
: Modified by: Adam Luna
; Description: Demonstrates CRUD operations in a
;              Node.js API.
;===========================================
*/

// Import required libraries
var express = require("express");
var http = require("http");

// Initialize app
var app = express();

// Create GET request
app.get("/", function (request, response) {
  response.send("API invoked as an HTTP GET request.");
});

// Create PUT request
app.put("/", function (request, response) {
  response.send("API invoked as an HTTP PUT request.");
});

// Create POST request
app.post("/", function (request, response) {
  response.send("API invoked as an HTTP POST request");
});

// Create DELETE request
app.delete("/", function (request, response) {
  response.send("API invoked as an HTTP DELETE request");
});

// Create server and listen on port 8080
http.createServer(app).listen(8080, function () {
  console.log("Application started on port 8080!");
});
