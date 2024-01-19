const mongoose=require('mongoose');
const SublistSchema= mongoose.Schema({

    batch:String,
    group_name:String,
    topic:String,
    submission:String,
    

});

const SublistData=mongoose.model('sublistdata',SublistSchema);
module.exports=SublistData;