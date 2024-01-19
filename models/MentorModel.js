const mongoose = require("mongoose");

const MentorModel= new mongoose.Schema({
  
  MentorName: {
    type: String,
    required: true,
  },
  
  email: {
    type: String,
    required: true,
  },
  phoneNumber: {
    type: Number,
    required: true,
  },
  
  password: {
    type: String,
    required: false,
  },

  projectTopic: {
    type: Number,
    required: true,
  },
}, { timestamps: true });

module.exports = mongoose.model("mentor", MentorModel);

