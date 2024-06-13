// schema should be like
/*
    Todo {
        title: String;
        description: String;
        completed: Boolean;
    }
*/

const mongoose = require("mongoose");

//mongodb url to connect to the database is below, which is not supposed to be used as it is should be in .env not not committed to github as well.
//mongodb+srv://kushallalpuria:Kushal%40temp23@cluster0.glqsuao.mongodb.net/todos

mongoose.connect("mongodb+srv://kushallalpuria:Kushal%40temp23@cluster0.glqsuao.mongodb.net/todos")
const todoSchema = mongoose.Schema({
    title: String,
    description: String,
    completed: Boolean
})

const todo = mongoose.model('todos', todoSchema);
module.exports = {
    todo
}