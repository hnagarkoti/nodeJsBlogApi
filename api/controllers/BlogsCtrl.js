// let config          = require('../config');
// let jwt             = require('jsonwebtoken');
// let models          = require('../models');
// let crypto          = require('crypto');
// let bcrypt          = require('bcrypt');
//
//
// function authenticateUser(req, res){
//   models.User.findOne({
//     email: req.body.email
//   }, function(err, user) {
//
//     if (err) res.apiError(err);
//
//     if (!user) {
//       return res.apiError(new Error('Authentication failed user not found.'));
//     } else if (user) {
//
//       user.comparePassword(req.body.password, function(err, isMatch) {
//             if (err) res.apiError(err);
//             if(isMatch){
//               var usr = {
//                 userRole: user.userRole,
//                 name: user.name,
//                 _id: user._id
//               }
//               var token = jwt.sign(usr, config.secret, {
//                 expiresIn: 60*60*24 // expires in 24 hours
//               });
//               return res.apiSuccess({
//                 token,
//                 user: usr
//               }, 'Enjoy your token!')
//             } else {
//               return res.apiError(new Error('Authentication failed. Password doesnt matched.'));
//             }
//       });
//     }
//   });
// }
//
// function addDummy(req, res){
//   models.User.findOne({ email: req.body.email }, function(err, user) {
//     if (user) {
//       return res.apiError(new Error('User already exists!'));
//     }
//     var user = new models.User({
//     "name": "Hemant Singh",
//     "email": "hemant_nagarkoti@yahoo.com",
//     "password": "hemant1",
//     "phone": "9811564873",
//     "userRole": "superadmin"
// });
//     user.save(function(err) {
//       if(err) return res.apiError(new Error(err));
//       return res.apiSuccess('Done')
//     });
//   });
// }
//
//
//
//
//
// function encryptPassword(req, res){
//   return new Promise(function (resolve, reject) {
//     bcrypt.genSalt(config.SALT_WORK_FACTOR, function(err, salt) {
//         if (err) return reject(err);
//
//         // hash the password using our new salt
//         bcrypt.hash(req.body.password, salt, function(err, hash) {
//             if (err) return reject(err);
//
//             // override the cleartext password with the hashed one
//             // return req.body.password = hash;
//             return resolve(hash)
//             // next();
//         });
//     });
//   })
//
// }
// module.exports = {
//   authenticateUser,
//   addDummy
// }
