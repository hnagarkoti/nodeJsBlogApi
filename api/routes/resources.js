let express                             = require('express');
let restify                             = require('express-restify-mongoose');
let _                                   = require('lodash');
let middleware                          = require('../lib/middleware');
let Router                              = express.Router();
let models                              = require('../models');

let commonMiddlewareOptions             = require('./resource-hooks');
let blogsMiddlewareOptions              = require('./resource-hooks/blogs');



let defaultOptions = {
  totalCountHeader: 'total',
  outputFn: ( req, res ) => {
    const data = req.erm;
    res.apiSuccess(data);
  },
  onError: (err, req, res, next) => {
    const statusCode = req.erm.statusCode;
    return middleware.errorHelper(err, res, next)
  }
}

module.exports = (app) => {
  restify.defaults(defaultOptions);

  // User Routes
  restify.serve(Router,  models.User, commonMiddlewareOptions);

  // Blog Routes
  restify.serve(Router, models.Blogs, blogsMiddlewareOptions);

  app.use(Router);
}
