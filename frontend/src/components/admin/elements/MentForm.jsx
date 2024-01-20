import React from 'react'
import { Button, TextField, Typography , Box} from "@mui/material";
import  { useEffect, useState } from "react";
import {redirect} from "react-router-dom";
import axios from 'axios';
import {tokens} from "../../../theme"
import Sidebar from './Sidebar';
import Topbar from './Topbar';
import App from './../../../../src/App.css';

const MentForm = () => {

     const [form,setForm]=useState({
        topic:'',
        batch:'',
        mentor:'' 
     }) 
  return (

    <Box m="20px" display="flex">
    {/* SIDEBAR */}
    <Sidebar />
    <div style={{ margin: "7% 20% 2% 20%" }} className='App'>
     <Typography variant='h2' style={{color:'darkblue'}} >Add Mentor</Typography>

     <br/>
     
    
      <TextField fullWidth variant="outlined"  type="text" label="Mentor name"
      onChange={(e)=>{
       setForm({...form,topic:e.target.value})
     }}/>
     <br/>
     <br/>
  
      <TextField fullWidth variant="outlined"  type="text" label="Email"
     onChange={(e)=>{
      setForm({...form,topic:e.target.value})
    }}/>
    <br/>
    <br/>
    
      <TextField fullWidth variant="outlined"  type="number" label="Phone number"
       onChange={(e)=>{
        setForm({...form,topic:e.target.value})
      }}/>
      <br/>
      <br/>
      <TextField
        variant="outlined" fullWidth  type="password" label="Password"
        onChange={(e)=>{
          setForm({...form,batch:e.target.value})
        }}
      />
      <br/>
      <br/>
      
      <TextField fullWidth variant="outlined" value={form.mentor} type='text' label="Project topic"
       onChange={(e)=>{
        setForm({...form,mentor:e.target.value})
      }} />
      <br/>
      <br/>
      <br/>
      
      <Button variant="contained" style={{backgroundColor:"white" , color:"black"}}  >
            Submit
          </Button>
    </div>
    </Box>
  );

    }

export default MentForm
