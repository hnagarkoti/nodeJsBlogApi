
// User Login
/**
 * @api {post} /login/ User Login
 * @apiName UserLogin
 * @apiGroup User
 *
 * @apiParam {String} email Email field required.
 * @apiParam {String} password Password field required.
 *
 * @apiSuccessExample Success-Response:
 *     HTTP/1.1 200 OK
 * {
 *   "success": true,
 *   "message": "Enjoy your token!",
 *   "data": {
 *     "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJuYW1lIjoiSGVtYW50IFNpbmdoIiwiX2lkIjoiNThlNzZjY2QzMmFhMDIwM2U2NDU3MTA0IiwiaWF0IjoxNDkxODEwMDQ0LCJleHAiOjE0OTE4OTY0NDR9.AsuQvjCOVvw74ihAbV9aKylQoLm_fGADjJKemUlYaJo",
 *     "user": {
 *       "name": "Hemant Singh",
 *       "_id": "58e76ccd32aa0203e6457104"
 *     }
 *   }
 * }
 * @apiErrorExample Error-Response:
 *     HTTP/1.1 100 Error while adding
 * {
 *   "success": false,
 *   "message": "Authentication failed. Password doesnt matched.",
 *   "data": {},
 *   "errors": []
 * }
 * @apiErrorExample Error-Response:
 *     HTTP/1.1 100 Error while adding
 * {
 *   "success": false,
 *   "message": "Authentication failed user not found.",
 *   "data": {},
 *   "errors": []
 * }
 */


// Forgot Password
 /**
  * @api {post} /forgotPassword Forgot Password
  * @apiName ForgotPassword
  * @apiGroup User
  *
  * @apiParam {String} email Email field required.
  *
  * @apiParamExample {json} Request-Example:
  * {
  *   "email": "hemant_nagarkoti@yahoo.com"
  * }
  * @apiSuccessExample Success-Response:
  *     HTTP/1.1 200 OK
  *  {
  *  "success": true,
  *  "message": "An email is sent to undefined with password reset information.",
  *  "data": {
  *    "accepted": [
  *      "hemant_nagarkoti@yahoo.com"
  *    ],
  *    "rejected": [],
  *    "response": "250 2.0.0 OK 1491805025 b77sm22138500pfl.2 - gsmtp",
  *    "envelope": {
  *      "from": "",
  *      "to": [
  *        "hemant_nagarkoti@yahoo.com"
  *      ]
  *    },
  *    "messageId": "558d7d84-4669-9d2e-7ba8-3b7f7931f25b@hemant-Latitude-E6420"
  *  }
  *}
  * @apiErrorExample Error-Response:
  *     HTTP/1.1 100 Error while finding user
  *  {
  *    "success": false,
  *    "message": "No user found with this email address not found!",
  *    "data": {},
  *    "errors": []
  *  }
  */


// Reset Password
 /**
  * @api {post} /reset/:token Reset Password
  * @apiName ResetPassword
  * @apiGroup User
  *
  * @apiParam {String} password Password field required.
  * @apiParam {String} confirmPassword Confirm Password field required.
  * @apiParamExample {json} Request-Example:
  *  {
  *   "password":"hemant1",
  *   "confirmPassword":"hemant1"
  * }
  * @apiSuccessExample Success-Response:
  *     HTTP/1.1 200 OK
  *  {
  *  "success": true,
  *  "message": "Password updated successfully!",
  *  "data": {
  *    "_id": "58e76ccd32aa0203e6457104",
  *    "name": "Hemant Singh",
  *    "email": "hemant_nagarkoti@yahoo.com",
  *    "password": "$2a$10$/8ixUN/7mfR.C/YlFmSQWOWiKqr6Fd9jIYtKUImUMsn79ao9wpfvy",
  *    "phone": "9811564873",
  *    "userType": "admin",
  *    "__v": 0,
  *    "resetPasswordExpires": null,
  *    "resetPasswordToken": null,
  *    "createdAt": "2017-04-07T10:41:17.658Z",
  *    "updatedAt": "2017-04-07T10:41:17.658Z",
  *    "userRole": "superadmin"
  *  }
  *}
  * @apiErrorExample Error-Response:
  *     HTTP/1.1 100 Error while adding
  *  {
  *  "success": false,
  *  "message": "Password reset token is invalid or has expired.",
  *  "data": {},
  *  "errors": []
  * }
  * @apiErrorExample Error-Response:
  *     HTTP/1.1 100 Error while adding
  *  {
  *    "success": false,
  *    "message": "New Password and Confirm Password fields doesn't matched.",
  *    "data": {},
  *    "errors": []
  *  }
  */

