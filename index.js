const express = require('express');
const bodyParser = require('body-parser');
const routes = require('./routes');

const app = express();
const port = 4000;

app.use(bodyParser.json({limit : '50mb'}));
app.use(bodyParser.urlencoded({extended : true}));

app.get('/', (req, res) => {
  res.send('Our server works');
})

// Setup routes here
app.use(routes);


app.listen(port, () => {
  console.log('Our server is listening on  ', port);
})
