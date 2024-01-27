import {
    Button,
    Card,
    CardContent,
    Grid,
    Typography,
    Box
  } from "@mui/material";
import axios from "axios";
import Sidebar from "./Sidebar";
import { useEffect, useState } from "react";
import AddTopic from "./AddTopic";
  
   
  const  Project=()=>{
    const [topicData,setData]=useState([]);
    var[update,setUpdate] = useState(false);
    var[singleValue,setSingleValue]=useState([])
 
      useEffect(()=>{
        axios.get('/api/subject/getSubject').then((res)=>{
          console.log(res.data);
          setData(...topicData, res.data);
        })
      },[])
      
      const updateTopic = (val)=>{
        console.log("update clicked",val);
        setUpdate(true);
        setSingleValue(val)
      }

      function removeTopic(id){
        axios.delete('/api/subject/deleteSubject/'+id).then((res)=>{
          alert(res.data.message);
          window.location.reload(false);
        })
      }
  
    let finalJSX= (
      
      <Box  display="flex" >
      {/* SIDEBAR */}
      <Sidebar />
      <div>
       <Typography variant="h1"  style={{color:'white' , marginTop: "2%" , textAlign: "center"}} >Project Topics</Typography>
       <br/>
      <Grid container spacing={2}>
        {topicData.map((val,i)=>(
          
        <Grid item key={i}  sm={12} md={6}>
        <Card style={{ width: "550px", color: "white", marginLeft: "5%", backgroundColor: "#232640" }}>
           
           <CardContent>
                
                <Typography gutterBottom variant="h5" component="div" paddingLeft={'1%'}>
           
              {val.Course}
              </Typography>
              <br/>
              <Typography  variant="2" component='div' >
              {val.ProjectTopic}
              </Typography>
              <br/>
              <Typography variant="body2" >
               {val.Batch} 
              </Typography>
              <br/>
              <Typography variant="body2" >
               {val.Mentor} 
              </Typography>
              <br/>
              <Button variant="outlined" style={{backgroundColor:"white", color:"black", marginLeft:'10px', borderRadius:"10px" }} onClick={()=>{removeTopic(val._id)}}>Delete</Button>
             
              <Button  variant="outlined" className="btn btn-danger" style={{backgroundColor:"white", color:"black", marginLeft:"10px", borderRadius:"10px" }} onClick={()=>updateTopic(val)}>Update</Button>
                      
                   
            </CardContent>
            
          </Card>
        </Grid>
        ))}
    
      </Grid>
      </div>
      </Box>
      
    )
    if(update) finalJSX=<AddTopic method="put" data={singleValue}/>
return (

  finalJSX
   
  )
  };
  
  export default Project;