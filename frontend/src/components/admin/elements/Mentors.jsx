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
import Sidebar from "./Sidebar";

const Mentors = () => {


 
 return(
  <Box m="20px" display="flex">
      {/* SIDEBAR */}
      <Sidebar />
    
     <div >
      <Typography variant="h1" style={{color:"darkblue", margin: "1%"}} >
                  Mentors of ICT Academy Kerala
                </Typography>
      <br/>
      <Grid container spacing={2}>
  
          <Grid item  xs={12} sm={6} md={4}>
          <Card sx={{ maxWidth: 350 }} style={{color:"white", marginLeft: "5%"}} >
          
              <CardContent>
                
                <Typography gutterBottom variant="h5" component="div">
                  Mentor name:
                </Typography>
                <br/>
                  <Typography variant="body2" type="text">
                    Email:
                  </Typography>
                  <br/>
                  <Typography variant="body2" type="number">
                Phone number:
                </Typography>
                <br/>
                <Typography variant="body2" type="password">
                Password:
                </Typography>
                <br/>
                <Typography variant="body2" type="text" >
                  Project topic:
                </Typography>
                <br/>
                <Button variant="outlined" style={{backgroundColor:"white", color:"black",marginLeft:"5px"}}>Delete</Button>
               
                <Button  variant="outlined" className="btn btn-danger" style={{backgroundColor:"white", color:"black",marginLeft:"5px"}}>Update</Button>
                        
                     
              </CardContent>
              </Card>
              </Grid>
            
        
      </Grid>
      
     </div>
     </Box>
  )
 
        }

export default Mentors;

