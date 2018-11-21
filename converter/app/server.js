// use express framework to create a web API
var express = require("express");
var app = express();
// include colour converter implementation
var converter = require("./converter");

// define routes for API
app.get("/rgbToHex", function(req, res) {
    var red   = parseInt(req.query.red, 10);
    var green = parseInt(req.query.green, 10);
    var blue  = parseInt(req.query.blue, 10);

    var hex = converter.rgbToHex(red, green, blue);

    res.send(hex);
});

app.get("/hexToRgb", function(req, res) {
    var hex = req.query.hex;
    var rgb = converter.hexToRgb(hex);

    res.send(JSON.stringify(rgb));
});

// runs a web server on provided port
app.listen(3000);