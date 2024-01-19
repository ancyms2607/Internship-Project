const express=require('express');
const app=new express();
const cors=require('cors');
const nodemon=require('nodemon');
const morgan=require('morgan');
const bodyParser=require('body-parser');
const path=require('path');
const cookieParser=require('cookie-parser');


const mongoose=require('mongoose');
const connectDB=require('./config/dbconnection');

// routes

const AuthRoutes=require('./routes/api/AuthRoutes');
const RefreshRoutes = require('./routes/api/RefreshRoutes');
const ProjectRoutes=require('./routes/api/ProjectRoutes');
const SublistRoutes=require('./routes/api/SublistRoutes');
const TeamManageRoutes=require('./routes/api/TeamManageRoutes');
const GradeRoutes=require('./routes/api/GradeRoutes');
const EvaluateRoutes=require('./routes/api/EvaluateRoutes');
const UserRoutes=require('./routes/api/UserRoutes');
const SubjectRoutes=require('./routes/api/subjectRoutes');
const MentorRoutes=require('./routes/api/MentorRoutes')

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
    methods:['GET' , 'POST' , 'PUT' , 'DELETE'],
    credentials:true
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
app.use('/api/v1/auth', AuthRoutes)
app.use('/api/v1/refresh', RefreshRoutes);
app.use('/api/v1/project', ProjectRoutes)
app.use('/api/v1/sublist', SublistRoutes);
app.use('/api/v1/teammanage', TeamManageRoutes);
app.use('/api/v1/grade',GradeRoutes);
app.use('/api/v1/evaluate', EvaluateRoutes);
app.use('/api/v1/user',UserRoutes);
app.use('/api/v1/subject', SubjectRoutes);
app.use('/api/v1/mentor',MentorRoutes);



// serve static files
app.use(express.static(path.join(__dirname, './build')));
app.get('*', function (_, res){
    res.sendFile(path.join(__dirname, './build/index.html'), function(error){
        res.status(500).send(error);
    })
})

const PORT=process.env.PORT

newConnectDB().then(()=> {
app.listen(PORT,()=>{
    console.log(`Server is listening on ${PORT}`);
})
})
    