import React from "react";


export default function Navbar(){


    function scrollhome(){
        document.getElementById('navbox').scrollIntoView();
    }
    function scrollabout(){
        document.getElementById('second').scrollIntoView();
    }
    function scrollprojects(){
        document.getElementById('projectlist').scrollIntoView();
    }



    return(
        <div id="navbox">
        <nav>
            <h2 id="special">Hussam Baradei</h2>
            <h2 onClick={scrollhome}>Home</h2>
            <h2 onClick={scrollabout}>About</h2>
            <h2 onClick={scrollprojects}>Projects      </h2>

        </nav>
        
        </div>

    )


}