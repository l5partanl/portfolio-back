const mongoose = require('mongoose');

const projectSchema = new mongoose.Schema({
  title: String,
  description: String,
  tags: [String],
  imageUrl: String,
  liveLink: String,
  github: String,
  type: String // 'fullstack' o 'design'
});

module.exports = mongoose.model('Project', projectSchema);
