const mongoose=require('mongoose');
const  MentorSchema=mongoose.Schema({
    email:String,
    password:String
})

const MentorData=mongoose.model('mentordata',MentorSchema);
module.exports=MentorData;
