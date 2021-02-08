/*
==========================================
; Title: luna-exercise5.2.js
; Author: Adam Luna
; Date: 07 February 2021
; Description: This demonstrates the EJS if-else-render operations.
; ========================================
*/

var express = require("express");
var http = require("http");
var path = require("path");

app = express();

app.set("views", path.resolve(__dirname, "views"));

app.set("view engine", "ejs");

var names = [

  "Jamie",

  "Tyler",

  "John",

  "Miro"

];


app.get("/", function(request, response) {

    response.render("index", {

        names: names

    })

});

http.createServer(app).listen(8080, function() {

    console.log("Application started on port 8080!");

});