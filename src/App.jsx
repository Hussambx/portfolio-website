import { useState } from 'react'
import reactLogo from './assets/react.svg'
import Navbar from './components/Navbar';
import Intro from './components/Intro';
import About from './components/About';
import Projects from './components/Projects'
function App() {
  const [count, setCount] = useState(0)

  return (
   <>
   <Navbar/>
   <Intro/>
   <About/>
   <h2>Projects:</h2>
   <div id="projectlist">
   <Projects/>
   </div>
  
   </>
  )
}

export default App
