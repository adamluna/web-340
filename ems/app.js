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
var bodyParser = require("body-parser");
var cookieParser = require("cookie-parser");
var csrf = require("csurf");
var Employee = require("./models/employee");
var Schema = mongoose.Schema;

// Add CSRF protection
const csrfProtection = csrf({ cookie: true });

// Connect to MongoDB
var mongoDB = "mongodb+srv://admin:thisisapassword@buwebdev-cluster-1.j3npe.mongodb.net/test";
mongoose.connect(mongoDB, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

mongoose.Promise = global.Promise;

var db = mongoose.connection;
db.on("error", console.error.bind(console, "MongoDB connection error: "));
db.once("open", function() {
    console.log("Application connected to mLab MongoDB instance");
});


// Initialize App
var app = express();

app.set('PORT', process.env.PORT || 8080);

app.set("views", path.resolve(__dirname, "views"));

app.set("view engine", "ejs");

app.use(logger("short"));

app.use(helmet.xssFilter());

app.use(express.static(__dirname + "/public"));

app.use(logger("short"));

app.use(bodyParser.urlencoded({ extended: true }));

app.use(cookieParser());

app.use(csrfProtection);

app.use(function (request, response, next) {
  var token = request.csrfToken();
  response.cookie("XSRF-TOKEN", token);
  response.locals.csrfToken = token;
  next();
});

// Routes

app.set("views", path.resolve(__dirname, "views"));

app.set("view engine", "ejs");

app.set("port", process.env.PORT || 3000);

app.get("/", function (request, response) {
  response.render("index", {
    title: "Home Page",
    message: "XSS Prevention Example",
  });
});

// response for new page
app.get("/new", function (request, response) {
  response.render("new", {
    title: "Add Employee",
  });
});

// response for list page
app.get("/list", function (request, response) {
  Employee.find({}, function (error, employees) {
    if (error) throw error;
    if (employees.length > 0)
      response.render("list", {
        title: "Employee List",
        employees: employees,
      });
  });
});

// post request for form
app.post("/process", function (request, response) {
  if (!request.body.firstName && !request.body.lastName) {
    response.status(400).send("Entries must have a name");
    return;
  }

  // get request form data
  const employeeName = request.body.firstName + request.body.lastName;
  console.log(employeeName);

  // create employee model
  const employee = new Employee({
    firstName: request.body.firstName,
    lastName: request.body.lastName,
  });

  // save
  employee.save(function (err) {
    if (err) {
      console.log(err);
      throw err;
    } else {
      console.log(employeeName + " saved successfully!");
      response.redirect("/");
    }
  });
});

// Display employee's information
app.get("/view/:queryName", function (req, res) {
  var queryName = req.params["queryName"];
  Employee.find({ lastName: queryName }, function (error, employees) {
    if (error) {
      console.log(error);
      throw error;
    } else {
      console.log(employees);

      if (employees.length > 0) {
        res.render("view", {
          title: "Manage",
          employee: employees,
        });
      }
    }
  });
});

// Create server and listen on specified port
http.createServer(app).listen(app.get("port"), function () {
  console.log("Application started on port " + app.get("port"));
});
