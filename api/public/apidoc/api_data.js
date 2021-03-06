define({ "api": [
  {
    "type": "post",
    "url": "/blogs",
    "title": "Add a new blog",
    "name": "CreateBlog",
    "group": "Blogs",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "title",
            "description": "<p>Title of the blog.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "description",
            "description": "<p>Description of the blog.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "image",
            "description": "<p>Image url.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Request-Example:",
          "content": "{\n\t \"title\": \"h\",\n\t \"description\": \"test\",\n\t \"image\": \"http://abc.com\"\n}",
          "type": "json"
        }
      ]
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "   HTTP/1.1 200 OK\n{\n    \"success\": true,\n    \"message\": \"Success\",\n    \"data\": {\n        \"__v\": 0,\n        \"updatedAt\": \"2017-07-22T12:33:04.727Z\",\n        \"createdAt\": \"2017-07-22T12:33:04.727Z\",\n        \"title\": \"h\",\n        \"description\": \"test\",\n        \"image\": \"http://abc.com\",\n        \"_id\": \"597346007e04a312d3f5e08d\"\n    }\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "examples": [
        {
          "title": "Error-Response:",
          "content": "   HTTP/1.1 100 Error while finding user\n{\n  \"success\": false,\n  \"message\": \"Some technical error. Please try after some time\",\n  \"data\": {},\n  \"errors\": []\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "api/routes/docs/blogs.js",
    "groupTitle": "Blogs"
  },
  {
    "type": "get",
    "url": "/blogs/",
    "title": "Fetch Blogs",
    "name": "FetchingBlogs",
    "group": "Blogs",
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "    HTTP/1.1 200 OK\n{\n\tsuccess: true,\n\ttotal: 1,\n\tmessage: \"Success\",\n\tdata: -[-{\n\t\t_id: \"597346007e04a312d3f5e08d\",\n\t\tupdatedAt: \"2017-07-22T12:33:04.727Z\",\n\t\tcreatedAt: \"2017-07-22T12:33:04.727Z\",\n\t\ttitle: \"h\",\n\t\tdescription: \"test\",\n\t\timage: \"http://abc.com\",\n\t\t__v: 0\n\t}]\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "examples": [
        {
          "title": "Error-Response:",
          "content": "    HTTP/1.1 100 Error while adding\n{\n  \"success\": false,\n  \"message\": \"Server is not running.\",\n  \"data\": {},\n  \"errors\": []\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "api/routes/docs/blogs.js",
    "groupTitle": "Blogs"
  },
  {
    "type": "put",
    "url": "/blogs/:id",
    "title": "Update Blog",
    "name": "UpdateBlog",
    "group": "Blogs",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "title",
            "description": "<p>Title of the blog.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "description",
            "description": "<p>Description of the blog.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "image",
            "description": "<p>Image url.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Request-Example:",
          "content": "{\n\t \"title\": \"h\",\n\t \"description\": \"test\",\n\t \"image\": \"http://abc.com\"\n}",
          "type": "json"
        }
      ]
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "   HTTP/1.1 200 OK\n{\n    \"success\": true,\n    \"message\": \"Success\",\n    \"data\": {\n        \"_id\": \"597346007e04a312d3f5e08d\",\n        \"updatedAt\": \"2017-07-22T12:53:46.225Z\",\n        \"createdAt\": \"2017-07-22T12:33:04.727Z\",\n        \"title\": \"hem\",\n        \"description\": \"test\",\n        \"image\": \"http://abc.com\",\n        \"__v\": 0\n    }\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "examples": [
        {
          "title": "Error-Response:",
          "content": "    HTTP/1.1 100 Error while adding\n {\n \"success\": false,\n \"message\": \"Id doesnt exist.\",\n \"data\": {},\n \"errors\": []\n}",
          "type": "json"
        },
        {
          "title": "Error-Response:",
          "content": "   HTTP/1.1 100 Error while adding\n{\n  \"success\": false,\n  \"message\": \"Some technical error occured. Please try after some time\",\n  \"data\": {},\n  \"errors\": []\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "api/routes/docs/blogs.js",
    "groupTitle": "Blogs"
  },
  {
    "type": "post",
    "url": "/user",
    "title": "Add New User",
    "name": "AddNewUser",
    "group": "User",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "name",
            "description": "<p>Name field required.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "email",
            "description": "<p>Email field required.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "password",
            "description": "<p>Password field required.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "phone",
            "description": "<p>Phone field must be of 10 digit required.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "userRole",
            "description": "<p>User Role can be one of ['superadmin', 'admin', 'user'] Optional.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "userType",
            "description": "<p>User Type can be one of ['admin', 'company', 'subscriber'] Optional.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "subsriptionType",
            "description": "<p>Subsription Type can be ['yearly', 'monthly'] Optional.</p>"
          },
          {
            "group": "Parameter",
            "type": "Date",
            "optional": false,
            "field": "startDate",
            "description": "<p>Package Start Date field Optional.</p>"
          },
          {
            "group": "Parameter",
            "type": "Date",
            "optional": false,
            "field": "endDate",
            "description": "<p>Package End Date field Optional.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Request-Example:",
          "content": "{\n\t\"name\":\"Av Singh\",\n\t\"email\": \"av@yahoo.com\",\n \"password\": \"hemants\",\n \"phone\": \"7611564813\",\n \"userRole\": \"superadmin\"\n}",
          "type": "json"
        }
      ]
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "  HTTP/1.1 200 OK\n{\n\"success\": true,\n\"message\": \"Success\",\n\"data\": {\n\"__v\": 0,\n\"name\": \"Av Singh\",\n\"email\": \"avasdsfs@yahoo.com\",\n    \"password\": \"$2a$10$7xvtL.TqlvGBBC3G.0xuvOJwq2u56J1Ybx61P2HlZqzplIXZV6.IG\",\n    \"phone\": \"7678564813\",\n    \"_id\": \"58eb3dd0b4469465a7264727\",\n    \"createdAt\": \"2017-04-10T08:09:52.536Z\",\n    \"updatedAt\": \"2017-04-10T08:09:52.536Z\",\n    \"userRole\": \"superadmin\"\n  }\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "examples": [
        {
          "title": "Error-Response:",
          "content": "  HTTP/1.1 100 Error while adding\n{\n  \"name\": \"MongoError\",\n  \"message\": \"insertDocument :: caused by :: 11000 E11000 duplicate key error index: realEstate.users.$email_1  dup key: { : \\\"av@yahoo.com\\\" }\",\n  \"driver\": true,\n  \"code\": 11000,\n  \"index\": 0,\n  \"errmsg\": \"insertDocument :: caused by :: 11000 E11000 duplicate key error index: realEstate.users.$email_1  dup key: { : \\\"av@yahoo.com\\\" }\"\n}",
          "type": "json"
        },
        {
          "title": "Error-Response:",
          "content": "  HTTP/1.1 100 Error while adding\n{\n  \"errors\": {\n    \"password\": {\n      \"message\": \"Path `password` is required.\",\n      \"name\": \"ValidatorError\",\n      \"properties\": {\n        \"type\": \"required\",\n        \"message\": \"Path `{PATH}` is required.\",\n        \"path\": \"password\"\n      },\n      \"kind\": \"required\",\n      \"path\": \"password\"\n    }\n  },\n  \"message\": \"User validation failed\",\n  \"name\": \"ValidationError\"\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "api/routes/docs/apiDocumentation.js",
    "groupTitle": "User"
  },
  {
    "type": "post",
    "url": "/forgotPassword",
    "title": "Forgot Password",
    "name": "ForgotPassword",
    "group": "User",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "email",
            "description": "<p>Email field required.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Request-Example:",
          "content": "{\n  \"email\": \"hemant_nagarkoti@yahoo.com\"\n}",
          "type": "json"
        }
      ]
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "    HTTP/1.1 200 OK\n {\n \"success\": true,\n \"message\": \"An email is sent to undefined with password reset information.\",\n \"data\": {\n   \"accepted\": [\n     \"hemant_nagarkoti@yahoo.com\"\n   ],\n   \"rejected\": [],\n   \"response\": \"250 2.0.0 OK 1491805025 b77sm22138500pfl.2 - gsmtp\",\n   \"envelope\": {\n     \"from\": \"\",\n     \"to\": [\n       \"hemant_nagarkoti@yahoo.com\"\n     ]\n   },\n   \"messageId\": \"558d7d84-4669-9d2e-7ba8-3b7f7931f25b@hemant-Latitude-E6420\"\n }\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "examples": [
        {
          "title": "Error-Response:",
          "content": "   HTTP/1.1 100 Error while finding user\n{\n  \"success\": false,\n  \"message\": \"No user found with this email address not found!\",\n  \"data\": {},\n  \"errors\": []\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "api/routes/docs/apiDocumentation.js",
    "groupTitle": "User"
  },
  {
    "type": "get",
    "url": "/user",
    "title": "Get all users",
    "name": "GetAllUsers",
    "group": "User",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "jwt",
            "description": "<p>jwt Token field in headers required or.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "token",
            "description": "<p>jwt Token field in query params or body required.</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "   HTTP/1.1 200 OK\n{\n  \"success\": true,\n  \"message\": \"Success\",\n  \"data\": [\n    {\n      \"_id\": \"58e76ccd32aa0203e6457104\",\n      \"name\": \"Hemant Singh\",\n      \"email\": \"hemant_nagarkoti@yahoo.com\",\n      \"password\": \"$2a$10$/8ixUN/7mfR.C/YlFmSQWOWiKqr6Fd9jIYtKUImUMsn79ao9wpfvy\",\n      \"phone\": \"9811564873\",\n      \"userType\": \"admin\",\n      \"createdAt\": \"2017-04-07T10:41:17.658Z\",\n      \"updatedAt\": \"2017-04-07T10:41:17.658Z\",\n      \"userRole\": \"superadmin\",\n      \"__v\": 0,\n      \"resetPasswordExpires\": \"2017-04-10T08:55:04.274Z\",\n      \"resetPasswordToken\": \"bf026351d276727440fedd46492978130e07f37d\"\n    },\n    {\n      \"_id\": \"58e76d371f7dcd05f36efb53\",\n      \"name\": \"Hemant Singh\",\n      \"email\": \"h@yahoo.com\",\n      \"password\": \"$2a$10$s26JSWTWbuGUE9wMfieCA.uYlKTAYq9B3PNjOzSCEttElAcPN6v.K\",\n      \"phone\": \"9831564873\",\n      \"userType\": \"admin\",\n      \"createdAt\": \"2017-04-07T10:43:03.207Z\",\n      \"updatedAt\": \"2017-04-07T10:43:03.207Z\",\n      \"userRole\": \"superadmin\",\n      \"__v\": 0\n    }\n  ]\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "examples": [
        {
          "title": "Error-Response:",
          "content": " HTTP/1.1 100 Error while adding\n{\n  \"success\": false,\n  \"message\": \"No token provided.\",\n  \"data\": {\n\n  },\n  \"errors\": [\n\n  ]\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "api/routes/docs/apiDocumentation.js",
    "groupTitle": "User"
  },
  {
    "type": "get",
    "url": "/user/58e76ccd32aa0203e6457104",
    "title": "Get user",
    "name": "GetUser",
    "group": "User",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "jwt",
            "description": "<p>jwt Token field in headers required or.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "token",
            "description": "<p>jwt Token field in query params or body required.</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "  HTTP/1.1 200 OK\n  {\n  \"success\": true,\n  \"message\": \"Success\",\n  \"data\": {\n    \"_id\": \"58e76ccd32aa0203e6457104\",\n    \"name\": \"Hemant Singh\",\n    \"email\": \"hemant_nagarkoti@yahoo.com\",\n    \"password\": \"$2a$10$/8ixUN/7mfR.C/YlFmSQWOWiKqr6Fd9jIYtKUImUMsn79ao9wpfvy\",\n    \"phone\": \"9811564873\",\n    \"userType\": \"admin\",\n    \"createdAt\": \"2017-04-07T10:41:17.658Z\",\n    \"updatedAt\": \"2017-04-07T10:41:17.658Z\",\n    \"userRole\": \"superadmin\",\n    \"__v\": 0,\n    \"resetPasswordExpires\": \"2017-04-10T08:55:04.274Z\",\n    \"resetPasswordToken\": \"bf026351d276727440fedd46492978130e07f37d\"\n  }\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "examples": [
        {
          "title": "Error-Response:",
          "content": " HTTP/1.1 100 Error while adding\n{\n  \"success\": false,\n  \"message\": \"No token provided.\",\n  \"data\": {\n\n  },\n  \"errors\": [\n\n  ]\n}",
          "type": "json"
        },
        {
          "title": "Error-Response:",
          "content": "   HTTP/1.1 100 Error while adding\n{\n\"message\": \"Cast to ObjectId failed for value \\\"58e76ccd304\\\" at path \\\"_id\\\" for model \\\"User\\\"\",\n\"name\": \"CastError\",\n\"stringValue\": \"\\\"58e76ccd304\\\"\",\n\"kind\": \"ObjectId\",\n\"value\": \"58e76ccd304\",\n\"path\": \"_id\"\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "api/routes/docs/apiDocumentation.js",
    "groupTitle": "User"
  },
  {
    "type": "post",
    "url": "/reset/:token",
    "title": "Reset Password",
    "name": "ResetPassword",
    "group": "User",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "password",
            "description": "<p>Password field required.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "confirmPassword",
            "description": "<p>Confirm Password field required.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Request-Example:",
          "content": " {\n  \"password\":\"hemant1\",\n  \"confirmPassword\":\"hemant1\"\n}",
          "type": "json"
        }
      ]
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "    HTTP/1.1 200 OK\n {\n \"success\": true,\n \"message\": \"Password updated successfully!\",\n \"data\": {\n   \"_id\": \"58e76ccd32aa0203e6457104\",\n   \"name\": \"Hemant Singh\",\n   \"email\": \"hemant_nagarkoti@yahoo.com\",\n   \"password\": \"$2a$10$/8ixUN/7mfR.C/YlFmSQWOWiKqr6Fd9jIYtKUImUMsn79ao9wpfvy\",\n   \"phone\": \"9811564873\",\n   \"userType\": \"admin\",\n   \"__v\": 0,\n   \"resetPasswordExpires\": null,\n   \"resetPasswordToken\": null,\n   \"createdAt\": \"2017-04-07T10:41:17.658Z\",\n   \"updatedAt\": \"2017-04-07T10:41:17.658Z\",\n   \"userRole\": \"superadmin\"\n }\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "examples": [
        {
          "title": "Error-Response:",
          "content": "    HTTP/1.1 100 Error while adding\n {\n \"success\": false,\n \"message\": \"Password reset token is invalid or has expired.\",\n \"data\": {},\n \"errors\": []\n}",
          "type": "json"
        },
        {
          "title": "Error-Response:",
          "content": "   HTTP/1.1 100 Error while adding\n{\n  \"success\": false,\n  \"message\": \"New Password and Confirm Password fields doesn't matched.\",\n  \"data\": {},\n  \"errors\": []\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "api/routes/docs/apiDocumentation.js",
    "groupTitle": "User"
  },
  {
    "type": "post",
    "url": "/login/",
    "title": "User Login",
    "name": "UserLogin",
    "group": "User",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "email",
            "description": "<p>Email field required.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "password",
            "description": "<p>Password field required.</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "    HTTP/1.1 200 OK\n{\n  \"success\": true,\n  \"message\": \"Enjoy your token!\",\n  \"data\": {\n    \"token\": \"eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJuYW1lIjoiSGVtYW50IFNpbmdoIiwiX2lkIjoiNThlNzZjY2QzMmFhMDIwM2U2NDU3MTA0IiwiaWF0IjoxNDkxODEwMDQ0LCJleHAiOjE0OTE4OTY0NDR9.AsuQvjCOVvw74ihAbV9aKylQoLm_fGADjJKemUlYaJo\",\n    \"user\": {\n      \"name\": \"Hemant Singh\",\n      \"_id\": \"58e76ccd32aa0203e6457104\"\n    }\n  }\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "examples": [
        {
          "title": "Error-Response:",
          "content": "    HTTP/1.1 100 Error while adding\n{\n  \"success\": false,\n  \"message\": \"Authentication failed. Password doesnt matched.\",\n  \"data\": {},\n  \"errors\": []\n}",
          "type": "json"
        },
        {
          "title": "Error-Response:",
          "content": "    HTTP/1.1 100 Error while adding\n{\n  \"success\": false,\n  \"message\": \"Authentication failed user not found.\",\n  \"data\": {},\n  \"errors\": []\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "api/routes/docs/apiDocumentation.js",
    "groupTitle": "User"
  }
] });
