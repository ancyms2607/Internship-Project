const mongoose = require("mongoose");

const MentorModel= new mongoose.Schema({
  
  MentorName: {
    type: String,
    required: true,
  },
  
  Email: {
    type: String,
    required: true,
  },
  PhoneNumber: {
    type: Number,
    required: true,
  },
  
  Password: {
    type: String,
    required: false,
  },

  ProjectTopics: {
    type: Array,
    required: true,
  }
})

module.exports = mongoose.model("mentordata", MentorModel);
