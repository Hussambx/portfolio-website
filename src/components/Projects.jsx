import React from "react";

export default function Project(props){
    const highlights = props.highlights || [];
    const tags = props.tags || [];

    return(
        <article className="project-card">
            <a href={props.repo} target="_blank" rel="noreferrer" className="project-image">
                {props.prev ? (
                    <img className="img2" src={props.prev} alt={`${props.name} preview`} />
                ) : (
                    <div className="project-placeholder" aria-label={`${props.name} placeholder`}>
                        <span>{props.placeholder || props.name}</span>
                    </div>
                )}
            </a>
            <div className="project-content">
                <p className="project-date">{props.date}</p>
                <h3>{props.name}</h3>
                <p>{props.description}</p>
                <ul className="project-highlights">
                    {highlights.map(highlight => <li key={highlight}>{highlight}</li>)}
                </ul>
                <div className="project-tags">
                    {tags.map(tag => <span key={tag}>{tag}</span>)}
                </div>
                <a href={props.repo} target="_blank" rel="noreferrer" className="project-link">View on GitHub</a>
            </div>
        </article>
    )
}
