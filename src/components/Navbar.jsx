import React from "react";

export default function Navbar(){
    return(
        <div id="navbox" className="nav-shell">
            <nav aria-label="Primary navigation">
                <a id="special" href="#home">Hussam Baradei</a>
                <div className="nav-links">
                    <a href="#about">About</a>
                    <a href="#projects">Projects</a>
                    <a href="#skills">Skills</a>
                    <a href="#experience">Experience</a>
                    <a href="#contact">Contact</a>
                </div>
            </nav>
        </div>
    )
}
