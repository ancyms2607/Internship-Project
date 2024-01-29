import {
  Button,
  Card,
  CardContent,
  Grid,
  Typography,
  Box
} from "@mui/material";
import axios from "axios";
import React, { useEffect, useState } from "react";
import MentSidebar from "./MentSidebar";
import Evaluate from "./Evaluate";

const Evaluations = () => {
const [form,setForm]=useState([]);
var[update,setUpdate] = useState(false);
var[singleValue,setSingleValue]=useState([])

  useEffect(()=>{
    axios.get('/api/evaluate/').then((res)=>{
      console.log(res.data);
      setForm(res.data)
    })
  },[])
  const updateEvaluation = (val)=>{
    console.log("update clicked",val);
    setUpdate(true);
    setSingleValue(val)
  }

  let finalJSX= (

  <Box m="20px" display="flex">
      {/* SIDEBAR */}
      <MentSidebar/>
    
     <div >
        <Typography variant="h1" style={{color:'white' , marginTop: "2%" , marginLeft:"6%"}} >
                  Explore Your Evaluation
        </Typography>
        <br/>
        <Grid container spacing={2}>
          
           {form.map((val,i)=>(
            
          <Grid item key={i} md={12}>
            <Card style={{ width: "1100px", color: "white", marginLeft: "5%", background:  "#232640"}}>
              <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                Status :  {val.status}
                </Typography>
                <br/>
                  <Typography variant="body2" type="text">
                    Batch : {val.batch}
                  </Typography>
                  <br/>
                  <Typography variant="body2" type="number">
                  Topic :  {val.topic}
                </Typography>
                <br/>
                <Typography variant="body2" type="password">
                  Student Name :  {val.student_name}
                </Typography>
                <br/>
                <Typography variant="body2" type="text" >
                Link :  {val.link}
                </Typography>
                <br/>
                <Typography variant="body2" type="text" >
                 Score :  {val.score}
                </Typography>
                <br/>
                <Typography variant="body2" type="text" >
                Comments :  {val.comments}
                </Typography>
                <br/>
                
               
                <Button  variant="outlined" className="btn btn-danger" style={{backgroundColor:"white", color:"black",marginLeft:"5px"}}  onClick={()=>updateEvaluation(val)}>Update</Button>
                        
                     
              </CardContent>
              </Card>
              </Grid>
              ))}
            
        
      </Grid>
      
     </div>
     </Box>
  )
  if(update) finalJSX=<Evaluate method="put" data={singleValue}/>
return (

 finalJSX
 
)
 }

export default Evaluations;

