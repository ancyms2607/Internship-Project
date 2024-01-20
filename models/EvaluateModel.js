const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const EvaluateSchema = new Schema({
    status:{
        type:String
    },
    batch:{
        type:String
    },
    topic:{
        type:String
    },
    student_name:{
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