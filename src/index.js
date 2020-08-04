require('dotenv').config();
const express = require('express');
const app = express();
const routes = require('./routes');
const {setHeader} = require('./middlewares/header');
const PORT = process.env.PORT || 3000;
app.use(express.json());

// app.use(setHeader);
app.use('/', setHeader, routes);

app.listen(PORT, () => {
    console.log(`server listening on port ${PORT}`);
});
