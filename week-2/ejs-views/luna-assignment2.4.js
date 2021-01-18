/*
============================================
; Title:  luna-assignment2.4.js
; Author: Professor Massoud
; Date:   17 January 2021
; Modified By: Adam Luna
; Description: EJS Views
;===========================================
*/

var http = require("http");

var express = require("express");

var path = require("path");

var app = express();

//Tell Express the views are in the 'views' directory
app.set("views", path.resolve(__dirname, "views"));

//Tell Express to use the EJS view engine
app.set("view engine", "ejs");

app.get("/", function (request, response) {
  response.render("index", {
    firstName: "Adam",
    lastName: "Luna",
    address: "17655 My Street",
  });
});

http.createServer(app).listen(8080, function () {
  console.log("EJS-Views app started on port 8080.");
});
