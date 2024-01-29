 import { useRef, useState, useEffect } from "react";
 import '../components/index.css'
 import axios from "axios";
 import { useNavigate } from 'react-router-dom';

 import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import { Link as RouterLink } from 'react-router-dom'
 
 const REGISTER_URL = '/api/auth/login';

 const Login = () => {
      const userRef = useRef();
      const errRef = useRef();
      const navigate=useNavigate()

     const [username, setUser] = useState('');
     const [pwd, setPwd] = useState('');
     
      const [errMsg, setErrMsg] = useState('');
    

      useEffect(() => {
          userRef.current.focus();
      }, [])

    

     useEffect(() => {
         setErrMsg('');
     }, [username, pwd])

     const handleSubmit = async (e) => {
         e.preventDefault();
        
         
         try {
             const response = await axios.post(REGISTER_URL, {username,pwd});
            
              const accessToken=response?.data?.token
             sessionStorage.setItem('Token',accessToken)
             const role = response?.data?.user?.role;
             if (role[0] === "Admin") {
                // If the role is "Admin", navigate to AdminDashboard
                navigate('/dashadmin');
              } else if (role[0] === "Mentor") {
                // If the role is "Mentor", navigate to MentorDashboard
                navigate('/dashment');
              } else {
                // Handle other roles or navigate to a default route
                 navigate('/');
              }
            

             console.log(username,pwd,role)
             alert('Login successful');
             setUser('');
             setPwd('');

         } catch (err) {
             if (!err?.response) {
                 alert('No Server Response');
             } 
            
              else {
                alert('Login Failed')
             }
             errRef.current.focus();
         }
     }

     return (
        
        <>
         <Box sx={{ flexGrow: 1 }}>
      <AppBar sx={{bgcolor:"#002366"}}position="static">
      
        <Toolbar>
         
         
          <div className="logo" >

<img src="https://upload.wikimedia.org/wikipedia/commons/a/ab/ICT_Academy_Kerala.webp"alt=""/>

</div> 
         
     
          <Typography variant="h4" component="div" sx={{ flexGrow: 1 }} margin="20px" >
            ICT ACADEMY OF KERALA
          </Typography >
          
         
        
        </Toolbar>
      </AppBar>
      
    </Box>
             
             
                  <section style={{marginTop: "10%" , marginLeft: "35%"}}>
                     <p ref={errRef} className={errMsg ? "errmsg" : "offscreen"} aria-live="assertive">{errMsg}</p>
                     <h1 style={{color: "white"}}>ICTAK Internship Portal  </h1>
                     
                     
                         <label  htmlFor="username">
                             Username
                             
                         </label>
                         <input
                                             
                             type="text"
                             id="username"
                             autoComplete="off"
                             onChange={(e) => setUser(e.target.value)}
                             value={username}
                             required
                             ref={userRef}
                            
                             aria-describedby="uidnote"
                              
                         />
                          
                        
                         <label htmlFor="password">
                             Password
                             
                         </label>
                         <input
                             type="password"
                             id="password"
                             onChange={(e) => setPwd(e.target.value)}
                             value={pwd}
                             required
                

                          /><p style={{fontSize: "small"}}>
                        
                             
                         </p>

                
                <br/>
                         <button style={{fontSize: "medium" , padding: "8px" }} onClick={handleSubmit}><b>LOGIN </b></button>
                     
                 
</section>
         </>
         
     )
             }
             
             export default Login