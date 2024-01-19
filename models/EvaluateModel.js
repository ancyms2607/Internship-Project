const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const EvaluateSchema = new Schema({
    batch:{
        type:String
    },
    topic:{
        type:String
    },
    team_members:{
        type:String
    },
    link:{
        type:String
    },    
    score:{
        type: Number
    },
    comments:{
        type: String
    }
});

module.exports = mongoose.model('evaluatedata',EvaluateSchema);