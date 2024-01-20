const mongoose=require('mongoose');
const SubmissionListSchema= mongoose.Schema({
    
    SubmissionLink: String

});

const SubmissionListData=mongoose.model('submissionlistdata',SublistSchema);
module.exports=SubmissionListData;