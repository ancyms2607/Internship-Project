const mongoose=require('mongoose');

const RefmatSchema=mongoose.Schema({

    live_session: String,
    refences:String

})

const RefmatData=mongoose.model('/refmatdata',RefmatSchema);
module.exports=RefmatData;