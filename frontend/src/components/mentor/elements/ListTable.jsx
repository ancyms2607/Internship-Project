import React, { useEffect, useState } from 'react'
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import axios from 'axios';
import { Typography } from '@mui/material';


const ListTable = () => {
  const [list,setList]= useState([])
    
useEffect(()=>{
    axios.get('http://localhost:3001/api/list').then((res)=>{
      setList(res.data);
    })
},[])
     
  return (
    <>
    <Typography variant="h1" style={{color:'white', textAlign: "center", marginTop: "3%"}} >Evaluation Status</Typography>

    <TableContainer component={Paper} style={{width:'80%', marginTop: "4%", marginLeft : "10%" , backgroundColor: "#232640"}}>
      
      
      
    <Table style={{ width: "100%", color: "white", marginLeft: "5%" }}>
      <TableHead>
        <TableRow>
          <TableCell>Group No:</TableCell>
          <TableCell>Submissions</TableCell>
          <TableCell>Status</TableCell>
        
        </TableRow>
      </TableHead>
      
      <TableBody>
      {list.map((val,i)=>(
        
            <TableRow key={i}>
               <TableCell>{val.group}</TableCell>
               <TableCell rows={5}>
               <TableCell>{val.submissionLink[0]}</TableCell><br/>
               <TableCell>{val.submissionLink[1]}</TableCell><br/>
               <TableCell>{val.submissionLink[2]}</TableCell><br/>
               <TableCell>{val.submissionLink[3]}</TableCell>
                </TableCell>
               <TableCell>
               
                <Typography >{val.status}</Typography>
               </TableCell>
            </TableRow>
        
    
        ))}
        
      </TableBody>
    </Table>
  
  </TableContainer>
  </>
);
}

export default ListTable