// Regiser a new user
  /**
   * @api {post} /user Add New User
   * @apiName AddNewUser
   * @apiGroup User
   *
   * @apiParam {String} name Name field required.
   * @apiParam {String} email Email field required.
   * @apiParam {String} password Password field required.
   * @apiParam {String} phone Phone field must be of 10 digit required.
   * @apiParam {String} userRole User Role can be one of ['superadmin', 'admin', 'user'] Optional.
   * @apiParam {String} userType User Type can be one of ['admin', 'company', 'subscriber'] Optional.
   * @apiParam {String} subsriptionType Subsription Type can be ['yearly', 'monthly'] Optional.
   * @apiParam {Date} startDate Package Start Date field Optional.
   * @apiParam {Date} endDate Package End Date field Optional.
   * @apiParamExample {json} Request-Example:
   *   {
   *   	"name":"Av Singh",
   *   	"email": "av@yahoo.com",
   *    "password": "hemants",
   *    "phone": "7611564813",
   *    "userRole": "superadmin"
   *   }
   * @apiSuccessExample Success-Response:
   *     HTTP/1.1 200 OK
   *   {
   *   "success": true,
   *   "message": "Success",
   *   "data": {
   *   "__v": 0,
   *   "name": "Av Singh",
   *   "email": "avasdsfs@yahoo.com",
   *       "password": "$2a$10$7xvtL.TqlvGBBC3G.0xuvOJwq2u56J1Ybx61P2HlZqzplIXZV6.IG",
   *       "phone": "7678564813",
   *       "_id": "58eb3dd0b4469465a7264727",
   *       "createdAt": "2017-04-10T08:09:52.536Z",
   *       "updatedAt": "2017-04-10T08:09:52.536Z",
   *       "userRole": "superadmin"
   *     }
   *   }
   * @apiErrorExample Error-Response:
   *     HTTP/1.1 100 Error while adding
   *   {
   *     "name": "MongoError",
   *     "message": "insertDocument :: caused by :: 11000 E11000 duplicate key error index: realEstate.users.$email_1  dup key: { : \"av@yahoo.com\" }",
   *     "driver": true,
   *     "code": 11000,
   *     "index": 0,
   *     "errmsg": "insertDocument :: caused by :: 11000 E11000 duplicate key error index: realEstate.users.$email_1  dup key: { : \"av@yahoo.com\" }"
   *   }
   * @apiErrorExample Error-Response:
   *     HTTP/1.1 100 Error while adding
   *   {
   *     "errors": {
   *       "password": {
   *         "message": "Path `password` is required.",
   *         "name": "ValidatorError",
   *         "properties": {
   *           "type": "required",
   *           "message": "Path `{PATH}` is required.",
   *           "path": "password"
   *         },
   *         "kind": "required",
   *         "path": "password"
   *       }
   *     },
   *     "message": "User validation failed",
   *     "name": "ValidationError"
   *   }
   */


