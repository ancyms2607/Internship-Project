 import { useRef, useState, useEffect } from "react";
 import '../components/index.css'
 

 import axios from "axios";
 import { useNavigate } from 'react-router-dom';
 
 const REGISTER_URL = 'http://localhost:3001/api/auth/login';

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
             
                  <section style={{marginTop: "10%" , marginLeft: "35%"}}>
                     <p ref={errRef} className={errMsg ? "errmsg" : "offscreen"} aria-live="assertive">{errMsg}</p>
                     <h1 style={{color: "white"}}>ICTAK Internship Portal  </h1>
                     
                     
                         <label htmlFor="username">
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
                         <button style={{fontSize: "medium" , padding: "8px" }} onClick={handleSubmit}><b>LOGIN HERE</b></button>
                     
                 
</section>
         </>
         
     )
             }
             
             export default Login