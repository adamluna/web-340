/*
==========================================
; Title: luna-assignment1.5.js
; Author: Professor Krasso
; Date: 10 January 2021
; Modified by: Adam Luna
; Description: Creating a Node.js server
; ========================================
*/

var http = require("http");

function processRequest(req, res) {
    var body = "Hi, my name is Adam!";
    var contentLength = body.length;

    res.writeHead(200, {
        "Content-Length": contentLength,
        "Content-Type": "text/plain",
    });
    res.end(body);
}

var s = http.createServer(processRequest);
s.listen(8080);