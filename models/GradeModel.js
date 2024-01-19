const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const GradeSchema = new Schema({
    id: {
        type: Number,
    },
    group_name:{
        type: String
    },
    phase1: {
        type: Number
    },
    phase2:{
        type: Number
    },
    phase3:{
        type: Number
    },
    total:{
        type: Number
    },
    grade:{
        type: Number
    }
});

module.exports = mongoose.model('gradedata', GradeSchema);