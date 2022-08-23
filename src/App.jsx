import { useState } from 'react'
import reactLogo from './assets/react.svg'
import Navbar from './components/Navbar';
import Intro from './components/Intro';
import About from './components/About';
import Projects from './components/Projects'
import data from "./projectsdata";

function App() {
  const [count, setCount] = useState(0)

  const projectdetails = data.map(project=>{
      return(
        <Projects
        name={project.name}
        prev={project.prev}
        repo={project.repo}
        />

      )

  })

  return (
   <>
   <Navbar/>
   <Intro/>
   <About/>
   <h2>Projects:</h2>
   <div id="projectlist">
   {projectdetails}
   </div>
  
   </>
  )
}

export default App
