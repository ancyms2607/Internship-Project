import {
    Button,
    Card,
    CardActions,
    CardContent,
    CardMedia,
    Grid,
    Typography,
    Box
  } from "@mui/material";
  import axios from "axios";
  import React, { useEffect, useState } from "react";
  import {tokens} from "../../../theme"
  import App from "../../../../src/App.css"
  
import MentSidebar from "./MentSidebar";
  
  const Evaluations = () => {
  const [form,setForm]=useState([]);
  
    useEffect(()=>{
      axios.get('http://localhost:3001/api/evaluate/').then((res)=>{
        console.log(res.data);
        setForm(res.data)
      })
    },[])
   
   return(
    <Box m="20px" display="flex">
        {/* SIDEBAR */}
        <MentSidebar/>
      
       <div >
        <Typography variant="h1" style={{color:"darkblue", margin: "1%"}} >
                    Explore your Evaluation;
                  </Typography>
        <br/>
        <Grid container spacing={2}>
             {form.map((val,i)=>(
            <Grid item  xs={12} sm={6} md={4}>
            <Card style={{width: "950px" , marginLeft: "5%"}}>
                
              
            
                <CardContent>
{/*                 
                <Typography gutterBottom variant="h5" component="div" paddingLeft={'1%'}>

                </Typography> */}
           
                  
                  <Typography gutterBottom variant="h5" component="div">
                    {val.status}
                  </Typography>
                  <br/>
                    <Typography variant="body2" type="text">
                      {val.batch}
                    </Typography>
                    <br/>
                    <Typography variant="body2" type="number">
                      {val.topic}
                  </Typography>
                  <br/>
                  <Typography variant="body2" type="password">
                      {val.student_name}
                  </Typography>
                  <br/>
                  <Typography variant="body2" type="text" >
                    {val.link}
                  </Typography>
                  <br/>
                  <Typography variant="body2" type="text" >
                     {val.score}
                  </Typography>
                  <br/>
                  <Typography variant="body2" type="text" >
                    {val.comments}
                  </Typography>
                  <br/>
                  
                 
                  <Button  variant="outlined" className="btn btn-danger" style={{backgroundColor:"white", color:"black",marginLeft:"5px"}}>Update</Button>
                          
                       
                </CardContent>
                </Card>
                </Grid>
                ))}
              
          
        </Grid>
        
       </div>
       </Box>
    )
   
          }
  
  export default Evaluations;
  