const express = require("express");
const cors = require("cors");
const { taskRouter } = require("./routes/todo");
const mongoose = require("mongoose");
const app = express();
require("dotenv").config();

app.get("/", (req, res) => {
  res.json({
    status: true,
    message: "Api is fully functional",
  });
});

// IMporting the required middlewares
app.use(express.json());
app.use(require("cors")());

const DBUri = process.env.MONGO_URI;
mongoose.connect(DBUri, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

// Everything relating to the todo component
app.use("/todo", taskRouter);

port = 5000;

app.listen(port, () => {
  console.log("app listening on port " + port);
});
