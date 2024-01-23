import React from 'react'
import { Button, TextField, Typography , Box} from "@mui/material";
import  { useEffect, useState } from "react";
import {redirect} from "react-router-dom";
import axios from 'axios';
import {tokens} from "../../../theme"
import Sidebar from './Sidebar';
import Topbar from './Topbar';
import App from './../../../../src/App.css';

const MentForm = (props) => {

     const [form,setForm]=useState({
        MentorName:'',
        Email:'',
        PhoneNumber:'',
        Password:'',
        ProjectTopics:''
     }) 
     function submitHandler(){
          //  axios.post('http://localhost:3001/api/mentor/addDetails',form).then((res)=>{
          //   alert(res.data.message)
          //  })
          if(props.method==="put"){
            axios.put("http://localhost:3001/api/mentor/updateDetails/"+props.data._id,form)
            .then((res)=>{
             
              if (res.data.message==="No Mentor Found") {
               alert(res.data.message)
                window.location.reload(false);
          
                
              } else {
                alert("Updation Successful")
              }
            })}
            else{
            axios.post('http://localhost:3001/api/mentor/addDetails',form).then((res)=>{
              alert(res.data.message);
           
            })}
         
     }
  return (

    <Box m="20px" display="flex">
    {/* SIDEBAR */}
    <Sidebar />
    <div style={{ margin: "7% 20% 2% 20%" }} className='App'>
     <Typography variant='h2' style={{color:'darkblue'}} >Add Mentor</Typography>

     <br/>
     
    
      <TextField fullWidth variant="outlined"  multiline rows={2} type="text" label="Mentor Name"
      onChange={(e)=>{
       setForm({...form,MentorName:e.target.value})
     }}/>
     <br/>
     <br/>
  
      <TextField fullWidth variant="outlined" multiline rows={2}  type="text" label="Email"
     onChange={(e)=>{
      setForm({...form,Email:e.target.value})
    }}/>
    <br/>
    <br/>
    
      <TextField fullWidth variant="outlined"  multiline rows={2} type="number" label="Phone Number"
       onChange={(e)=>{
        setForm({...form,PhoneNumber:e.target.value})
      }}/>
      <br/>
      <br/>
      <TextField
        variant="outlined" multiline rows={2} fullWidth  type='password' label="Password"
        onChange={(e)=>{
          setForm({...form,Password:e.target.value})
        }}
      />
      <br/>
      <br/>
      
      <TextField fullWidth variant="outlined" multiline rows={2} type='text' label="Project Topics"
       onChange={(e)=>{
        setForm({...form,ProjectTopics:e.target.value})
      }} />
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
