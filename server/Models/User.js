const mongoose = require('mongoose'); 

const User = mongoose.Schema({

      name: {
          type:String,
          required: true,
          maxLength: 50

      }, 
      email: {
        type:String,
        required: true,
        unique: 1
      }, 
      password: {
        type:String,
        required: true,
        minLength: 6,
      }, 





})


module.exports = mongoose.model("User",User)