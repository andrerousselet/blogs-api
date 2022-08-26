const express = require('express');
require('express-async-errors');

const controller = require('./controllers');
const middleware = require('./middlewares');

const app = express();

app.use(express.json());

app.post('/login', middleware.validateLogin, controller.login);
app.post('/user', middleware.validateUser, controller.create);

app.use(middleware.error);

// É importante exportar a constante `app`,
// para que possa ser utilizada pelo arquivo `src/server.js`
module.exports = app;
