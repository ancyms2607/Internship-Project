const mongoose=require('mongoose');

const RefmatSchema=mongoose.Schema({

    
    references:String

})

const RefmatData=mongoose.model('/refmatdata',RefmatSchema);
module.exports=RefmatData;