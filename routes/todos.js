// Bring express to the file
const express = require('express');
// Creates our mini app
const router = express.Router();
// todosController we are bringing the todosController object to our file
const todosController = require('../controllers/todos');

// When we hear '/todos/' we use the getTodos method from the todosController object
router.get('/', todosController.getTodos);
router.post('/createTodo', todosController.createTodo);
router.put('/markComplete', todosController.markComplete);
router.put('/markIncomplete', todosController.markIncomplete);
router.delete('/deleteTodo', todosController.deleteTodo);

module.exports = router;
