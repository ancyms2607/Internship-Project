import React from 'react'
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import axios from 'axios';


const ListTable = () => {
    
  return (

    <TableContainer component={Paper} style={{width:'80%',margin:'7%'}}>
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
               <TableCell></TableCell>
               <TableCell rows={4}></TableCell>
               <TableCell>
               <select>
                    <option value="Pending" style={{color: "red"}}>Pending</option>
                    <option value="Completed" style={{color: "green"}}>Completed</option>
                </select>
               </TableCell>
            </TableRow>
        
    
        
        
      </TableBody>
    </Table>
  </TableContainer>
);
}

export default ListTable