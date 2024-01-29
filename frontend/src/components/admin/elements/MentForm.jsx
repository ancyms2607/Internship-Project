import React from 'react'
import { Button, TextField, Typography , Box} from "@mui/material";
import  { useState } from "react";
import {useNavigate} from "react-router-dom";
import axios from 'axios';
import Sidebar from './Sidebar';

const MentForm = (props) => {

     const [form,setForm]=useState({
        MentorName:props.data.MentorName,
        Email:props.data.Email,
        PhoneNumber:props.data.PhoneNumber,
        Password:props.data.Password,
        ProjectTopics:props.data.ProjectTopics
     }) 
    
    const navigate=useNavigate();

     function submitHandler(){
          
          if(props.method==="put"){
            axios.put("/api/mentor/updateDetails/"+props.data._id,form)
            .then((res)=>{
             
              if (res) {
               alert("Updation Successful!")
                window.location.reload(false);
                
              } else {
                alert("No mentor found!!")
              }
            })}
            else{
            axios.post('/api/mentor/addDetails',form).then((res)=>{
              alert(res.data.message);
              navigate('/mentors')
               
            })}
         
     }
  return (

    <Box m="20px" display="flex">
    {/* SIDEBAR */}
    <Sidebar />
    <div  style={{ margin: " 5%  25% "}} className='App'>
     <Typography variant='h2' style={{color:'white'}} >Update Mentor</Typography>

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
        variant="outlined" multiline rows={2} fullWidth  type="password" placeholder='Password'
        onChange={(e)=>{
          setForm({...form,Password:e.target.value})
        }} value={form.Password}
      />
      <br/>
      <br/>
      
      <TextField fullWidth variant="outlined" multiline rows={2} type='text' label="Project Topics" 
       onChange={(e)=>{
        setForm({...form,ProjectTopics:e.target.value})
      }} value={form.ProjectTopics} />
      <br/>
      <br/>
      <br/>
      
      <Button variant="contained" style={{backgroundColor:"white" , color:"black"}} onClick={submitHandler} >
            Submit
          </Button>
    </div>
    </Box>
  );

    }

export default MentForm
