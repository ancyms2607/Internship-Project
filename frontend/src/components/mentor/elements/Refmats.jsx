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
  
  const Refmats = () => {
   
  
   
   return(
    <Box m="20px" display="flex">
        {/* SIDEBAR */}
        <MentSidebar />
      
       <div >
        <Typography variant="h2" style={{color:"darkblue", margin: "20px"}} >
                    Reference Materials for better practice
                  </Typography>
        <br/>
        <Grid container spacing={2}>
    
            <Grid item  xs={12} sm={6} md={4}>
            <Card sx={{ maxWidth: 350 }} style={{color:"white", marginLeft: "5%"}} >
            
                <CardContent>
                  
                  <Typography gutterBottom variant="h3" component="div">
                    Reference:
                  </Typography>
                  <br/>
                  <Button variant="outlined" style={{backgroundColor:"white", color:"black",marginRight:"50px"}}>
                    Delete</Button>
                 
                  
                          
                       
                </CardContent>
                </Card>
                </Grid>
              
          
        </Grid>
        
       </div>
       </Box>
    )
   
          }
  
  export default Refmats;