import React from 'react'
import image from '../assets/cars passion.gif'


const Home = ()=>{

return(
    <div className="home">
        <div className="card home-card">
        <h5>basem</h5>
        <div className="card-image">
            <img src={image} /> 
        </div>
        <div className="card-content">
            <h6>title</h6>
            <i class="material-icons">favorite_border</i>
            <p>this is an amzing post</p>
            <input type="text" placeholder="add a comment" />
        </div>

        </div>
        <div className="card home-card">
        <h5>basem</h5>
        <div className="card-image">
            <img src={image} /> 
        </div>
        <div className="card-content">
            <h6>title</h6>
            <p>this is an amzing post</p>
            <input type="text" placeholder="add a comment" />
        </div>

        </div>

    </div>
)

}


export default Home