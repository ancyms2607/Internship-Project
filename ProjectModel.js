const mongoose=require('mongoose');
const ProjectSchema=mongoose.Schema({
    group_name:String,
    project_topic:String,
    submitted_members:String,
    evaluation_status:String,
    grading_status:String,
    
})

const ProjectData=mongoose.model('projectdata',ProjectSchema);
module.exports=ProjectData;
