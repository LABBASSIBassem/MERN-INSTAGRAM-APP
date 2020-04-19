const express = require('express'); 
const router = express.Router(); 
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const User = require('../Models/User');
const { JWT_SECRET } = require('../config/keys');




//creating the signIn API
router.post('/signIn', (req, res) =>{
   const { email , password } = req.body; 
   if(!email || !password){
      return res.status(422).json({error: "please provide email or password"})
   }
    User.findOne({email: email}).then(savedUser=>{
       if(!savedUser){
           return  res.status(422).json({error: "invalid user data  please try again"})
             }
       bcrypt.compare(password, savedUser.password)
        .then(doMatch =>{
            if(doMatch){
            const token = jwt.sign({_id: savedUser._id}, JWT_SECRET)
            res.json({token})
            }
        else{
           return res.status(400).json({error:"invalid password please try again"})
        }
        })

    })
    .catch(err=> res.send(err))
})

//creating the signUp API
router.post('/signUp', (req, res) =>{
    const { name, email , password } = req.body; 
    if(!name || !email || !password){
      return res.status(400).json({err: "can't accept your data"})
    }
    else{
        User.findOne({email:email}).then((savedUser)=>{
            if(savedUser){
             return res.status(422).json({error: "user already exist"})
            }
            bcrypt.hash(password,12)
            .then(hasedPassword =>{
                const user = new User({name: name,email: email,password: hasedPassword});
                user.save().then((user)=>{res.json({message: "user was successfully created"})})
                .catch((err)=>{res.json({message: "geting error while creating the useree"})})
            }).catch(err=> res.json({err:'getting error while creating the user'}))
        })
    }

} )


module.exports = router

