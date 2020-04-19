const express = require('express'); 
const router = express.Router(); 
const Post = require('../Models/Post')
const requireLogin = require('../middleware/requireLogin')


//create a new post 
router.post('/createpost', requireLogin , (req,res)=>{

    const {title, body} = req.body; 
    if(!title || !body)
    {
        res.status(422).json({error: "error geting post data"})
    }

    req.user.password = undefined
     const post = new Post({
         title, 
         body, 
         postedBy: req.user})

         post.save().then(user =>{
             res.json({post: user})
         }).catch(err=> console.log(err))





})

//geting all the posts
router.post('/showposts',requireLogin, (req,res)=>{
  Post.find().then(postsList=>{
      res.json({posts:postsList})
  }).catch(err=> res.status(500).json(error: "error while fetching posts data"))
})



module.exports = router