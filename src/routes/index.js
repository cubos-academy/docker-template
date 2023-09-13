const express = require('express');
const TodoRoutes = require('./todoRoutes');

class ApiRouter {
  constructor(database) {
    this.router = express.Router();
    this.todoRoutes = new TodoRoutes(database);

    this.router.get('/', this.handleRoot);
    this.router.use('/todos', this.todoRoutes.getRouter());
  }

  handleRoot(req, res) {
    res.send('RestAPI');
  }

  getRouter() {
    return this.router;
  }
}

module.exports = ApiRouter;
