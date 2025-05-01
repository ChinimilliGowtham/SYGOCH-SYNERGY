const mongoose = require ('mongoose');

const memberSchema = new mongoose.Schema ({
  name: {type: String, required: true},
  rollNumber: {type: String, required: true},
  year: {type: String, required: true},
  degree: {type: String, required: true},
  aboutProject: {type: String, required: true},
  hobbies: {type: String, required: true},
  certificate: {type: String, required: true},
  internship: {type: String, required: true},
  aboutAim: {type: String, required: true},
  image: {type: String}, // Store the filename of the uploaded image
  createdAt: {type: Date, default: Date.now}, // Optional: track creation time
});

module.exports = mongoose.model ('Member', memberSchema);
