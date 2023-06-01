const { Todo } = require("../model/todo");

// everything relating to creating a todo
const createTodo = async (req, res) => {
  try {
    // getting the request object
    const body = req.body;

    // handling errors
    if (!body.text) {
      error = "DATA_ERROR";
      res.status(400).json({
        status: false,
        message: "Please provide the text",
        error: error,
      });
      return;
    }

    // making the text case insensitive
    body.text = body.text.toLowerCase().trim();

    const newTodo = await Todo.create(body);
    res.status(200).json({
      status: true,
      message: "Created successfully",
      data: newTodo,
    });
    return;
  } catch (error) {
    console.log(error);
    error = "UNKNOWN_ERROR";
    res.status(500).json({
      status: false,
      message: "You've got some errors",
      error: error,
    });
    return;
  }
};

// Everything relating to getting all todo
const getAllTodo = async (req, res) => {
  try {
    const allTodo = await Todo.find({}).sort({ createdAt: -1 });
    res.status(200).json({
      status: true,
      message: "All todos retrieved successfully",
      data: allTodo,
    });
  } catch (error) {
    console.log(error);
    const errorMessage = "UNKNOWN_ERROR";
    res.status(500).json({
      status: false,
      message: "An error occurred",
      error: errorMessage,
    });
  }
};

// Everything relating to deleting a task
const deleteTodo = async (req, res) => {
  try {
    // getting the request object
    const params = req.params;

    // handling errors in the form data
    if (!params.id) {
      error = "DATA_ERROR";
      res.status(400).json({
        status: false,
        message: "Please from the task to delete",
        error: error,
      });
      return;
    }

    // query the databse for the task

    const exist = await Todo.findById(params.id);

    // handling error if thee todo doesn't exist
    if (!exist) {
      error = "EXISTENCE_ERROR";
      res.status(400).json({
        status: false,
        message: "This doesn't exist ",
        error: error,
      });
      return;
    }

    await Todo.findByIdAndDelete(params.id);

    res.status(200).json({
      status: true,
      message: "Deleted successfully",
    });
    return;
    // deleting the task from the database
  } catch (error) {
    console.log(error);
    error = "UNKNOWN_ERROR";
    res.status(500).json({
      status: false,
      message: "You've got some errors",
      error: error,
    });
  }
  return;
};

// Everything relating to delete all
const deleteAllTodo = async (req, res) => {
  try {
    res.send("you can now delete all");
  } catch (error) {
    console.log(error);
    error = "UNKNOWN_ERROR";
    res.status(500).json({
      status: false,
      message: "You've got some errors",
      error: error,
    });
  }
  return;
};

// Everything relating to deleting a task
const editTodo = async (req, res) => {
  try {
    res.send("you can now edit");
  } catch (error) {
    console.log(error);
    error = "UNKNOWN_ERROR";
    res.status(500).json({
      status: false,
      message: "You've got some errors",
      error: error,
    });
  }
  return;
};

module.exports = {
  createTodo,
  getAllTodo,
  deleteTodo,
  deleteAllTodo,
  editTodo,
};
