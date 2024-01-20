const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const ProjectSchema = new Schema({
    group: {
        type: Number,
    },
    project_topic:{
        type:String
    },
    team_members: {
        type: Array
    }
});

module.exports = mongoose.model('groupdata', GroupSchema);