// Get All Users
   /**
    * @api {get} /user Get all users
    * @apiName GetAllUsers
    * @apiGroup User
    *
    * @apiParam {String} jwt jwt Token field in headers required or.
    * @apiParam {String} token jwt Token field in query params or body required.
    *
    * @apiSuccessExample Success-Response:
    *     HTTP/1.1 200 OK
    *  {
    *    "success": true,
    *    "message": "Success",
    *    "data": [
    *      {
    *        "_id": "58e76ccd32aa0203e6457104",
    *        "name": "Hemant Singh",
    *        "email": "hemant_nagarkoti@yahoo.com",
    *        "password": "$2a$10$/8ixUN/7mfR.C/YlFmSQWOWiKqr6Fd9jIYtKUImUMsn79ao9wpfvy",
    *        "phone": "9811564873",
    *        "userType": "admin",
    *        "createdAt": "2017-04-07T10:41:17.658Z",
    *        "updatedAt": "2017-04-07T10:41:17.658Z",
    *        "userRole": "superadmin",
    *        "__v": 0,
    *        "resetPasswordExpires": "2017-04-10T08:55:04.274Z",
    *        "resetPasswordToken": "bf026351d276727440fedd46492978130e07f37d"
    *      },
    *      {
    *        "_id": "58e76d371f7dcd05f36efb53",
    *        "name": "Hemant Singh",
    *        "email": "h@yahoo.com",
    *        "password": "$2a$10$s26JSWTWbuGUE9wMfieCA.uYlKTAYq9B3PNjOzSCEttElAcPN6v.K",
    *        "phone": "9831564873",
    *        "userType": "admin",
    *        "createdAt": "2017-04-07T10:43:03.207Z",
    *        "updatedAt": "2017-04-07T10:43:03.207Z",
    *        "userRole": "superadmin",
    *        "__v": 0
    *      }
    *    ]
    *  }
    * @apiErrorExample Error-Response:
    *     HTTP/1.1 100 Error while adding
    *    {
    *      "success": false,
    *      "message": "No token provided.",
    *      "data": {
    *
    *      },
    *      "errors": [
    *
    *      ]
    *    }
    */

    // Get Single User
    /**
     * @api {get} /user/58e76ccd32aa0203e6457104 Get user
     * @apiName GetUser
     * @apiGroup User
     *
     * @apiParam {String} jwt jwt Token field in headers required or.
     * @apiParam {String} token jwt Token field in query params or body required.
     *
     * @apiSuccessExample Success-Response:
     *     HTTP/1.1 200 OK
     *     {
     *     "success": true,
     *     "message": "Success",
     *     "data": {
     *       "_id": "58e76ccd32aa0203e6457104",
     *       "name": "Hemant Singh",
     *       "email": "hemant_nagarkoti@yahoo.com",
     *       "password": "$2a$10$/8ixUN/7mfR.C/YlFmSQWOWiKqr6Fd9jIYtKUImUMsn79ao9wpfvy",
     *       "phone": "9811564873",
     *       "userType": "admin",
     *       "createdAt": "2017-04-07T10:41:17.658Z",
     *       "updatedAt": "2017-04-07T10:41:17.658Z",
     *       "userRole": "superadmin",
     *       "__v": 0,
     *       "resetPasswordExpires": "2017-04-10T08:55:04.274Z",
     *       "resetPasswordToken": "bf026351d276727440fedd46492978130e07f37d"
     *     }
     *   }
     * @apiErrorExample Error-Response:
     *     HTTP/1.1 100 Error while adding
     *    {
     *      "success": false,
     *      "message": "No token provided.",
     *      "data": {
     *
     *      },
     *      "errors": [
     *
     *      ]
     *    }
     * @apiErrorExample Error-Response:
     *     HTTP/1.1 100 Error while adding
     *  {
     *  "message": "Cast to ObjectId failed for value \"58e76ccd304\" at path \"_id\" for model \"User\"",
     *  "name": "CastError",
     *  "stringValue": "\"58e76ccd304\"",
     *  "kind": "ObjectId",
     *  "value": "58e76ccd304",
     *  "path": "_id"
     *  }
     */
