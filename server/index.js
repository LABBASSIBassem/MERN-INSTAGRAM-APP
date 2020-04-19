const express = require('express'); 
const mongoose = require("mongoose");
const { MONGOURI } = require('./config/keys');
const bodyParser = require('body-parser');



mongoose.connect( MONGOURI,{ useNewUrlParser: true, useUnifiedTopology: true},(err)=>{
    if(err) return err; 
    console.log('successfully connected to the data base')
});



const app = express(); 

app.use(bodyParser());
app.use(require('./routes/auth')); 
app.use(require('./routes/post')); 





app.get('/', (req,res)=>{
res.send("hello to my channel")
        })



PORT= process.env.PORT  || 5000 ; 


app.listen(PORT, ()=>{
    console.log("server is running")
})