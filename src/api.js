const express = require('express');
require('express-async-errors');

const controller = require('./controllers');
const middleware = require('./middlewares');

const app = express();

app.use(express.json());

app.post('/login', middleware.validateLogin, controller.login);

app.post('/user', middleware.validateUser, controller.createUser);

/* 
app.use(middleware.validateToken);

Aplicação funciona desta forma, sem precisar repetir em todo endpoint o validateToken,
mas por algum motivo os testes não rodam ↓: 
  Error: Timed out waiting for: http://localhost:3030
    at /app/node_modules/wait-on/lib/wait-on.js:132:31
    at doInnerSub (/app/node_modules/wait-on/node_modules/rxjs/dist/cjs/internal/operators/mergeInternals.js:22:31)
    at outerNext (/app/node_modules/wait-on/node_modules/rxjs/dist/cjs/internal/operators/mergeInternals.js:17:70)
    at OperatorSubscriber._this._next (/app/node_modules/wait-on/node_modules/rxjs/dist/cjs/internal/operators/OperatorSubscriber.js:33:21)
    at OperatorSubscriber.Subscriber.next (/app/node_modules/wait-on/node_modules/rxjs/dist/cjs/internal/Subscriber.js:51:18)
    at AsyncAction.work (/app/node_modules/wait-on/node_modules/rxjs/dist/cjs/internal/observable/timer.js:28:28)
    at AsyncAction._execute (/app/node_modules/wait-on/node_modules/rxjs/dist/cjs/internal/scheduler/AsyncAction.js:76:18)
    at AsyncAction.execute (/app/node_modules/wait-on/node_modules/rxjs/dist/cjs/internal/scheduler/AsyncAction.js:64:26)
    at AsyncScheduler.flush (/app/node_modules/wait-on/node_modules/rxjs/dist/cjs/internal/scheduler/AsyncScheduler.js:39:33)
    at listOnTimeout (node:internal/timers:559:17)
*/

app.get('/user', middleware.validateToken, controller.getAllUsers);
app.get('/user/:id', middleware.validateToken, controller.getUserById);

app.post('/categories', 
  middleware.validateToken,
  middleware.validateCategory,
  controller.createCategory);
app.get('/categories', middleware.validateToken, controller.getAllCategories);

app.post('/post', middleware.validateToken, middleware.validatePost, controller.createPost);
app.get('/post', middleware.validateToken, controller.getAllPosts);
app.get('/post/:id', middleware.validateToken, controller.getPostById);
app.put('/post/:id',
  middleware.validateToken,
  middleware.validatePostUpdate,
  controller.updatePost);

app.use(middleware.error);

// É importante exportar a constante `app`,
// para que possa ser utilizada pelo arquivo `src/server.js`
module.exports = app;
