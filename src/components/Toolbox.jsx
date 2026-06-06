import React from "react";

const skillGroups = [
    {
        title: "Languages",
        items: ["Python", "JavaScript", "TypeScript", "Java", "C/C#", "Bash", "HTML/CSS"]
    },
    {
        title: "Frameworks",
        items: ["React", "Node.js", "REST APIs", "Playwright", "Postman", "Linux"]
    },
    {
        title: "Cloud and DevOps",
        items: ["AWS", "DigitalOcean", "Docker", "Kubernetes", "CI/CD", "Git", "PostgreSQL", "MongoDB"]
    },
    {
        title: "Data and AI",
        items: ["LLaMA", "Gemini", "ChatGPT", "Whisper", "LangChain", "RAG", "AssemblyAI"]
    },
    {
        title: "Certifications",
        items: ["AWS Solutions Architect Associate - In Progress"]
    }
];

export default function Toolbox(){
    return(
        <section id="skills" className="section skills-section">
            <div className="section-header">
                <p className="eyebrow">Technical skills</p>
                <h2>Tools I use to ship projects</h2>
                <p>Grouped by the parts of the stack I work with most often.</p>
            </div>
            <div id="toolbox" className="skills-grid">
                {skillGroups.map(group => (
                    <article className="skill-card" key={group.title}>
                        <h3>{group.title}</h3>
                        <div className="skill-list">
                            {group.items.map(item => <span key={item}>{item}</span>)}
                        </div>
                    </article>
                ))}
            </div>
        </section>
    )
}
