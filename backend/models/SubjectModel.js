const mongoose = require("mongoose");

const Subject = new mongoose.Schema({
  Course: {
    type: String,
    required: true
  },
  ProjectTopic: {
    type: String,
    required: true
  }
  , 
  Batch : {
  type : String,
  required: true
  },
  Mentor: {
    type:String,
    required:true
  },

})
module.exports = mongoose.model("Subject", Subject);
