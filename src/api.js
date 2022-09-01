const express = require('express');
require('express-async-errors');

const controller = require('./controllers');
const middleware = require('./middlewares');

const app = express();

app.use(express.json());

app.post('/login', middleware.validateLogin, controller.login);

app.post('/user', middleware.validateUser, controller.createUser);

app.use(middleware.validateToken);

app.get('/user', controller.getAllUsers);
app.get('/user/:id', controller.getUserById);

app.post('/categories', middleware.validateCategory, controller.createCategory);
app.get('/categories', controller.getAllCategories);

app.post('/post', middleware.validatePost, controller.createPost);
app.get('/post', controller.getAllPosts);
app.get('/post/:id', controller.getPostById);

app.use(middleware.error);

// É importante exportar a constante `app`,
// para que possa ser utilizada pelo arquivo `src/server.js`
module.exports = app;
