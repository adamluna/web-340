/*
==========================================
; Title: luna-exercise6.3.js
; Author: Adam Luna
; Date: 14 February 2021
; Description: This program demonstrates how to connect to Mongoose.
; ========================================
*/

var mongoose = require("mongoose");
var http = require("http");
var express = require("express");
var logger = require("morgan");

var mongoDB = "mongodb+srv://admin:thisisapassword@buwebdev-cluster-1.j3npe.mongodb.net/test";

mongoose.connect(mongoDB, {
  useMongoClient: true,
});

mongoose.Promise = global.Promise;

var db = mongoose.connection;

db.on("error", console.error.bind(console, "MongoDB connected error: "));

db.once("open", function () {
  console.log("Application connected to mLab MongoDB instance");
});

// Initialize Application
var app = express();
app.use(logger("short"));

// Create Server
http.createServer(app).listen(8080, function(){
    console.log("Application connected to port 8080.");
});