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
  
  const Submissions = () => {
  
  
   
   return(
    <Box m="20px" display="flex">
        {/* SIDEBAR */}
        <MentSidebar/>
      
       <div >
        <Typography variant="h1" style={{color:'white', textAlign: "center", marginTop: "3%"}}>
                    Submissions of KKEM AUGUST 2023 BATCH
                  </Typography>
        <br/>
        <Grid container spacing={2}>
    
            <Grid item   sm={12} md={6}>
            <Card sx={{ maxWidth: 350 }} style={{ width: "1100px", color: "white", margin: "5%", backgroundColor: "darkblue" }} >
            
                <CardContent>
                  
                  <Typography gutterBottom variant="h5" component="div">
                    Group:
                  </Typography>
                  <br/>
                    <Typography variant="body2" type="text">
                      Submissions:
                    </Typography>
                    <br/>
                  <br/>
                  <Button variant="outlined" style={{backgroundColor:"white", color:"black",marginLeft:"5px"}}>Delete</Button>
                 
                
                          
                       
                </CardContent>
                </Card>
                </Grid>
              
          
        </Grid>
        
       </div>
       </Box>
    )
   
          }
  
  export default Submissions;
  