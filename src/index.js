const express = require('express');
require('dotenv').config();
const app = express();
const routes = require('./routes');
const {setHeader} = require('./middlewares/header');
app.use(express.json());

// app.use(setHeader);
app.use('/', setHeader, routes);

app.listen(3000, () => {
    console.log('server listening on port 3000');
  });
