 import { useRef, useState, useEffect } from "react";
 import { faCheck, faTimes, faInfoCircle } from "@fortawesome/free-solid-svg-icons";
 import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
 import '../components/index.css'
 import App from "../../src/App.css"
 import index from "../../src/index.css"

 

 import axios from "axios";
 import { useNavigate } from 'react-router-dom';
//  import { withRouter } from 'react-router-dom';

 
 const REGISTER_URL = 'http://localhost:3001/api/auth/login';

 const Login = () => {
      const userRef = useRef();
      const errRef = useRef();
      const navigate=useNavigate()

     const [username, setUser] = useState('');
     const [pwd, setPwd] = useState('');
     



//   {
//              setUserRole(event.target.value);
//          };




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
            //    setAuth({ username, pwd, role, accessToken});

             console.log(username,pwd,role)
             alert('Login successful');
             setUser('');
             setPwd('');
            //  navigate('/dashadmin')

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
                     <h1 style={{color: "white"}}>ICTAK Internship Portal-Login Form</h1>
                     
                         <label htmlFor="username">
                             Username:
                             
                         </label>
                         <input
                             type="text"
                             id="username"
                             autoComplete="off"
                             onChange={(e) => setUser(e.target.value)}
                             value={username}
                             required
                             ref={userRef}
                            //  aria-invalid={validName ? "false" : "true"}
                             aria-describedby="uidnote"
                            //  onFocus={() => setUserFocus(true)}
                            //  onBlur={() => setUserFocus(false)}
                         />
                         <p style={{fontSize:"small"}}>
                         {/* <p id="uidnote" className={userFocus && user && !validName ? "instructions" : "offscreen"}> */}
                    
                             
                         </p>


                         <label htmlFor="password">
                             Password:
                             
                         </label>
                         <input
                             type="password"
                             id="password"
                             onChange={(e) => setPwd(e.target.value)}
                             value={pwd}
                             required
                        //      aria-invalid={validPwd ? "false" : "true"}
                        //      aria-describedby="pwdnote"
                        //      onFocus={() => setPwdFocus(true)}
                        //      onBlur={() => setPwdFocus(false)}
                          /><p style={{fontSize: "small"}}>
                         {/* <p id="pwdnote" className={pwdFocus && !validPwd ? "instructions" : "offscreen"}> */}
                        
                             
                         </p>

                
                <br/>
                         <button style={{fontSize: "medium" , padding: "10px" }} onClick={handleSubmit}>LOGIN</button>
                     
                 
</section>
         </>
         
     )
             }
             
             export default Login