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
            <a href='https://drive.google.com/drive/folders/1QLBi5Xwqfq5fndMmuKvVJYlcsqORQEIn?usp=sharing' target="_blank"><h4>View Resume</h4></a>
            <h3>About me:</h3>
        <h4>Hi, my name is Hussam Baradei I'm currently a forth year student, studying Computer Science at York University</h4>
        <h3>Interests:</h3>
        <h4>Outside of my field of study I'm really interested in traveling. So far I’ve been to 2 out of the 7 wonders of the world.  My goal is to travel to all 7 throughout my lifetime. I also like to go out of my comfort zone and try new things, whether it's sky diving or something more laid back I'll give it a go</h4>
       
        
        <a href="https://www.linkedin.com/in/hussam-baradei-2b671423b/" target="_blank"><button className="linkedin">LinkedIn</button></a>
        <a href="https://github.com/Hussambx" target="_blank"><button className="viewgithub" >Github</button></a>
        <a href="https://www.instagram.com/hussambaradei/?hl=en" target="_blank"><button className="viewig" >Instagram</button></a>
            </div>

   
        </div>




    )


}