const mongoose=require('mongoose');
const SubmissionListSchema= mongoose.Schema({

    group:Number,
    submissionLink: Array,
    status:String

});

const SubmissionListData=mongoose.model('submissionlistdata',SubmissionListSchema);
module.exports=SubmissionListData;