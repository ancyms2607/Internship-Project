const mongoose=require('mongoose');
const SubmissionListSchema= mongoose.Schema({
    group:Number,
    SubmissionLink: String

});

const SubmissionListData=mongoose.model('submissionlistdata',SublistSchema);
module.exports=SubmissionListData;