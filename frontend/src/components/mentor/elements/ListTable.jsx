import React, { useEffect, useState } from 'react'
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import axios from 'axios';
import { TextField, Typography } from '@mui/material';


const ListTable = () => {
  const [list,setList]= useState([])
    
useEffect(()=>{
    axios.get('http://localhost:3001/api/list').then((res)=>{
      setList(res.data);
    })
},[])
     
  return (

    <TableContainer component={Paper} style={{width:'80%',margin:'7%'}}>
      
      {list.map((val,i)=>(
    <Table sx={{ minWidth: 650 }} aria-label="simple table">
      <TableHead>
        <TableRow>
          <TableCell>Group No:</TableCell>
          <TableCell>Submissions</TableCell>
          <TableCell>Status</TableCell>
        
        </TableRow>
      </TableHead>
      
      <TableBody>
      
        
            <TableRow >
               <TableCell>{val.group}</TableCell>
               <TableCell rows={4}>{val.submissionLink}</TableCell>
               <TableCell>
               {/* <select>
                 <option  value="Pending" style={{color: "darkred" , fontSize: "15px"}}>Pending</option>
                 <option value="Completed"" style={{color: " darkgreen", fontSize: "15px}}>Completed</option>
                </select> */}
                <Typography >{val.status}</Typography>
               </TableCell>
            </TableRow>
        
    
        
        
      </TableBody>
    </Table>
    ))}
  </TableContainer>
);
}

export default ListTable