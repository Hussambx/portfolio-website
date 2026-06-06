import Navbar from './components/Navbar';
import Intro from './components/Intro';
import About from './components/About';
import Projects from './components/Projects'
import data from "./projectsdata";
import Toolbox from './components/Toolbox';

const experience = [
  {
    role: "Software Engineer",
    company: "AutoAvenue",
    date: "Jan 2025 - Present",
    details: [
      "Developed a full-stack SaaS platform automating vehicle acquisition for dealers and wholesalers.",
      "Integrated LLaMA and Gemini for real-time valuation with a 77% improvement in data accuracy.",
      "Built data-processing pipelines, web scrapers, scalable backend services, and REST APIs deployed via AWS and DigitalOcean."
    ]
  },
  {
    role: "Vehicle Acquisition Specialist",
    company: "Woodbridge Toyota",
    date: "Jun 2023 - Present",
    details: [
      "Acquire 15+ vehicles monthly through auctions, rental companies, wholesalers, dealers, and private sellers.",
      "Maintain acquisition records and market analysis on vehicle values, demand trends, and auction data.",
      "Coordinate with the Used Car Manager on aged and non-retail units to determine the best disposal channels."
    ]
  },
  {
    role: "iOS Technical Support Specialist",
    company: "Transcom / Apple Support",
    date: "May 2022 - Oct 2022",
    details: [
      "Diagnosed software and hardware issues while handling 16+ cases per day.",
      "Reached a 90%+ resolution rate and contributed to an 85%+ customer satisfaction rating.",
      "Documented support cases, escalated complex issues, and configured devices for service or repair."
    ]
  }
];

function App() {
  const projectdetails = data.map(project => (
    <Projects
      key={project.id}
      name={project.name}
      prev={project.prev}
      placeholder={project.placeholder}
      repo={project.repo}
      date={project.date}
      description={project.description}
      highlights={project.highlights}
      tags={project.tags}
    />
  ));

  return (
    <>
      <Navbar />
      <main>
        <Intro />
        <About />
        <section id="projects" className="section section-light">
          <div className="section-header">
            <p className="eyebrow">Selected work</p>
            <h2>Projects</h2>
            <p>
              A focused collection of AI automation, SaaS, full-stack, and interactive projects built with practical tools.
            </p>
          </div>
          <div id="projectlist">
            {projectdetails}
          </div>
          <a href="https://github.com/Hussambx" className="viewongithub" target="_blank" rel="noreferrer">
            View more on GitHub
          </a>
        </section>
        <Toolbox />
        <section id="experience" className="section experience-section">
          <div className="section-header">
            <p className="eyebrow">Experience</p>
            <h2>Customer-facing technical work in automotive, software, and support.</h2>
            <p>
              Roles across AutoAvenue, Toyota, and Apple support shaped how I build software for real operational needs.
            </p>
          </div>
          <div className="experience-list">
            {experience.map(item => (
              <article className="experience-card" key={`${item.company}-${item.role}`}>
                <div>
                  <p className="experience-date">{item.date}</p>
                  <h3>{item.role}</h3>
                  <p className="experience-company">{item.company}</p>
                </div>
                <ul>
                  {item.details.map(detail => <li key={detail}>{detail}</li>)}
                </ul>
              </article>
            ))}
          </div>
        </section>
        <section id="contact" className="section contact-section">
          <div>
            <p className="eyebrow">Contact</p>
            <h2>Let's build something useful.</h2>
            <p>
              I am exploring Software Engineering, DevOps, and Cybersecurity Automation roles where I can build secure,
              data-driven systems and keep growing as an engineer.
            </p>
          </div>
          <div className="contact-actions">
            <a href="mailto:hussambaradei@gmail.com" className="button-primary">Email me</a>
            <a href="https://www.linkedin.com/in/hussam-baradei/" target="_blank" rel="noreferrer" className="button-secondary">
              LinkedIn
            </a>
            <a href="https://github.com/Hussambx" target="_blank" rel="noreferrer" className="button-secondary">
              GitHub
            </a>
          </div>
        </section>
      </main>
      <footer>Copyright Hussam Baradei</footer>
    </>
  )
}

export default App
