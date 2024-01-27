import {
    Button,
    Card,
    CardContent,
    Grid,
    Typography,
    colors,
    Box
  } from "@mui/material";
import axios from "axios";
import MentSidebar from "./MentSidebar";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
   
  const  MentTopic=()=>{

    const [topics,setTopics] = useState([])
    

        const [form,setForm]=useState({
            topic:'',
            group:'',
            team_members:''
        })
  
    useEffect(()=>{
      axios.get('/api/project/').then((res)=>{
        console.log(res.data);
        setTopics(res.data);
      })
    },[])

    return (
      <Box m="20px" display="flex">
      
      <MentSidebar/>
      <div style={{color:colors.green}}  >
       <Typography variant="h1"  style={{color:'white' ,marginLeft:"6%", marginTop: "2%"}} >Project Topics</Typography>
       <br/>
      <Grid container spacing={2}>
           {topics.map((val,i)=>(
            
        <Grid item   sm={12} md={6}>
          <Card style={{ width: "550px", color: "white", marginLeft: "5%",  marginTop: "50px", backgroundColor: "#232640" }} >
          
            <CardContent>
                
              <Typography gutterBottom variant="1" component="div">
              {val.project_topic}
              </Typography>
              <br/>
              <Typography variant="body2" >
              {val.group}
              </Typography>
              <br/>

              <Typography gutterBottom variant="2" component="div">
              {val.team_members}
              </Typography>
              <br/>
              <Button style={{backgroundColor: "white"}}><Link to={'/table'} style={{ color: "grey " , textDecoration: "none", fontSize : "small"}}>View</Link></Button>
        
            </CardContent>
            
          </Card>
        </Grid>
        ))}
    
      </Grid>
      </div>
      </Box>
    );
           
  };

  export default MentTopic;