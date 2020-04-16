const express = require('express'); 
const mongoose = require("mongoose");
const { MONGOURI } = require('./config/keys');


mongoose.connect(MONGOURI,{ useNewUrlParser: true, useUnifiedTopology: true},(err)=>{
    if(err) throw err; 
    console.log('connected to tha data base')
})



const app = express(); 




app.get('/', (req,res)=>{
res.send("hello to my channel")

})



PORT= process.env.PORT  || 5000 ; 


app.listen(PORT, ()=>{
    console.log("server is running")
})