const User=require('../models/UserModel')
const bcrypt=require('bcrypt');
const jwt=require('jsonwebtoken');

const handleLogin = async (req, res) => {
  try {
    const { username, pwd} = req.body;
    User.findOne({username}).then((user)=>{
      bcrypt.compare(pwd, user.password, (err, result)=>{
        if(err || !result) return res.status(401).send(err || "wrong password")
        const token = jwt.sign({username: user.username}, process.env.ACCESS_TOKEN_SECRET)
        

        console.log('Token:', token);
        

        return res.status(201).send({ user, token})
      })
    })
    .catch(err => {
      return res.status(404).send('cannot find user')
    })
  } catch (error) {
    console.log(error)
  }
  
}


module.exports = {
  handleLogin
};