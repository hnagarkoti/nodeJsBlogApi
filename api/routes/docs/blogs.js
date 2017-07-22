
// User Login
/**
 * @api {get} /blogs/ Fetch Blogs
 * @apiName FetchingBlogs
 * @apiGroup Blogs
 *
 * @apiSuccessExample Success-Response:
 *     HTTP/1.1 200 OK
 * {
 *	success: true,
 *	total: 1,
 *	message: "Success",
 *	data: -[-{
 *		_id: "597346007e04a312d3f5e08d",
 *		updatedAt: "2017-07-22T12:33:04.727Z",
 *		createdAt: "2017-07-22T12:33:04.727Z",
 *		title: "h",
 *		description: "test",
 *		image: "http://abc.com",
 *		__v: 0
 *	}]
 *}
 * @apiErrorExample Error-Response:
 *     HTTP/1.1 100 Error while adding
 * {
 *   "success": false,
 *   "message": "Server is not running.",
 *   "data": {},
 *   "errors": []
 * }
 */


// Add a new blog
 /**
  * @api {post} /blogs Add a new blog
  * @apiName CreateBlog
  * @apiGroup Blogs
  *
  * @apiParam {String} title Title of the blog.
  * @apiParam {String} description Description of the blog.
  * @apiParam {String} image Image url.
  *
  * @apiParamExample {json} Request-Example:
  * {
  *	 "title": "h",
  *	 "description": "test",
  *	 "image": "http://abc.com"
  * }
  * @apiSuccessExample Success-Response:
  *     HTTP/1.1 200 OK
  *  {
  *      "success": true,
  *      "message": "Success",
  *      "data": {
  *          "__v": 0,
  *          "updatedAt": "2017-07-22T12:33:04.727Z",
  *          "createdAt": "2017-07-22T12:33:04.727Z",
  *          "title": "h",
  *          "description": "test",
  *          "image": "http://abc.com",
  *          "_id": "597346007e04a312d3f5e08d"
  *      }
  *  }
  * @apiErrorExample Error-Response:
  *     HTTP/1.1 100 Error while finding user
  *  {
  *    "success": false,
  *    "message": "Some technical error. Please try after some time",
  *    "data": {},
  *    "errors": []
  *  }
  */


// Reset Password
 /**
  * @api {put} /blogs/:id Update Blog
  * @apiName UpdateBlog
  * @apiGroup Blogs
  *
  * @apiParam {String} title Title of the blog.
  * @apiParam {String} description Description of the blog.
  * @apiParam {String} image Image url.
  * @apiParamExample {json} Request-Example:
  * {
  *	 "title": "h",
  *	 "description": "test",
  *	 "image": "http://abc.com"
  * }
  * @apiSuccessExample Success-Response:
  *     HTTP/1.1 200 OK
  *  {
  *      "success": true,
  *      "message": "Success",
  *      "data": {
  *          "_id": "597346007e04a312d3f5e08d",
  *          "updatedAt": "2017-07-22T12:53:46.225Z",
  *          "createdAt": "2017-07-22T12:33:04.727Z",
  *          "title": "hem",
  *          "description": "test",
  *          "image": "http://abc.com",
  *          "__v": 0
  *      }
  *  }
  * @apiErrorExample Error-Response:
  *     HTTP/1.1 100 Error while adding
  *  {
  *  "success": false,
  *  "message": "Id doesnt exist.",
  *  "data": {},
  *  "errors": []
  * }
  * @apiErrorExample Error-Response:
  *     HTTP/1.1 100 Error while adding
  *  {
  *    "success": false,
  *    "message": "Some technical error occured. Please try after some time",
  *    "data": {},
  *    "errors": []
  *  }
  */
