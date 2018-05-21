require('dotenv').config();
const express = require('express');
const bodyParser = require('body-parser');
const morgan = require('morgan');

const PORT = process.env.PORT || 8888;
const routes = require('./routes');

const app = express();

app.use(morgan('dev'));
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use((req, res, next) => {
  res.header('access-control-allow-origin', '*');
  res.header('access-control-allow-methods', 'GET');
  next();
});
app.use('/api', routes);

app.listen(PORT, () => console.log(`Listening on port ${PORT}...`));
