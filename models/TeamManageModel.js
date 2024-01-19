const mongoose=require('mongoose');


const TeamManageSchema=mongoose.Schema({
    batch:String,
    group:Number,
    project_topic:String,
    team_members:String
})

const TeamManageData=mongoose.model('teammanagedata',TeamManageSchema);
module.exports=TeamManageData;
