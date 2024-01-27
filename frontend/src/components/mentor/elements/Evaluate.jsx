import React from 'react'
import { Button, TextField, Typography , Box} from "@mui/material";
import  { useState } from "react";
import {useNavigate} from "react-router-dom";
import axios from 'axios';
import MentSidebar from './MentSidebar';

const Evaluate = (props) => {

     const [form,setForm]=useState({
        status:props.data.status,
        batch:props.data.batch,
        topic:props.data.topic,
        student_name:props.data.student_name,
        link:props.data.link,
        score:props.data.score,
        comments:props.data.comments
     }) 
     const navigate=useNavigate()

     function submitform(){
      if(props.method==="put"){
        axios.put("/api/evaluate/update/"+props.data._id,form)
        .then((res)=>{
         
          if (res) {
           alert("Evaluation Updated!!")
            window.location.reload(false);
      
            
          } else {
            alert("Not updated")
          }
        })}
        else{
        axios.post('/api/evaluate/',form).then((res)=>{
          alert(res.data);
          navigate('/evals')
       
        })}
     
    }
  return (

    <Box m="20px" display="flex">
    {/* SIDEBAR */}
    <MentSidebar />
    <div style={{ marginTop: "2%", margin: "0% 20% 2% 20%" }} className='App'>
     <Typography variant='h2' style={{color:"white"}} >Update Evaluation</Typography>
<br/>
      <TextField fullWidth variant="outlined"  type="text" label="Status" multiline rows={2}
      value={form.status}/>
     <br/>
     <br/>
      <TextField fullWidth variant="outlined"  type="text" label="Batch" multiline rows={2}
      value={form.batch}/>
    <br/>
    <br/>
      <TextField fullWidth variant="outlined"  type="text" label="Topic" multiline rows={2}
        value={form.topic}/>
      <br/>
      <br/>
      <TextField
        variant="outlined" fullWidth  type="text" label="Student Name" multiline rows={2}
       value={form.student_name}
      />
      <br/>
      <br/>
      <TextField fullWidth variant="outlined" type='text' label="Link" multiline rows={2}
       value={form.link} />
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
      <Button variant="contained" style={{backgroundColor:"white" , color:"black"}}onClick={submitform} >
            Done
          </Button>
    </div>
    </Box>
  );

}

export default Evaluate
