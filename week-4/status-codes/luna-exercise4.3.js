/*
============================================
; Title:  luna-exercise4.3.js
; Author: Professor Krasso
; Date:   31 February 2021
; Description: This program demonstrates how to set status codes in Node.js.
;===========================================
*/

// Import required libraries
var express = require("express");
var http = require("http");

// Initialize app
var app = express();

// Create GET request
app.get("/not-found", function (request, response) {
  response.status(404);
// Return response for 404 status code
  response.json({
    error: "Found, the resource is not.",
  });
});

// Create GET request
app.get("/ok", function (request, response) {
  response.status(200);
// Return response for 200 status code
  response.json({
    message: "Correctly, the page was loaded.",
  });
});

// Create GET request
app.get("/not-implemented", function (request, response) {
  response.status(501);
// Return response for 501 status code
  response.json({
    error: "Implemented, the page was not.",
  });
});

// Create server and listen on port 8080
http.createServer(app).listen(8080, function () {
  console.log("Application started on port 8080!");
});
