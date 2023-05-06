//server
const express = require('express');
const PORT = process.env.PORT || 3000;
const app = express();
const api = require('./api');

const bodyParser = require('body-parser');
app.use(bodyParser.json());

app.use('/',api);

app.listen(PORT, ()=>{
    console.log(`Server is listening on ${PORT}`);
  });