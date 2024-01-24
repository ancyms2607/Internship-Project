import React from 'react'
import { Button, TextField, Typography , Box} from "@mui/material";
import  { useEffect, useState } from "react";
import {redirect , useNavigate} from "react-router-dom";
import axios from 'axios';
import {tokens} from "../../../theme"
import Sidebar from './Sidebar';
import Topbar from './Topbar';
import App from './../../../../src/App.css';


const Addnewmentor = (props) => {
    const [form,setForm]=useState({
        MentorName:'',
        Email:'',
        PhoneNumber:'',
        Password:'',
        ProjectTopics:''
     })

     const navigate=useNavigate()

     function submitHandler(){
           axios.post('http://localhost:3001/api/mentor/addDetails',form).then((res)=>{
            alert(res.data.message)
            navigate('/mentors');
           })
         
          
         
     }
  return (
    <>
    
    <Box m="20px" display="flex">
    {/* SIDEBAR */}
    <Sidebar />
    <div  style={{ margin: " 3%  25% "}} className='App'>
     <Typography variant='h2' style={{color:'white', marginBottom: "2%"}} >Add New Mentor</Typography>

     <br/>
     <br/>
    
      <TextField fullWidth variant="outlined"  multiline rows={2} type="text" label="Mentor Name"
      onChange={(e)=>{
       setForm({...form,MentorName:e.target.value})
     }} value={form.MentorName}/>
     <br/>
     <br/>
  
      <TextField fullWidth variant="outlined" multiline rows={2}  type="text" label="Email"
     onChange={(e)=>{
      setForm({...form,Email:e.target.value})
    }} value={form.Email}/>
    <br/>
    <br/>
    
      <TextField fullWidth variant="outlined"  multiline rows={2} type="number" label="Phone Number"
       onChange={(e)=>{
        setForm({...form,PhoneNumber:e.target.value})
      }} value={form.PhoneNumber}/>
      <br/>
      <br/>
      <TextField
        variant="outlined" multiline rows={2} fullWidth  type="password" label="Password"
        onChange={(e)=>{
          setForm({...form,Password:e.target.value})
        }} value={form.Password}
      />
      <br/>
      <br/>
      
      <TextField fullWidth variant="outlined" multiline rows={2} type='text' label="Project Topics" 
       onChange={(e)=>{
        setForm({...form,ProjectTopics:e.target.value})
      }} value={form.ProjectTopics}/>
      <br/>
      <br/>
      <br/>
      
      <Button variant="contained" style={{backgroundColor:"white" , color:"black"}} onClick={submitHandler} >
            Submit
          </Button>
    </div>
    </Box>


    </>
  )
}

export default Addnewmentor