import React,{useEffect} from 'react'
import { useNavigate } from 'react-router-dom'


const PrivateRoute = (props) => {
    const {Component} = props
    const navigate = useNavigate()
    useEffect(()=>{
        const login = sessionStorage.getItem('Token')
        if(!login){
            navigate('/')
        }
    })
  return (
    <div> <Component/></div>
  )
}

export default PrivateRoute


