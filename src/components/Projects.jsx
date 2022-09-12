import React from "react";

export default function Project(props){
  

    return(
    <>
        <div id="projectx">
            <h5>{props.name}</h5>
            <section>
            <img className="img2" src={props.prev}/>
            </section>
            <a href={props.repo} target="_blank"><button className="github">View On Github</button></a>
        </div>
    </>
)



}