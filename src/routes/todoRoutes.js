const express = require('express');
const TodoController = require('../controllers/todoController');

class TodoRouter {
  constructor(database) {
    this.router = express.Router();
    this.todoController = new TodoController(database);

    this.router.get('/', this.todoController.getAllTodos.bind(this.todoController));
    this.router.get('/:id', this.todoController.getTodoById.bind(this.todoController));
    this.router.post('/', this.todoController.createTodo.bind(this.todoController));
    this.router.put('/:id', this.todoController.updateTodo.bind(this.todoController));
    this.router.delete('/:id', this.todoController.deleteTodo.bind(this.todoController));
  }

  getRouter() {
    return this.router;
  }
}

module.exports = TodoRouter;
