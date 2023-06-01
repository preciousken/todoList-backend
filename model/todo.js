const mongoose = require("mongoose");
const todoSchema = new mongoose.Schema(
  {
    text: {
      type: String,
      required: true,
    },
  },
  { timestamps: true }
);
const Todo = new mongoose.model("todo", todoSchema);
module.exports = { Todo };
