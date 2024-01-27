import React from 'react'
import { Button, TextField, Typography , Box} from "@mui/material";
import  { useState } from "react";
import {useNavigate} from "react-router-dom";
import axios from 'axios';
import MentSidebar from './MentSidebar';

const Valuation = () => {
    const [form,setForm]=useState({
        status:'',
        batch:'',
        topic:'',
        student_name:'',
        link:'',
        score:'',
        comments:''
    })
    const navigate=useNavigate()

    function submitValuation(){
        axios.post('/api/evaluate/',form).then((res)=>{
         alert(res.data.message)
         navigate('/evals');
        })
      
  }

  return (
    <Box m="20px" display="flex">
    {/* SIDEBAR */}
    <MentSidebar />
    <div style={{ marginTop: "2%", margin: "0% 20% 2% 20%" }} className='App'>
     <Typography variant='h2' style={{color:"white"}} >Evaluate</Typography>

     <br/>
     
    
      <TextField fullWidth variant="outlined"  type="text" label="Status" multiline rows={2}
      onChange={(e)=>{
       setForm({...form,status:e.target.value})
     }} value={form.status}/>
     <br/>
     <br/>
  
      <TextField fullWidth variant="outlined"  type="text" label="Batch" multiline rows={2}
     onChange={(e)=>{
      setForm({...form,batch:e.target.value})
    }} value={form.batch}/>
    <br/>
    <br/>
    
      <TextField fullWidth variant="outlined"  type="text" label="Topic" multiline rows={2}
       onChange={(e)=>{
        setForm({...form,topic:e.target.value})
      }} value={form.topic}/>
      <br/>
      <br/>
      <TextField
        variant="outlined" fullWidth  type="text" label="Student Name" multiline rows={2}
        onChange={(e)=>{
          setForm({...form,student_name:e.target.value})
        }} value={form.student_name}
      />
      <br/>
      <br/>
      
      <TextField fullWidth variant="outlined" type='text' label="Link" multiline rows={2}
       onChange={(e)=>{
        setForm({...form,link:e.target.value})
      }} value={form.link} />
      <br/>
      <br/>
      <TextField
        variant="outlined" fullWidth  type="number" label="Score" multiline rows={2}
        onChange={(e)=>{
          setForm({...form,score:e.target.value})
        }} value={form.score}
      />
      <br/>
      <br/>
      <TextField
        variant="outlined" fullWidth  type="text" label="Comments" multiline rows={2}
        onChange={(e)=>{
          setForm({...form,comments:e.target.value})
        }} value={form.comments}
      />
      <br/>
      <br/>
      <br/>
      
     
          <Button variant="contained" style={{backgroundColor:"white" , color:"black"}}onClick={submitValuation} >
            Done
          </Button>
    </div>
    </Box>
  )
}

export default Valuation