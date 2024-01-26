// import React from 'react'
// import App from '../App'
// import { Button } from '@mui/material'
// import { Link } from 'react-router-dom'

// const Home = () => {
//   return (
//     <div>
//         <img className='homebg' src='https://retail.ictkerala.org/pluginfile.php/9699/coursecat/description/1.%20Academic%20Trainings.png'/>
//         <Button style={{ marginLeft: "50%", margintop:'5%'}}><Link style={{backgroundColor: "white" , color : "darkblue" , textDecoration: "none"}} to={'/login'}>LOGIN</Link></Button>
//     </div>
//   )
// }

// export default Home



// import React from 'react'
// import App from '../App'
// import { Button } from '@mui/material'
// import { Link } from 'react-router-dom'
// import './Home.css'

// const Home = () => {
//   return (
//     <div className='home-container'>
//       <img className='homebg' src='https://retail.ictkerala.org/pluginfile.php/9699/coursecat/description/1.%20Academic%20Trainings.png'/>
//       <div className='button-container'>
//         <Button variant='contained'><Link to={'/login'} style={{ color : "white" , textDecoration: "none"}}>LOGIN</Link></Button>
//       </div>
//     </div>
//   )
// }

// export default Home 
import React from 'react'
import App from '../App'
import { AppBar, Toolbar, Typography, Button, Link } from '@mui/material'
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