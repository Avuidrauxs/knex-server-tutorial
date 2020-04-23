const express = require('express');

const { todoService } = require('../services');


const router = express.Router();


router.get('/todo', todoService.fetchAllTodos);


module.exports = router;
