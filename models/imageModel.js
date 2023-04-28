// models/image.js
const mongoose = require('mongoose');

const imageSchema = new mongoose.Schema({
  title: { type: String, required: true },
  imageUrl: { type: String, required: true }
});

module.exports = mongoose.model('Image', imageSchema);
