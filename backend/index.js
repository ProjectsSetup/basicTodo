//write basic express boilerplate code
//with express.json() middleware

const express = require("express");
const jsonwebtoken = require("jsonwebtoken");
const { createTodo, updateTodo } = require("./types");


const app = express();

app.use(express.json());

//post endpoint to add a todo after validating inputs given using zod
app.post("/todo", function(req, res) {
    const createPayload = req.body;
    const parsedPayload = createTodo.safeParse(createPayload);
    if(!parsedPayload.success) {
        res.status(411).json({
            msg: "The inputs given are incorrect",
        })
        return;
    }
})

//get endpoint to get todos after authenticating user
app.get("/todos", function(req, res) {
    
})

//endpoint to complete a todo after validating inputs given using zod libaray
app.put("/completed", function(req, res) {
    const updatePayload = req.body;
    const parsedPayload = updateTodo.safeParse(updatePayload);
    if(!parsedPayload.success) {
        res.status(411).json({
            msg: "The inputs given are incorrect",
        })
        return;
    }
    //add mongodb code to handle inputs here
})

//endpoint to delete a todo after authorizing the user
app.delete("/todo", function(req, res) {

})