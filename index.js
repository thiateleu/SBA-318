// console.log("script is running");
const express = require("express");
const bodyParser = require("body-parser");
const app = express();
const PORT = 3000;

// middleware request
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// define the template engine
app.set("view engine", "js");

//
