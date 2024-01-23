import {
    Button,
    Card,
    CardContent,
    CardMedia,
    Grid,
    Typography,
    colors,
    Box
  } from "@mui/material";
  import axios from "axios";
  import App from "../../../../src/App.css"
  import MentSidebar from "./MentSidebar";
import { DatasetLinkedTwoTone } from "@mui/icons-material";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
  
  
  
  
   
  const  MentTopic=()=>{
    const [topics,setTopics] = useState([])
    // const topicData=[{
    //     topic:"ICTAK Internship Portal-Admin and Mentor View",
    //     batch:"KKEMFSDAUG2023",
    //     mentor:"Mridula Reghunath"
    // },
    // {
    //     topic:"ICTAK Internship Portal-Student View",
    //     batch:"KKEMFSDAUG2023",
    //     mantor:"Ashin Amanulla"
    // }

    useEffect(()=>{
      axios.get('http://localhost:3001/api/project/').then((res)=>{
        console.log(res.data);
        setTopics(res.data);
      })
    },[])

    return (
      <Box m="20px" display="flex">
      {/* SIDEBAR */}
      <MentSidebar/>
      <div style={{color:colors.green}}  >
       <Typography variant="h1"  style={{color:'darkblue'  , marginTop: "5%" , textAlign: "center"}}>Project Topics</Typography>
       <br/>
      <Grid container spacing={2}>
           {topics.map((val,i)=>(
            
        <Grid item   sm={12} md={6}>
          <Card style={{ width: "550px", color: "white", marginLeft: "5%",  marginTop: "70px", backgroundColor: "darkblue" }} >
          
            <CardContent>
                
              <Typography gutterBottom variant="2" component="div">
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