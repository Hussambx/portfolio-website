import React, { useState } from "react";


export default function Intro(){
    const [typingeffect, setTyping] = useState("") 
   


    return(
        <div id="intro">
            <h1>Hey</h1>
            <h1>I'm Hussam</h1>
           <h2>{typingeffect}</h2>
        </div>
    )
}