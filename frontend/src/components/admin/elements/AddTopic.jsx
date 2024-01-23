import React from 'react'
import { Button, TextField, Typography,Box } from "@mui/material";
import  { useEffect, useState } from "react";
import {redirect} from "react-router-dom";
import axios from 'axios';
import {tokens} from "../../../theme"
import Sidebar from './Sidebar';
import topicadd from "../../../../src/App.css"

const AddTopic = (props) => {
    const [form,setForm]=useState({
        Course:'',
        ProjectTopic:'',
        Batch:'',
        Mentor:''
    })

    function submitForm(){
      // axios.post('http://localhost:3001/api/subject/addSubject',form).then((res)=>{
      //   alert(res.data.message);
      // })
      if(props.method==="put"){
        axios.put("http://localhost:3001/api/subject/editSubject/"+props.data._id,form)
        .then((res)=>{
         
          if (res.data.message==="Topic updated successfully") {
           alert(res.data.message)
            window.location.reload(false);
      
            
          } else {
            alert("not updated")
          }
        })}
        else{
        axios.post('http://localhost:3001/api/subject/addSubject',form).then((res)=>{
          alert(res.data.message);
       
        })}
     
    }
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

    <div style={{ margin: " 5%  25% ", textAlign: "center" }}  >
     <Typography variant='h1' style={{color:'darkblue', textAlign: "center"}} >Add Project Topic</Typography>

     <br/>
     <br/>
     <br/>
     <TextField fullWidth style={{paddingBottomBottom: "45px"}} multiline rows={2}  variant="outlined"   label="Course"
       onChange={(e)=>{
        setForm({...form,Course:e.target.value})
      }}/>
      <br/>
      <br/>
      <br/>
      <TextField fullWidth style={{paddingBottomBottom: "45px"}} multiline rows={2} variant="outlined"   label="Project Topic"
       onChange={(e)=>{
        setForm({...form,ProjectTopic:e.target.value})
      }}/>
      <br/>
      <br/>
      <br/>
      <TextField
        variant="outlined" fullWidth   multiline rows={2} label="Batch"
        onChange={(e)=>{
          setForm({...form,Batch:e.target.value})
        }}
      />
      <br/>
      <br/>
      <br/>
      <TextField fullWidth variant="outlined"  multiline rows={2}  label="Mentor Name"
       onChange={(e)=>{
        setForm({...form,Mentor:e.target.value})
      }} />
      <br/>
      <br/>
      <br/>
      
      
      <Button variant="contained" style={{backgroundColor:"white" , color:"black"}} onClick={submitForm} >
            Submit
          </Button>
    </div>
    </Box>
  );
    }

export default AddTopic