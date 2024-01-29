import React from 'react'
import { Button, TextField, Typography,Box } from "@mui/material";
import  { useState } from "react";
import axios from 'axios';
import MentSidebar from './MentSidebar';


//useEffect

const AddRefmat = (props) => {
    const [form,setForm]=useState([]);

    function submitform(){
        
        axios.post("/api/refmat/addRef",form)
        .then((res)=>{
          if(res.data.message==="Reference material added!"){
            alert(res.data.message)
           
         
     } })}
   
            
return(
  <Box m="20px" display="flex">
 
  <MentSidebar />

    <div style={{marginLeft:"10%"}} className='App'>
     <Typography variant='h1' style={{color:'white'}} >Add Reference Materials</Typography>
     <br/>
     <br/>
     <label>Reference Material</label>
      <TextField fullWidth variant="outlined" value={form.references}  
       onChange={(e)=>{
        setForm({...form,references:e.target.value})
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