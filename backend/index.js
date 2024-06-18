//write basic express boilerplate code
//with express.json() middleware
//importing dependencies for the appication
const express = require("express");
const jsonwebtoken = require("jsonwebtoken");
const { createTodo, updateTodo } = require("./types");
const { todo } = require("./db");


const app = express();

app.use(express.json());

//post endpoint to add a todo after validating inputs given using zod
app.post("/todo", async function(req, res) {
    const createPayload = req.body;
    const parsedPayload = createTodo.safeParse(createPayload);
    if(!parsedPayload.success) {
        res.status(411).json({
            msg: "The inputs given are incorrect",
        })
        return;
    }

    //add it in the mongodb database in a try catch block
    try {
        //wait for the database call and todo creation before responding to the user
        await todo.create({
            title: createPayload.title,
            description: createPayload.description,
            completed: false
        })
        res,json({
            msg: "Todo created"
        })
    } catch (error) {
        //response sent back to the user in case an error occured while creating a todo
        res.json({
            msg: "error occured, process not completed"
        })
    }
    
    
})

//get endpoint to get todos for the user
app.get("/todos", async function(req, res) {
    const todos = await todo.find({});
    //send back the todos to the user
    res.json({
        todos
    })
    
})

//endpoint to complete a todo after validating inputs given using zod libaray
app.put("/completed", async function(req, res) {
    const updatePayload = req.body;
    const parsedPayload = updateTodo.safeParse(updatePayload);
    if(!parsedPayload.success) {
        res.status(411).json({
            msg: "The inputs given are incorrect",
        })
        return;
    }
    // now handling the database to make the todo as completed 
    await todo.update({
        _id: req.body.id
    }, {
        completed: true
    })
    res.json({
        msg: "Todo marked as Completed"
    })
})

//endpoint to delete a todo after authorizing the user
app.delete("/todo", function(req, res) {
    
})