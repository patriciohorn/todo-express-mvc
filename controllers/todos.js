// Brings the Todo model to our file
const Todo = require('../models/Todo');

// Controller
// The controller uses the Todo model to interact with the DB
module.exports = {
  getTodos: async (req, res) => {
    try {
      const todosItems = await Todo.find();
      const itemsLeft = await Todo.countDocuments({
        completed: false,
      });

      res.render('todos.ejs', { todos: todosItems, left: itemsLeft });
    } catch (error) {
      console.log(error);
    }
  },

  createTodo: async (req, res) => {
    try {
      await Todo.create({
        todo: req.body.todoItem,
        completed: false,
      });
      console.log('Todo has been added!');
      res.redirect('/todos');
    } catch (error) {
      console.log(error);
    }
  },

  deleteTodo: async (req, res) => {
    console.log(req.body.todoIdFromJSFile);
    try {
      const deletedItem = await Todo.findOneAndDelete({
        _id: req.body.todoIdFromJSFile,
      });
      console.log('Deleted todo:', deletedItem);
      res.json('Todo deleted');
    } catch (error) {
      console.log(error);
    }
    // res.json('Delted Todo');
  },
};
