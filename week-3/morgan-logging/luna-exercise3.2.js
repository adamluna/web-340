/*
===============================================
; Title: luna-exercise3.2.js
; Author: Professor Massoud
; Date: 24 January 2021
; Modified By: Adam Luna
; Description: This program shows how to use Morgan logging.
===============================================
*/

var express = require("express");
var http = require("http");
var path = require("path");
var logger = require("morgan");

var app = express();

app.set("views", path.resolve(__dirname, "views")); // Tell Express the views are in the 'views' directory
app.set("view engine", "ejs"); // Tell Express to use the EJS view engine

app.use(logger("short"));

app.get("/", function (request, response) {
  response.render("index", {
    message: "Adam's testing the Morgan logger!",
  });
});

http.createServer(app).listen(8080, function () {
  console.log("Application started on port 8080");
});