import React from 'react'
import { Button, TextField, Typography,Box } from "@mui/material";
import  { useEffect, useState } from "react";
import {redirect} from "react-router-dom";
import axios from 'axios';
import {tokens} from "../../../theme"
import App from "../../../../src/App.css"
import Sidebar from './Sidebar';

const AddTopic = () => {
    const [form,setForm]=useState({
        topic:'',
        batch:'',
        mentor:''
    })
  return (
    

  // const [upform,setUpForm]=useState({
  //   title:props.data.title,
  //   description:props.data.description,
  //   date_update:Date.now(),
  //   image:props.data.image,
  // });
  <Box m="20px" display="flex">
  {/* SIDEBAR */}
  <Sidebar />

    <div style={{ margin: "7% " }} className='App'>
     <Typography variant='h1' style={{color:'darkblue'}} >Add Project Topic</Typography>

     <br/>
     <br/>
      <TextField fullWidth variant="outlined" value={form.topic} f label="Project Topic"
       onChange={(e)=>{
        setForm({...form,topic:e.target.value})
      }}/>
      <br/>
      <br/>
      <br/>
      
      <TextField
        variant="outlined" fullWidth value={form.batch}  label="Batch"
        onChange={(e)=>{
          setForm({...form,batch:e.target.value})
        }}
      />
      <br/>
      <br/>
      <br/>
      
      <TextField fullWidth variant="outlined" value={form.mentor}  label="Mentor Name"
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

export default AddTopic