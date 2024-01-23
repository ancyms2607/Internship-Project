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
import Sidebar from "./Sidebar";
import { useEffect, useState } from "react";
import App from "../../../../src/App.css"
import AddTopic from "./AddTopic";
  
  
  
   
  const  Project=()=>{
    const [topicData,setData]=useState([]);
    var[update,setUpdate] = useState(false);
    var[singleValue,setSingleValue]=useState([])
  //    const topicData=[{
  //        Course: "Certified Specialist in Full Stack Development",
  //        ProjectTopic:"ICTAK Internship Portal-Admin and Mentor View",
  //        Batch:"KKEMFSDAUG2023",
  //        Mentor:"Mridula Reghunath"
  //    },
  //    {
  //        Course: "Certified Specialist in Full Stack Dvelopment",
  //        ProjectTopic:"ICTAK Internship Portal-Student View",
  //        Batch:"KKEMFSDAUG2023",
  //        Mentor:"Ashin Amanulla"
  //     }
  // ]
      // useEffect(()=>{
      //   axios.get('http://localhost:3001/api/v1/subject/getSubject').then((res)=>{
      //     console.log(res.data)
      //     setData(...topicData,res.data);
      //   }) 
      //   },[])
      useEffect(()=>{
        axios.get('http://localhost:3001/api/subject/getSubject').then((res)=>{
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
        axios.delete('http://localhost:3001/api/subject/deleteSubject/'+id).then((res)=>{
          alert(res.data.message);
          window.location.reload(false);
        })
      }
  
    let finalJSX= (
      
      <Box  display="flex" >
      {/* SIDEBAR */}
      <Sidebar />
      <div>
       <Typography variant="h1"  style={{color:'darkblue' , marginTop: "0" , textAlign: "center"}} >Project Topics</Typography>
       <br/>
      <Grid container spacing={2}>
        {topicData.map((val,i)=>(
          
        <Grid item key={i}  sm={12} md={6}>
        <Card style={{ width: "550px", color: "white", marginLeft: "5%", backgroundColor: "darkblue" }}>
            <CardContent>
            <Typography  variant="2" component='div' paddingLeft={'1%'}>
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
              <Button variant="outlined" style={{backgroundColor:"white", color:"grey", marginLeft:'10px'}} onClick={()=>{removeTopic(val._id)}}>Delete</Button>
             
              <Button  variant="outlined" className="btn btn-danger" style={{backgroundColor:"white", color:"grey", marginLeft:"10px"}} onClick={()=>updateTopic(val)}>Update</Button>
                      
                   
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