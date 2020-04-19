import React ,{useState } from 'react'
import {Link} from 'react-router-dom'


const SignUp = () =>{
   const [name, setName] = useState("");
   const [email, setEmail] = useState("");
   const [password, setPassword] = useState("");
   
   const PostData = () =>{
       fetch("/signup",{
           method: "POST",
           headers: {
               "Content-Type": "application/json"
           }, 
           body: JSON.stringify({
               name: name,
               email: email, 
               password: password
           })
       }).then(res=>res.json())
       .then(data =>console.log(data))
   }

    return (
        <div className="mycard">
            <div className="card auth-card input-field">
              <h2>Cars Passion</h2>
              <input
              type="text"
              placeholder="name"
              value={name}
               onChange={(e)=>{setName(e.target.value)}}/>
              <input
              type="text"
              placeholder="email"
              value={email}
              onChange={(e)=>{setEmail(e.target.value)}}
              />
              <input
              type="password"
              placeholder="password"
              value={password}
              onChange={(e)=>{setPassword(e.target.value)}}
              />
              <div className="file-field input-field">
              </div>
              <button onClick={()=>{PostData()}} className="btn waves-effect waves-light #64b5f6 blue darken-1">
                  SignUP
              </button>
              <h5>
                  <Link to="/signin">Already have an account ?</Link>
              </h5>
               
                 
           
              
      
          </div>
        </div>
     )
  }
  



export default SignUp