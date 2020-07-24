const express = require('express');
const Router = express.Router;

const Celebrity = require('./../models/celebrity');
const baseRouter = new Router();

baseRouter.get('/', (request, response, next) => {
  Celebrity.find()
    .then(celebrities => {
      response.render('celebrities/index', { celebrities });
    })
    .catch(error => {
      next(error);
    });
});

baseRouter.get('/show/:id', (request, response, next) => {
  const id = request.params.id;
  Celebrity.findById(id)
    .then(celebrity => {
      response.render('celebrities/show', { celebrity: celebrity });
    })
    .catch(error => {
      next(error);
    });
});

baseRouter.post('/');

module.exports = baseRouter;
