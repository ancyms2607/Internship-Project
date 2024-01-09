const  mongoose=require('mongoose');
mongoose.connect('mongodb+srv://ictak123:ictak12@cluster0.fthdolr.mongodb.net/Internshipportal?retryWrites=true&w=majority')
.then(()=>{
    console.log("DB connected successfully");
})
.catch((error)=>{
    console.log("Error! Not connected!!",error);
})