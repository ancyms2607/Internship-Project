import React from 'react'
import App from '../App'
import { Button } from '@mui/material'
import { Link } from 'react-router-dom'

const Home = () => {
  return (
    <div>
        <img className='homebg' src='https://retail.ictkerala.org/pluginfile.php/9699/coursecat/description/1.%20Academic%20Trainings.png'/>
        <Button style={{backgroundColor:'lightblue', marginLeft: "45%", margintop:'5%'}}><Link to={'/login'}>LOGIN</Link></Button>
    </div>
  )
}

export default Home