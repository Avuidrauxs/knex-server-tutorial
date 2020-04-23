const { todo } = require('../models');

const TodoService = {
  fetchAllTodos: async (req, res) => {
    const todos = await todo.getAllTodos();
    return res.status(200).json(todos);
  },
  createTodo: async (req, res) => {
    const {name} = req.body;

    const newTodo = await todo.createTodo({name});

    return res.status(201).json(`Todo with title ${name} have been created`);
  }
}

module.exports = TodoService;
