const express = require('express'); 
const router = express.Router(); 
const bcrypt = require('bcrypt');
const User = require('../Models/User')



router.get('/signIn', (req, res) =>{

    res.send('api sign inn')
} )

router.post('/signUp', (req, res) =>{
    const {name, email , password } = req.body; 
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

