const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const GroupSchema = new Schema({
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