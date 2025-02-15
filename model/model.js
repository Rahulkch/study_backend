const mongoose = require('mongoose');

// Define the schema
const contentSchema = new mongoose.Schema({
  link: {
    type: String,
    required: true, // Link is required
    trim: true, // Remove extra spaces
  },
  heading: {
    type: String,
    required: true, // Heading is required
    trim: true, // Remove extra spaces
  },
  contentType: {
    type: String,
    enum: ['study', 'not study'], // Only allow 'study' or 'not study'
    required: true, // Content type is required
  },
});

// Create the model
const Content = mongoose.model('Content', contentSchema);

module.exports = Content;