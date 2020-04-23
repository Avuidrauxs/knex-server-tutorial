const { db }  = require('../lib');

const Todo = {
  getAllTodos: async () => {
    let todos;
    todos = await db.select().table('todos');
      if(todos) {
        return todos;
      }

  },
  createTodo: async (todo) => {
    let newTodo;
    try {
      newTodo = await db('todos').insert({
        name: todo.name
      });

      if(newTodo) {
        console.log(`Successfully inserted todo with title ${todo.name}`);
      }
      return newTodo;
    } catch(err) {
      console.log(err, 'Creating todo failed');
    }
  },
  editTodo: () => {},
  deleteTodo: () => {}
}

module.exports = Todo;
