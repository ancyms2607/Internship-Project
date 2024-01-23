const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const GroupSchema = new Schema({

    project_topic:{
        type:String
    },
    group:{
        type:String
    },
    team_members: {
        type: Array
    }
});

const ProjectTopicData=mongoose.model('projectTopic', ProjectTopicSchema)
module.exports = ProjectTopicData;