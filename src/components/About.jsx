import React from "react";
export default function About(){
    return(
        <section id="about" className="section about-section">
            <div className="about-copy">
                <p className="eyebrow">About me</p>
                <h2>York University Computer Science graduate building practical AI and automation products.</h2>
                <p>
                    I am the founder of AutoAvenue, a SaaS platform that helps car dealers source private-party
                    vehicles using AI, automation, and secure cloud infrastructure. My work spans full-stack apps,
                    intelligent web scrapers, backend services, and automation tools.
                </p>
                <p>
                    My experience includes cloud infrastructure, CI/CD workflows, and customer-facing roles at Tesla and
                    Toyota. That mix helps me build systems that are scalable, usable, and grounded in real operations.
                </p>
                <div className="about-meta">
                    <span>York University BSc Computer Science</span>
                    <span>May 2025</span>
                    <span>Toronto, Canada</span>
                    <span>Founder, AutoAvenue</span>
                    <span>Software | DevOps | Security Automation</span>
                </div>
                <div className="about-actions">
                    <a href="https://autoavenue.app" target="_blank" rel="noreferrer" className="button-primary">
                        AutoAvenue
                    </a>
                    <a href="mailto:hussambaradei@gmail.com" className="button-primary">Email</a>
                    <a href="https://www.linkedin.com/in/hussam-baradei/" target="_blank" rel="noreferrer" className="button-secondary">
                        LinkedIn
                    </a>
                    <a href="https://drive.google.com/drive/folders/1QLBi5Xwqfq5fndMmuKvVJYlcsqORQEIn?usp=sharing" target="_blank" rel="noreferrer" className="button-secondary">
                        Resume
                    </a>
                </div>
            </div>
        </section>
    )
}
