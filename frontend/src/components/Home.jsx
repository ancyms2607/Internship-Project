import React from 'react'
import { Button } from '@mui/material'
import { Link as RouterLink } from 'react-router-dom'
import './Home.css'

const Home = () => {
  return (
    <div className='container'>
      <img className='homebg' src='https://retail.ictkerala.org/pluginfile.php/9699/coursecat/description/1.%20Academic%20Trainings.png'/>
      
          <Button className="btn" color='inherit' component={RouterLink} to='/login'>
            Login
          </Button>
    </div>
    
  )
}

export default Home