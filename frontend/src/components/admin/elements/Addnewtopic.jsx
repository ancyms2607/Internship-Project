import React from 'react'
import { Button, TextField, Typography,Box } from "@mui/material";
import  { useState } from "react";
import {useNavigate} from "react-router-dom";
import axios from 'axios';
import Sidebar from './Sidebar';


const Addnewtopic = () => {
    const [form,setForm]=useState({
        Course: '',
       ProjectTopic:'',
       Batch:'',
       Mentor:''
   })
   const navigate= useNavigate();

   function submitForm(){
    
       axios.post('http://localhost:3001/api/subject/addSubject',form).then((res)=>{
         alert(res.data.message);
         navigate('/topics')

       })
    
   }
  return (
    <>
    <Box m="20px" display="flex">
  {/* SIDEBAR */}
  <Sidebar />

    <div style={{ margin: " 5%  25% ", textAlign: "center" }}  >
     <Typography variant='h1' style={{color:'white', textAlign: "center"}} >Add Project Topic</Typography>

     <br/>
     <br/>
     <br/>
     <TextField fullWidth style={{paddingBottomBottom: "45px"}} multiline rows={2}  variant="outlined"   label="Course"
       onChange={(e)=>{
        setForm({...form,Course:e.target.value})
      }}value={form.Course}></TextField>
      <br/>
      <br/>
      <br/>
      <TextField fullWidth style={{paddingBottomBottom: "45px"}} multiline rows={2} variant="outlined"   label="Project Topic"
       onChange={(e)=>{
        setForm({...form,ProjectTopic:e.target.value})
      }}value={form.ProjectTopic}/>
      <br/>
      <br/>
      <br/>
      <TextField
        variant="outlined" fullWidth   multiline rows={2} label="Batch"
        onChange={(e)=>{
          setForm({...form,Batch:e.target.value})
        }}value={form.Batch}
      />
      <br/>
      <br/>
      <br/>
      <TextField fullWidth variant="outlined"  multiline rows={2}  label="Mentor Name"
       onChange={(e)=>{
        setForm({...form,Mentor:e.target.value})
      }}value={form.Mentor}/>
      <br/>
      <br/>
      <br/>
      
      
      <Button variant="contained" style={{backgroundColor:"white" , color:"black"}} onClick={submitForm} >
            Submit
          </Button>
    </div>
    </Box>
  </>
  )
}

export default Addnewtopic