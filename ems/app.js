/*
==========================================
; Title: app.js
; Author: Adam Luna
; Date: 14 February 2021
; Description: This program is the UI development for EMS milestones 1 & 2.
; ========================================
*/

var express = require("express");
var http = require("http");
var path = require("path");
var helmet = require('helmet');
var logger = require("morgan");
var mongoose=require("mongoose");
var Employee = require("./models/employee");
var Schema = mongoose.Schema;

// Connect to MongoDB
var mongoDB = "mongodb+srv://admin:thisisapassword@buwebdev-cluster-1.j3npe.mongodb.net/test";
mongoose.connect(mongoDB, {
    useMongoClient: true
});

mongoose.Promise = global.Promise;

var db = mongoose.connection;
db.on("error", console.error.bind(console, "MongoDB connection error: "));
db.once("open", function() {
    console.log("Application connected to mLab MongoDB instance");
});


// Initialize App
var app = express();

app.set("views", path.resolve(__dirname, "views"));

app.set("view engine", "ejs");

app.use(logger("short"));

app.use(helmet.xssFilter());

app.use(express.static(__dirname + "/public"));

app.get("/", function (request, response) {
  response.render("index", {
    message: "Employee Management System",
  });
});

app.get("/view", function (request, response) {
  response.render("view", {
    message: "Manage Employees",
  });
});

app.get("/new", function (request, response) {
    response.render("new", {
      message: "Add Employees",
    });
  });

app.get("/list", function (request, response) {
  response.render("list", {
    message: "View Employees",
  });
});

http.createServer(app).listen(8080, function () {
  console.log("Application started on port 8080!");
});
