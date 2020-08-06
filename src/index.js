require('dotenv').config();
const express = require('express');
const helmet = require('helmet');
const morgan = require('morgan');
const cors = require('cors');
const app = express();
const routes = require('./routes');
// const {setHeader} = require('./middlewares/header');
const PORT = process.env.PORT || 3000;
app.use(express.json());

app.use('/', routes);

app.use(cors());
app.use(helmet());
app.use(morgan('tiny'));

app.listen(PORT, () => {
    console.log(`server listening on port ${PORT}`);
});


