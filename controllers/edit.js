const Todo = require('../models/Todo');

module.exports = {
  getItems: async (req, res) => {
    try {
      const idParam = req.params.id;
      const todoItems = await Todo.find();
      res.render('edit.ejs', { todos: todoItems, query: idParam });
    } catch (error) {
      console.log(error);
    }
  },

  updateItem: async (req, res) => {
    try {
      await Todo.findOneAndUpdate(
        { _id: req.body.idFromJSFile },
        { todo: req.body.textFromJSFile }
      );
      res.json('Todo Updated!');
    } catch (error) {
      console.log(error);
    }
  },
};
