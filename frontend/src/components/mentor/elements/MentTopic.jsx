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
  
  
 
   
  const  MentTopic=(props)=>{

    const [topics,setTopics] = useState([])
    

        const [form,setForm]=useState({
            topic:'',
            group:''
        })
    
        // function submitForm(){
          
        //   if(props.method==="put"){
        //     axios.put("http://localhost:3001/api/subject/editSubject/"+props.data._id,form)
        //     .then((res)=>{
             
        //       if (res.data.message==="Topic updated successfully") {
        //        alert(res.data.message)
        //         window.location.reload(false);
          
                
        //       } else {
        //         alert("not updated")
        //       }
        //     })}
        //     else{
        //     axios.post('http://localhost:3001/api/subject/addSubject',form).then((res)=>{
        //       alert(res.data.message);
           
        //     })}
         
      


    useEffect(()=>{
      axios.get('http://localhost:3001/api/project/').then((res)=>{
        console.log(res.data);
        setTopics(res.data);
      })
    },[])

    return (
      <Box m="20px" display="flex">
      
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
              <Button variant="outlined" style={{backgroundColor:"white", color:"dark", marginLeft:'10px'}}><Link to={'/table'}>
                View
                </Link>
                </Button>

             
              
                      
                   
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