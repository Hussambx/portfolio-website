import { useState } from 'react'
import reactLogo from './assets/react.svg'
import Navbar from './components/Navbar';
import Intro from './components/Intro';
import About from './components/About';
import Projects from './components/Projects'
import data from "./projectsdata";
import Toolbox from './components/Toolbox';
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
   <h2 className='projecttitle'>Projects:</h2>
   <div id="projectlist">
   {projectdetails}
   </div>
   <a href='https://github.com/Hussambx' className='viewongithub'>View More On Github</a>
   <Toolbox/>
   <h2>And More To Come..</h2>
   </>
  )
}

export default App
