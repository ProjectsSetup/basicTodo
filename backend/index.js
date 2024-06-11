//write basic express boilerplate code
//with express.json() middleware

const express = require("express");
const jsonwebtoken = require("jsonwebtoken");


const app = express();

app.use(express.json());

app.post("/todo", function(req, res) {

})

app.get("/todos", function(req, res) {

})

app.put("/completed", function(req, res) {

})

app.delete("/todo", function(req, res) {

})