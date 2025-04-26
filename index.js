// @import files or packages
const express = require("express");
const mongoose = require("mongoose");
const todoHandler = require("./routeHandler/todoHandler");

// express app initialization
const app = express();
app.use(express.json());

// database connection with mongoose
mongoose
  .connect("mongodb://127.0.0.1:27017/todos")
  .then(() => console.log("Connection Successful!"))
  .catch((err) => console.error("Database Connection Error:", err));

// application routes
app.use("/todo", todoHandler);

// default error handler
function errorHandler(err, req, res, next) {
  if (res.headersSent) {
    return next(err);
  }
  res.status(500).json({ error: err.message || "Something went wrong!" });
}

// use the error handler middleware
app.use(errorHandler);

// start server
const PORT = 3000;
app.listen(PORT, () => {
  console.log(`App listening at port: ${PORT}`);
});
