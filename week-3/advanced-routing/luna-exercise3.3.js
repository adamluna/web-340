/*
===============================================
; Title: luna-exercise3.3.js
; Author: Professor Massoud
; Date: 24 January 2021
; Modified By: Adam Luna
; Description: This program shows how to use advanced routing.
===============================================
*/

var express = require("express");
var http = require("http");
var path = require("path");
var logger = require("morgan");

var app = express();

app.set("views", path.resolve(__dirname, "views"));
app.set("view engine", "ejs");
app.use(logger("short"));

app.get("/:employeeId", function (request, response) {
  let employeeId = parseInt(request.params.employeeId, 10);
  response.render("index", {
    employeeId: employeeId
  });
});

http.createServer(app).listen(8080, function () {
  console.log("Application started on port 8080");
});
