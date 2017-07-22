let mongoose = require('mongoose');
let Schema = mongoose.Schema;
let config      = require('../config');

var Blogs = new Schema({
  title: {
    type: String,
    required: true
  },
  description: {
    type: String,
    required: true
  },
  image: {
    type: String,
    required: true
  }
},{
  timestamps: true
});

module.exports = mongoose.model('Blogs', Blogs);
