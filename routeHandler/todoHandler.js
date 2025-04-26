const express = require("express");
const mongoose = require("mongoose");
const router = express.Router();
const todoSchema = require("../schemas/todoSchemas");

// Create the Todo model
const Todo = mongoose.model("Todo", todoSchema);

// GET ALL TODOS
router.get("/", async (req, res) => {
  try {
    const todos = await Todo.find({ status: "active" })
      .select({ _id: 0, __v: 0, date: 0 }) // Exclude fields
      .limit(2);
    res.status(200).json({
      result: todos,
      message: "Success",
    });
  } catch (err) {
    res.status(500).json({ error: "There was a server-side error!" });
  }
});

// GET A TODO BY ID
router.get("/:id", async (req, res) => {
  try {
    const todo = await Todo.findById(req.params.id);
    if (todo) {
      res.status(200).json({
        result: todo,
        message: "Success",
      });
    } else {
      res.status(404).json({ error: "Todo not found!" });
    }
  } catch (err) {
    res.status(500).json({ error: "There was a server-side error!" });
  }
});

// POST A TODO
router.post("/", async (req, res) => {
  try {
    const newTodo = new Todo(req.body);
    const savedTodo = await newTodo.save();
    res.status(201).json({
      message: "Todo was inserted successfully!",
      data: savedTodo,
    });
  } catch (err) {
    res.status(500).json({ error: "There was a server-side error!" });
  }
});

// POST MULTIPLE TODOS
router.post("/all", async (req, res) => {
  try {
    const todos = await Todo.insertMany(req.body);
    res.status(201).json({
      message: "Todos were inserted successfully!",
      data: todos,
    });
  } catch (err) {
    res.status(500).json({ error: "There was a server-side error!" });
  }
});

// PUT (UPDATE) A TODO BY ID
router.put("/:id", async (req, res) => {
  try {
    const updatedTodo = await Todo.findByIdAndUpdate(
      { _id: req.params.id },
      {
        $set: {
          title: "Next JS",
        },
      },
      {
        new: true,
      }
    );

    if (updatedTodo) {
      res.status(200).json({
        message: "Todo was updated successfully!",
        data: updatedTodo,
      });
    } else {
      res.status(404).json({ error: "Todo not found!" });
    }
  } catch (err) {
    res.status(500).json({ error: "There was a server-side error!" });
  }
});

// DELETE A TODO BY ID
router.delete("/:id", async (req, res) => {
  try {
    const deletedTodo = await Todo.findByIdAndDelete(req.params.id);

    if (deletedTodo) {
      res.status(200).json({
        message: "Todo was deleted successfully!",
        data: deletedTodo,
      });
    } else {
      res.status(404).json({ error: "Todo not found!" });
    }
  } catch (err) {
    res.status(500).json({ error: "There was a server-side error!" });
  }
});

module.exports = router;
