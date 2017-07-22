//During the test the env variable is set to test
process.env.NODE_ENV    = 'test';

let mongoose            = require("mongoose");
let models              = require('../models');
let Blogs                = models.Blogs;

//Require the dev-dependencies
let chai                = require('chai');
let chaiHttp            = require('chai-http');
let server              = require('../../server');
let should              = chai.should();

chai.use(chaiHttp);
//Our parent block
describe('Blogs', () => {
    beforeEach((done) => { //Before each test we empty the database
        Blogs.remove({}, (err) => {
           done();
        });
    });
/*
  * Test the /GET route
*/
  describe('/GET blogs', () => {
      it('it should GET all the blogs', (done) => {
        chai.request(server)
            .get('/api/v1/blogs')
            .end((err, res) => {
              console.log(res.body);
                res.body.success.should.be.equal(true);
                res.body.message.should.be.equal('Success');
                res.body.data.should.be.a('array');
              done();
            });
      });
  });

  /*
    * Test the /POST route
  */
  describe('/POST blogs', () => {
      it('it should create a new blog', (done) => {
        let blog = {
          	"title": "Customer Refuse to pay service tax charges",
          	"description": "A person in Bengaluru refused to pay service tax charges, and he fought with a service man too. I am dummy text.",
          	"image": "https://www.ecampusnews.com/files/2016/01/blogs.jpg"
          }
        chai.request(server)
            .post('/api/v1/blogs')
            .send(blog)
            .end((err, res) => {
              res.body.success.should.be.equal(true);
              res.body.message.should.be.equal('Success');
              res.body.data.should.be.a('object');
              res.body.data.should.have.property('_id');
              done();
            });
      });
  });

  /*
    * Test the /GET/:id route
  */
  describe('/GET/:id blog', () => {
      it('it should GET a blog by the given id', (done) => {
        let blog = new Blogs({
          "title": "Customer Refuse to pay service tax charges",
          "description": "A person in Bengaluru refused to pay service tax charges, and he fought with a service man too. I am dummy text.",
          "image": "https://www.ecampusnews.com/files/2016/01/blogs.jpg"
        });
        blog.save((err, user) => {
            chai.request(server)
            .get('/api/v1/blogs/' + blog.id)
            .send(blog)
            .end((err, res) => {
                res.body.success.should.be.equal(true);
                res.body.message.should.be.equal('Success');
                res.body.data.should.be.a('object');
                res.body.data.should.have.property('title');
                res.body.data.should.have.property('description');
                res.body.data.should.have.property('image');
                res.body.data.should.have.property('_id').eql(blog.id);
              done();
            });
        });
      });
  });

  /*
    * Test the /DELETE/:id route
  */
  describe('/DELETE/:id blog', () => {
    it('it should DELETE a blog by the given id', (done) => {
      let blog = new Blogs({
        "title": "Customer Refuse to pay service tax charges",
        "description": "A person in Bengaluru refused to pay service tax charges, and he fought with a service man too. I am dummy text.",
        "image": "https://www.ecampusnews.com/files/2016/01/blogs.jpg"
      });
      blog.save((err, blog) => {
        chai.request(server)
        .delete('/api/v1/blogs/' + blog._id)
        .send(blog)
        .end((err, res) => {
          res.body.success.should.be.equal(true);
          res.body.message.should.be.equal('Success');
          done();
        })
      })
    })
  })
});
