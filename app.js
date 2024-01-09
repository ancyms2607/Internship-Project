const express=require('express');
const app=new express();
const cors=require('cors');
const nodemon=require('nodemon');
const morgan=require('morgan');

const ProjectRoutes=require('./routes/Projectroutes')
const MentorRoutes=require('./routes/Mentorroutes')

require('dotenv').config();
require('./db/index')

app.use(express.json());
app.use(express.urlencoded({extended:true}));
app.use(cors({
    origin:'*',
    credentials:true
}))
    app.use(morgan('dev'));


app.use('/project',ProjectRoutes);
app.use('/mentor',MentorRoutes);


app.listen(3001,()=>{
    console.log(`Server is listening on ${3001}`);
})