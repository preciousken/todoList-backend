const express = require("express");
const mongoose = require("mongoose");
const {
  createTodo,
  getAllTodo,
  deleteTodo,
  editTodo,
  deleteAllTodo,
} = require("../controller/todo");
const taskRouter = express.Router();

// everything relating to creating a task
taskRouter.post("/create", createTodo);

// get all todo
taskRouter.get("/getall", getAllTodo);

// delete todo
taskRouter.delete("/delete/:id", deleteTodo);

// delete all todo;
taskRouter.delete("/delete/:id", deleteAllTodo);

// edit todo
taskRouter.patch("/edit/:id", editTodo);

module.exports = { taskRouter };
