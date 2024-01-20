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
  
  
  
  
   
  const  MentTopic=()=>{
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

    return (
      <Box m="20px" display="flex">
      {/* SIDEBAR */}
      <MentSidebar/>
      <div style={{color:colors.green}}  >
       <Typography variant="h1"  style={{color:'darkblue'}}>Project Topics</Typography>
       <br/>
      <Grid container spacing={2}>
        
        <Grid item  xs={12} sm={6} md={4}>
          <Card sx={{ maxWidth: "500px" }} style={{color:"white", marginLeft: "5%"}} >
          
            <CardContent>
                
              <Typography gutterBottom variant="2" component="div">
              topic:
              </Typography>
              <br/>
              <Typography variant="body2" >
              group:
              </Typography>
              <br/>
              <Button variant="outlined" style={{backgroundColor:"white", color:"dark", marginLeft:'10px'}}><Link to={'/table'}>View</Link></Button>
             
              
                      
                   
            </CardContent>
            
          </Card>
        </Grid>
    
      </Grid>
      </div>
      </Box>
    );
  };
  
  export default MentTopic;