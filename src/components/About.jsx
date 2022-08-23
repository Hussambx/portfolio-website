import React from "react";

import photo from '../assets/portrait_edited.png'

export default function About(){
    return(
        <div id="second">
         <div id="portrait">
         <img src={photo}/>
         </div>

            <div id="content">
            <h3>Hussam Baradei</h3>
            <h4>hussam.baradei@yahoo.com</h4>
            <h3>About me:</h3>
        <h4>Hi, my name is Hussam Baradei I'm currently a second year student, student studying Computer Science at York University</h4>
        <h3>Interests:</h3>
        <h4>Outside of my field of study I'm really intersted in traveling. So far I’ve been to 2 out of the 7 wonders of the world.  My goal is to travel to all 7 throughout my lifetime. I also like to go out of my comfort zone and try new things, in a sense being a thrill seeker.</h4>
       
        
        <a href="www.google.ca"><button className="linkedin">LinkedIn</button></a>
            </div>

   
        </div>




    )


}