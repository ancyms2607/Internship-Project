const mongoose = require("mongoose");

const Subject = new mongoose.Schema({
  Course: {
    type: String,
    required: true,
  },
  ProjectTopics: {
    type: String,
    required: true,
  }
}, { timestamps: true });

module.exports = mongoose.model("Subject", Subject);
