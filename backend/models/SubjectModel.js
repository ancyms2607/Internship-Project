const mongoose = require("mongoose");

const SubjectSchema = new mongoose.Schema({
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
const SubjectData = mongoose.model("Subject", SubjectSchema);
module.exports=SubjectData
