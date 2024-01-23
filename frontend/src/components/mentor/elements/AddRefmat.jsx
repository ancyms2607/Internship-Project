import React from 'react'
import { Button, TextField, Typography,Box } from "@mui/material";
import  { useEffect, useState } from "react";
import {redirect} from "react-router-dom";
import axios from 'axios';
import {tokens} from "../../../theme"
import App from "../../../../src/App.css"
import MentSidebar from './MentSidebar';


//useEffect

const AddRefmat = (props) => {
    const [form,setForm]=useState({
        topic:''
       
    });

    function submitform(){
      if(props.method==="post"){
        axios.post("http://localhost:3001/api/refmat/addref"+props.data._id,form)
        .then((res)=>{
          if(res.data.message==="Material Upload Successfully"){
            alert(res.data.message)
            window.location.reload(false);
          }else{
            alert("Not upload")
            }

          })}
          
        }
          
return(
  <Box m="20px" display="flex">
 
  <MentSidebar />

    <div style={{marginLeft:"10%"}} className='App'>
     <Typography variant='h1' style={{color:'darkblue'}} >Add Reference Materials</Typography>

     <br/>
     <br/>
     <label>Reference Material</label>
      <TextField fullWidth variant="outlined" value={form.topic}  
       onChange={(e)=>{
        setForm({...form,topic:e.target.value})
      }}/>
      
      <br/>
      <br/>
      <br/>
    
      
      <Button variant="contained" style={{backgroundColor:"white" , color:"black"}}  onClick={submitform}>
            Submit
          </Button>
    </div>
    </Box>
  );
    }

export default  AddRefmat