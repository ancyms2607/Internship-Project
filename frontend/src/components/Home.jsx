
import * as React from 'react';
import App from '../App'
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';

import LoginIcon from '@mui/icons-material/Login';
import { AccessAlarm, ThreeDRotation } from '@mui/icons-material';

import MenuIcon from '@mui/icons-material/Menu';

import { Link as RouterLink } from 'react-router-dom'
import './Home.css'

import IconButton from '@mui/material/Icon';
import SvgIcon from '@mui/material/SvgIcon';

import 'material-icons/iconfont/material-icons.css';




export default function Home() {
  
  return (
   
  
    <Box sx={{ flexGrow: 1 }}>
      <AppBar sx={{bgcolor:"#002366"}}position="static">
      
        <Toolbar>
         
         
          <div className="logo" >

<img src="https://upload.wikimedia.org/wikipedia/commons/a/ab/ICT_Academy_Kerala.webp"alt=""/>

</div> 
         
     
          <Typography variant="h4" component="div" sx={{ flexGrow: 1 }} margin="20px" >
            ICT ACADEMY OF KERALA
          </Typography >
          
          <span class="material-icons">login</span>          
         

          <Button color="inherit"component={RouterLink} to='/login'><h4>Login</h4></Button>
        
        </Toolbar>
      </AppBar>
      <div className="bg" ></div>
    </Box>
      

    
  );
  
}


