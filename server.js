let express           = require('express')
let bodyParser        = require('body-parser')
let methodOverride    = require('method-override')
let mongoose          = require('mongoose')
let Promise           = require('bluebird');
let config            = require('./api/config');
let models            = require('./api/models');
let jwt               = require('jsonwebtoken');
let ApiError          = require('./api/lib/apiError');
let middlewares       = require('./api/lib/middleware');
let cors              = require('cors');
let _                 = require('lodash');

let app               = express();
app.use(cors());
let resources         = require('./api/routes/resources');
let routes            = require('./api/routes');

let router            = express.Router()
mongoose.Promise      = Promise;

app.use(bodyParser.json())
app.use(methodOverride())

app.use(express.static('api/public'));

if(!process.env.NODE_ENV){
  process.env.NODE_ENV = "development";
}
var envType = process.env.NODE_ENV;
mongoose.connect(config.database);
app.set('superSecret', config.secret);



app.response.apiSuccess = function( data, message ){
    let out = {
      success: true
    };
    if(Array.isArray(data.result)){
      out['total'] = data.totalCount;
    }

    res = this;
    if( data && data.constructor.name == 'String' ){
        out.message = data;
        out.data = {};
    }
    // else if( data && data.constructor.name == 'Object' ){
    //     out.message = message || 'Success';
    //     out.data = data;
    // }
    else {
        out.message = message || 'Success';
        if(data.result){
          out.data = data.result;
        } else {
          out.data = data;
        }
    }

    if( data && data.$redirect ){
      return this.format({
        html: function(){
          return res.redirect( data.$redirect );
        },
    json: function(){
      return res.json( out );
      }
      });
    }
    return this.json( out );
};


app.response.apiError = function( err ){
  // console.log('inside');
  (process.env.NODE_ENV === 'development') && console.log( err );
    err = ApiError.create( err );
    this.status( err.status || 400 );
    this.json({
    success: false,
    message: err.message,
    data:{},
    errors: err.errors
  });
};

app.use(function(err, req, res, next){
  console.log('in');
  res.apiError(err);
})

app.use(router);
resources(app);
app.use('/api/v1/', routes);

app.get('/api/v1/popular/posts', function(req, res){
  console.log('coming');
  models.Blogs.find().sort({'createdAt': -1}).limit(4)
  .then(function( results ){
    res.apiSuccess(results)
  })
  .catch(function(err){
    res.apiError(err);
  })
})

app.get('/api/v1/popular/posts/:id', function(req, res){
  console.log('coming');
  models.Blogs.findById(req.params.id)
  .then(function( results ){
    res.apiSuccess(results)
  })
  .catch(function(err){
    res.apiError(err);
  })
})


app.listen(config.port, () => {
  console.log('Express server listening on port ',config.port)
})

module.exports = app;
