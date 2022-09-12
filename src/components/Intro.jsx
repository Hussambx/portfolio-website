import React, { useState } from "react";


export default function Intro(){
    const [typingeffect, setTyping] = useState("") 
    let i = -1;
    let txt = 'Welcome to my portfolio website!'; /* The text */
    let speed = 100;
    let a= false;
    
    if(typingeffect=="" &&a==false){
        a=true;
        typeWriter();
    }
   
    function typeWriter() {
        if (typingeffect.length < txt.length) {
            i++;
            setTyping(prevstate=> prevstate+txt.charAt(i))
         
          setTimeout(typeWriter, speed); 
        }
      }

    return(
        <div id="intro">
            <h1>Hey</h1>
            <h1>I'm <mark id="hi" style={{color:typingeffect==txt?"Blue":"Black"}}>Hussam</mark></h1>
           <h2>{typingeffect}</h2>
        </div>
    )
}