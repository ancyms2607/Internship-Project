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
import Sidebar from "./Sidebar";
import MentForm from "./MentForm";


const Mentors = () => {
  const [mentor,setMentor] = useState([]);
  var[update,setUpdate] = useState(false);
  var[singleValue,setSingleValue]=useState([])


 useEffect(()=>{
        axios.get('http://localhost:3001/api/mentor/getDetails').then((res)=>{
          // console.log(res.data);
          setMentor(res.data)
          console.log(mentor)
        })
 },[])

 const updateMentor = (val)=>{
  console.log("update clicked",val);
  setUpdate(true);
  setSingleValue(val)
}

function removeMentor(id){
  axios.delete('http://localhost:3001/api/mentor/deleteDetails/'+id).then((res)=>{
    alert(res.data.message);
    window.location.reload(false);
  })
}
 
let finalJSX=(
  <Box  display="flex">
      {/* SIDEBAR */}
      <Sidebar />
    
     <div >
      <Typography variant="h1"  style={{color:'white', textAlign: "center", marginTop: "3%"}} >Mentors of ICT Academy Kerala</Typography>
      <br/>
      <Grid container spacing={2}>
             {mentor.map((val,i)=>(
          <Grid item key={i}  md={12} >
          <Card style={{ width: "1100px", color: "white", margin: "5%", backgroundColor: "darkblue" }} >
          
              <CardContent>
                
                <Typography gutterBottom variant="h5" component="div" paddingLeft={'1%'}>
                  {val.MentorName}
                </Typography>
                <br/>
                  <Typography variant="body2" type="text">
                    {val.Email}
                  </Typography>
                  <br/>
                  <Typography variant="body2" type="number">
                     {val.PhoneNumber}
                </Typography>
                <br/>
                <Typography variant="body2" type="password">
                {val.Password}
                </Typography>
                <br/>
                <Typography variant="body2" type="text" >
                  {val.ProjectTopics}
                </Typography>
                <br/>
                <Button variant="outlined" style={{backgroundColor:"white", color:"black",marginLeft:"5px"}} onClick={()=>{removeMentor(val._id)}}>Delete</Button>
               
                <Button  variant="outlined" className="btn btn-danger" style={{backgroundColor:"white", color:"black",marginLeft:"5px"}}  onClick={()=>updateMentor(val)} >Update</Button>
                        
                     
              </CardContent>
              </Card>
              </Grid>
              ))}
            
            
        
      </Grid>
      
     </div>
     </Box>
  )
  if(update) finalJSX=<MentForm method="put" data={singleValue}/>
  return (
  
    
     finalJSX
     
   
    )
    }
    

export default Mentors;

