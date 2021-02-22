/*
============================================
; Title:  employee.js
; Author: Professor Krasso
; Date:   21 February 2021
; Modified by: Adam Luna
; Description: Employee model file.
;===========================================
*/

// Require statements
const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// Employee Schema
let EmployeeSchema = new Schema({
  firstName: {type: String, required: true },
  lastName: {type: String, required: true }
});

// Export the model so its publicly available.
module.exports = mongoose.model('Employee', EmployeeSchema);