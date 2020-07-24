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

baseRouter.get('/create', (request, response, next) => {
  response.render('celebrities/create');
});
baseRouter.post('/create', (request, response, next) => {
  Celebrity.create({
    name: request.body.name,
    occupation: request.body.occupation,
    catchPhrase: request.body.catchPhrase
  })
    .then(celebrities => {
      response.redirect('/');
    })
    .catch(error => {
      next(error);
    });
});

baseRouter.post('/');

module.exports = baseRouter;
