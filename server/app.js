const express = require('express'); 

const app = express(); 


app.get('/', (req,res)=>{
res.send("hello to my channel")

})



PORT= process.env.PORT  || 5000 ; 


app.listen(PORT, ()=>{
    console.log("server is running")
})