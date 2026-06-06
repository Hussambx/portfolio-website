import React from "react";
import photo from '../assets/portrait_edited2.png'

export default function Intro(){
    return(
        <section id="home" className="hero">
            <div className="hero-copy">
                <p className="eyebrow">Computer Science graduate | Founder of AutoAvenue</p>
                <h1>Building AI automation, SaaS tools, and secure data-driven systems.</h1>
                <p className="hero-text">
                    I am Hussam Baradei, a Canada-based developer focused on full-stack applications,
                    intelligent web scrapers, real-time AI agents, and cloud-backed automation.
                </p>
                <div className="hero-actions">
                    <a href="#projects" className="button-primary">View projects</a>
                    <a href="#contact" className="button-secondary">Contact me</a>
                </div>
            </div>
            <div className="hero-visual" aria-label="Portrait of Hussam Baradei">
                <img src={photo} alt="Hussam Baradei" />
            </div>
        </section>
    )
}
