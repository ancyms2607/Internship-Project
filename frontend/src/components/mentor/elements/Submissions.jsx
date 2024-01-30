import {
    Button,
    Card,
    CardContent,
    Grid,
    Typography,
    Box,
    TextField
  } from "@mui/material";
import axios from "axios";
import React, { useEffect, useState } from "react";
import MentSidebar from "./MentSidebar";
import SearchIcon from '@mui/icons-material/Search';

  const Submissions = () => {
  const [sub,setSub]=useState([])
  const [filter,setFilter]=useState('')
  const [topic,setTopic]=useState('')
  const [batch,setBatch]=useState('')

  useEffect(()=>{
    try {
      axios.get('/api/list').then((res)=>{
          setSub(res.data)
      })
    } catch (error) {
      console.error(error);
    }
    
  },[])

  const filterSub = () => {
    try {
      axios.post('/api/list/filter',{batch:batch,topic:topic}).then((res)=>{
      setSub(res.data)
    })
    } catch (error) {
      console.error(error)
    }
    
  }

  
function removeSub(id){
  axios.delete('/api/list/deleteSubmission/'+id).then((res)=>{
    alert(res.data.message);
    window.location.reload(false);
  })
}
   
   return(
    <Box m="20px" display="flex">
        {/* SIDEBAR */}
        <MentSidebar/>
      
       <div >
        <Typography variant="h1" style={{color:'white', marginLeft:"5%", marginTop: "3%"}}>
                    Submissions
         </Typography>
        <br/>
      <TextField style={{margin:" 0 28px "}} id="outlined-basic" placeholder="Search Topic" variant="outlined" value={topic} onChange={(e)=>{
        setTopic(e.target.value)
      }} /> 
      <TextField style={{margin:"0 15px"}} id="outlined-basic" placeholder="Search Batch" variant="outlined" value={batch} onChange={(e)=>{
        setBatch(e.target.value)
      }} /> 
        <Button variant="filled" style={{color: "white", backgroundColor: "darkcyan"}} startIcon={<SearchIcon/>} onClick={filterSub}>Filter Projects</Button>
        <Grid container spacing={2}>
           {sub.map((val,i)=>(
            <Grid item key={i}   md={6}>
            <Card  style={{ width: "500px", color: "white", margin: "5%", backgroundColor: "#232640" }} >
            
                <CardContent>
                  
                  <Typography gutterBottom variant="h5" component="div">
                   Group: {val.group}
                  </Typography>
                  <br/>
                  <Typography gutterBottom variant="h5" component="div">
                    {val.topic}
                  </Typography>
                  <br/>

                  <Typography gutterBottom variant="h5" component="div">
                    {val.batch}
                  </Typography>
                  <br/>

                    <Typography variant="body2" type="text">
                      <Typography>
                      {val.submissionLink[0]}
                      </Typography>
                      <Typography>
                      {val.submissionLink[1]}
                      </Typography>
                      <Typography>
                      {val.submissionLink[2]}
                      </Typography>
                      <Typography>
                      {val.submissionLink[3]}
                      </Typography>

                      
                    </Typography>
                    <br/>
                  <br/>
                  <Button variant="outlined" style={{backgroundColor:"white", color:"black",marginLeft:"5px"}}  onClick={()=>{removeSub(val._id)}} >Delete</Button>
                 
                
                          
                       
                </CardContent>
                </Card>
                </Grid>
                ))}
              
          
        </Grid>
        
       </div>
       </Box>
    )
   
          }
  
  export default Submissions;
  