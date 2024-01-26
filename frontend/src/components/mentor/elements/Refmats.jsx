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
    const [reference,setRef] = useState([]);
    
    
    useEffect(()=>{
      axios.get('http://localhost:3001/api/refmat/getRef').then((res)=>{
        // console.log(res.data);
        setRef(...reference,res.data)
        
      })
 },[])


 
function removeRef(id){
  axios.delete('http://localhost:3001/api/refmat/deleteRef/'+id).then((res)=>{
   
  alert(res.data.message);
  window.location.reload(false);
    } )}
   
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
        {reference.map((val,i)=>(
    
            <Grid item key={i}  sm={16} md={8}>

            <Card sx={{ maxWidth: 500 }} style={{color:"white", marginLeft: "5%"}} >
            
                <CardContent>
                  
                  <Typography gutterBottom variant="h3" component="div">
                    
                    {val.references}
                  </Typography>
                  <br/>
                  <Button variant="outlined" style={{backgroundColor:"white", color:"black",marginRight:"50px"}}onClick={()=>{removeRef(val._id)}}>
                    Delete</Button>
                 
                  
                          
                       
                </CardContent>
                </Card>
                </Grid>
           
          
        ))}

</Grid>   
       </div>
       </Box>
  
  )
        }    
  
  export default Refmats;