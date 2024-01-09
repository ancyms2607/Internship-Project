const express=require('express');
const jwt=require('jsonwebtoken');
const router=express.Router();
router.use(express.json());
router.use(express.urlencoded({extended:true}));

var MentorModel=require('../model/MentorModel');


router.post('/login',(req,res)=>{


      if(email & passw){
         try{
    
      var email=MentorModel.find();
      var passw=MentorModel.find();

    let privatekey={email:email,passw:password}
    const token=jwt.sign(privatekey,'mentor')

    res.status(200).send({message:"Success",token:token})
}catch(error){
    res.status(404).send({message:"Not found"})
}}else{
    res.status(400).send({message:"Unauthorized"})
}})
module.exports=router;