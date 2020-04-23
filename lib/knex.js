const knex = require('knex')({
  client: 'pg',
  connection: {
    host : '127.0.0.1',
    user : 'Avuidrauxs',
    password : '',
    database : 'chanda_todo'
  }
});


module.exports = knex;
