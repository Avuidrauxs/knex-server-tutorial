const knex = require('knex')({
  client: '<DB CLIENT>',
  connection: {
    host : '<SERVER LOCALHOST>',
    user : '<DB_Username>',
    password : 'DB_password',
    database : '<DB_NAME>'
  }
});


module.exports = knex;
