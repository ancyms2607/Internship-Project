const express=require('express');
const app=new express();
const cors=require('cors');
const nodemon=require('nodemon');
const morgan=require('morgan');
const bodyParser=require('body-parser');
const path=require('path');
const cookieParser=require('cookie-parser');


const mongoose=require('mongoose');
const connectDB=require("./config/dbconnection");

// routes

const AuthRoutes=require('./routes/api/AuthRoutes');
const RefreshRoutes =require('./routes/api/RefreshRoutes')
const subjectRoutes= require('./routes/api/subjectRoutes');
const MentorRoutes=require('./routes/api/MentorRoutes');
const ProjectTopicRoutes=require('./routes/api/ProjectTopicRoutes')
const SubmissionListRoutes=require('./routes/api/SubmissionListRoutes');
const EvaluateRoutes=require('./routes/api/EvaluateRoutes');
const RefmatRoutes=require('./routes/api/RefmatRoutes')
const UserRoutes=require('./routes/api/UserRoutes');


// Connect to MongoDB
const newConnectDB = async () => {
    try {
        await connectDB();
    } catch (error) {
        console.log(error)
    }
}





require('dotenv').config();


// Cross Origin Resource Sharing

app.use(cors({
    origin:process.env.CORS_ORIGIN,
    }))

// built-in middleware to handle urlencoded form data
app.use(express.urlencoded({extended: false}));

// built-in middleware for json
app.use(express.json());

//middleware for cookies
app.use(cookieParser());

app.use(bodyParser.json());

app.use(morgan('dev'));
 app.use(bodyParser.json()); 


 //Routes
app.use('/api/auth', AuthRoutes)
app.use('/api/refresh', RefreshRoutes);
app.use('/api/subject', subjectRoutes);
app.use('/api/mentor', MentorRoutes);
app.use('/api/project', ProjectTopicRoutes)
app.use('/api/list', SubmissionListRoutes);
app.use('/api/user',UserRoutes);
app.use('/api/refmat', RefmatRoutes);
app.use('/api/evaluate', EvaluateRoutes);
app.use('/api/user',UserRoutes);




// serve static files
app.use(express.static(path.join(__dirname, '../frontend/build')));
app.get('*', function (_, res){
    res.sendFile(path.join(__dirname, '../frontend/build/index.html'), function(error){
        res.status(500).send(error);
    })
})

const PORT=process.env.PORT

newConnectDB().then(()=> {
app.listen(PORT,()=>{
    console.log(`Server is listening on ${PORT}`);
})
})
    