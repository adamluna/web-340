/*
============================================
; Title:  luna-exercise2.3.js
; Author: Professor Massoud
; Date:   17 January 2021
; Modified By: Adam Luna
; Description: Routes in Express.js
;===========================================
*/

let express = require("express");

let http = require("http");

let app = express();

app.get("/", function (request, response) {
  response.end("Welcome to the homepage!");
});

app.get("/about", function (request, response) {
  response.end("Welcome to the about page!");
});

app.get("/contact", function (request, response) {
  response.end("Welcome to the contact page!");
});

app.use(function (request, response) {
  response.statusCode = 404;

  response.end("404!");
});

http.createServer(app).listen(8080);
