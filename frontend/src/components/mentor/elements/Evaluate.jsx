import React from 'react'
import { Button, TextField, Typography , Box} from "@mui/material";
import  { useEffect, useState } from "react";
import {redirect} from "react-router-dom";
import axios from 'axios';
import {tokens} from "../../../theme"
import App from './../../../../src/App.css';
import MentSidebar from './MentSidebar';

const Evaluate = () => {

     const [form,setForm]=useState({
        topic:'',
        batch:'',
        mentor:'' 
     }) 
  return (

    <Box m="20px" display="flex">
    {/* SIDEBAR */}
    <MentSidebar />
    <div style={{ margin: "7% 20% 2% 20%" }} className='App'>
     <Typography variant='h2' style={{color:'darkblue'}} >Let's Evaluate...</Typography>

     <br/>
     
    
      <TextField fullWidth variant="outlined"  type="text" label="Status"
      onChange={(e)=>{
       setForm({...form,topic:e.target.value})
     }}/>
     <br/>
     <br/>
  
      <TextField fullWidth variant="outlined"  type="text" label="Batch"
     onChange={(e)=>{
      setForm({...form,topic:e.target.value})
    }}/>
    <br/>
    <br/>
    
      <TextField fullWidth variant="outlined"  type="text" label="Topic"
       onChange={(e)=>{
        setForm({...form,topic:e.target.value})
      }}/>
      <br/>
      <br/>
      <TextField
        variant="outlined" fullWidth  type="text" label="Student Name"
        onChange={(e)=>{
          setForm({...form,batch:e.target.value})
        }}
      />
      <br/>
      <br/>
      
      <TextField fullWidth variant="outlined" value={form.mentor} type='text' label="Link"
       onChange={(e)=>{
        setForm({...form,mentor:e.target.value})
      }} />
      <br/>
      <br/>
      <TextField
        variant="outlined" fullWidth  type="number" label="Score"
        onChange={(e)=>{
          setForm({...form,batch:e.target.value})
        }}
      />
      <br/>
      <br/>
      <TextField
        variant="outlined" fullWidth  type="text" label="Comments"
        onChange={(e)=>{
          setForm({...form,batch:e.target.value})
        }}
      />
      <br/>
      <br/>
      <br/>
      
      <Button variant="contained" style={{backgroundColor:"white" , color:"black"}}  >
            Done
          </Button>
    </div>
    </Box>
  );

    }

export default Evaluate