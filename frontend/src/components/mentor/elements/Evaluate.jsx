// import React from 'react'
// import { Button, TextField, Typography , Box} from "@mui/material";
// import  { useEffect, useState } from "react";
// import {redirect} from "react-router-dom";
// import axios from 'axios';
// import {tokens} from "../../../theme"
// import App from './../../../../src/App.css';
// import MentSidebar from './MentSidebar';

// const Evaluate = (props) => {

//      const [form,setForm]=useState({
//         topic:props.data.topic,
//         batch:props.data.batch,
//         mentor:props.data.mentor
//      }) 

//      function submitform(){
//       if(props.method==="put"){
//         axios.put("http://localhost:3000/blogs/edit/"+props.data._id,form)
//         .then((response)=>{
         
//           if (response.data==="Updated successfully") {
//            alert(response.data)
//             window.location.reload(false);
      
            
//           } else {
//             alert("not updated")
//           }
//         })}
//         else{
//         axios.post('http://localhost:4000/blogs/add',form).then((res)=>{
//           alert(res.data);
       
//         })}
     
//     }
//   return (

//     <Box m="20px" display="flex">
//     {/* SIDEBAR */}
//     <MentSidebar />
//     <div style={{ margin: "7% 20% 2% 20%" }} className='App'>
//      <Typography variant='h2' style={{color:'darkblue'}} >Let's Evaluate...</Typography>

//      <br/>
     
    
//       <TextField fullWidth variant="outlined"  type="text" label="Status"
//       onChange={(e)=>{
//        setForm({...form,topic:e.target.value})
//      }}/>
//      <br/>
//      <br/>
  
//       <TextField fullWidth variant="outlined"  type="text" label="Batch"
//      onChange={(e)=>{
//       setForm({...form,topic:e.target.value})
//     }}/>
//     <br/>
//     <br/>
    
//       <TextField fullWidth variant="outlined"  type="text" label="Topic"
//        onChange={(e)=>{
//         setForm({...form,topic:e.target.value})
//       }}/>
//       <br/>
//       <br/>
//       <TextField
//         variant="outlined" fullWidth  type="text" label="Student Name"
//         onChange={(e)=>{
//           setForm({...form,batch:e.target.value})
//         }}
//       />
//       <br/>
//       <br/>
      
//       <TextField fullWidth variant="outlined" value={form.mentor} type='text' label="Link"
//        onChange={(e)=>{
//         setForm({...form,mentor:e.target.value})
//       }} />
//       <br/>
//       <br/>
//       <TextField
//         variant="outlined" fullWidth  type="number" label="Score"
//         onChange={(e)=>{
//           setForm({...form,batch:e.target.value})
//         }}
//       />
//       <br/>
//       <br/>
//       <TextField
//         variant="outlined" fullWidth  type="text" label="Comments"
//         onChange={(e)=>{
//           setForm({...form,batch:e.target.value})
//         }}
//       />
//       <br/>
//       <br/>
//       <br/>
      
     
//           <Button variant="contained" style={{backgroundColor:"white" , color:"black"}}onClick={submitform} >
//             Submit
//           </Button>
//     </div>
//     </Box>
//   );

//     }

// export default Evaluate






import React from 'react'
import { Button, TextField, Typography , Box} from "@mui/material";
import  { useEffect, useState } from "react";
import {redirect,useNavigate} from "react-router-dom";
import axios from 'axios';
import {tokens} from "../../../theme"
import App from './../../../../src/App.css';
import MentSidebar from './MentSidebar';

const Evaluate = (props) => {

     const [form,setForm]=useState({
        status:props.data.status,
        batch:props.data.batch,
        topic:props.data.topic,
        student_name:props.data.student_name,
        link:props.data.link,
        score:props.data.score,
        comments:props.data.comments
     }) 
     const navigate=useNavigate()

     function submitform(){
      if(props.method==="put"){
        axios.put("http://localhost:3001/api/evaluate/update/"+props.data._id,form)
        .then((res)=>{
         
          if (res.data.message==="not updated") {
           alert(res.data.message)
            window.location.reload(false);
      
            
          } else {
            alert("Evaluation updated successfully")
          }
        })}
        else{
        axios.post('http://localhost:3001/api/evaluate/',form).then((res)=>{
          alert(res.data);
          navigate('/evals')
       
        })}
     
    }
  return (

    <Box m="20px" display="flex">
    {/* SIDEBAR */}
    <MentSidebar />
    <div style={{ marginTop: "2%", margin: "0% 20% 2% 20%" }} className='App'>
     <Typography variant='h2' style={{color:"white"}} >Update Evaluation</Typography>

     <br/>
     
    
      <TextField fullWidth variant="outlined"  type="text" label="Status" multiline rows={2}
      onChange={(e)=>{
       setForm({...form,topic:e.target.value})
     }} value={form.status}/>
     <br/>
     <br/>
  
      <TextField fullWidth variant="outlined"  type="text" label="Batch" multiline rows={2}
     onChange={(e)=>{
      setForm({...form,topic:e.target.value})
    }} value={form.batch}/>
    <br/>
    <br/>
    
      <TextField fullWidth variant="outlined"  type="text" label="Topic" multiline rows={2}
       onChange={(e)=>{
        setForm({...form,topic:e.target.value})
      }} value={form.topic}/>
      <br/>
      <br/>
      <TextField
        variant="outlined" fullWidth  type="text" label="Student Name" multiline rows={2}
        onChange={(e)=>{
          setForm({...form,batch:e.target.value})
        }} value={form.student_name}
      />
      <br/>
      <br/>
      
      <TextField fullWidth variant="outlined" type='text' label="Link" multiline rows={2}
       onChange={(e)=>{
        setForm({...form,mentor:e.target.value})
      }} value={form.link} />
      <br/>
      <br/>
      <TextField
        variant="outlined" fullWidth  type="number" label="Score" multiline rows={2}
        onChange={(e)=>{
          setForm({...form,batch:e.target.value})
        }} value={form.score}
      />
      <br/>
      <br/>
      <TextField
        variant="outlined" fullWidth  type="text" label="Comments" multiline rows={2}
        onChange={(e)=>{
          setForm({...form,batch:e.target.value})
        }} value={form.comments}
      />
      <br/>
      <br/>
      <br/>
      
     
          <Button variant="contained" style={{backgroundColor:"white" , color:"black"}}onClick={submitform} >
            Done
          </Button>
    </div>
    </Box>
  );

}

export default Evaluate
