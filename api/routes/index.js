let express             = require('express');
let router              = express.Router();
let jwt                 = require('jsonwebtoken');
let config              = require('../config')
let models              = require('../models');
let middleware          = require('../lib/middleware');
let UserCtrl            = require('../controllers/UserCtrl')
var multer              = require('multer');
let path                = require('path')

var storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, 'api/public/')
  },
  filename: function (req, file, cb) {
    console.log('file:-- ', file);
    cb(null, file.fieldname + '-' + Date.now() + path.extname(file.originalname))
    // cb(null, file.fieldname + '-' + Date.now() + '.',file.mimetype)
  }
})

var uploadBlogs = multer({ storage: storage });

router.get('/test', [middleware.authenticate, function(req, res){
  return res.apiSuccess(req.user,'');
}]);

router.post('/login', function(req, res){
  UserCtrl.authenticateUser(req, res);
})

router.get('/dummyUser', function(req, res){
  UserCtrl.addDummy(req, res);
})

router.post('/image', uploadBlogs.single('avatar'), function(req, res){
  var savedPath = req.file.path.split('api/public/')[1];
  var obj = {
    data: req.file,
    fullPath: 'http://' + req.headers.host + '/' + savedPath
  }
  res.apiSuccess(obj, "File uploaded succesfully")
});


module.exports = router;
