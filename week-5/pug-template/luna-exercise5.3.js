/*
==========================================
; Title: luna-exercise5.3.js
; Author: Adam Luna
; Date: 07 February 2021
; Description: This program demonstrates how to use pug templates.
; ========================================
*/

var express = require("express");
var http = require("http");
var pug = require("pug");
var path = require("path");

var app = express();

app.set("views", path.resolve(__dirname, "views"));

app.set("view engine", "pug");

app.get("/", function (request, response) {
  response.render("index", {
    message: "What in the pug is going on?!",
  });
});

http.createServer(app).listen(8080, function () {
  console.log("Application started on port 8080!");
});
