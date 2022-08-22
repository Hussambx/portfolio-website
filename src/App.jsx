import { useState } from 'react'
import reactLogo from './assets/react.svg'
import Navbar from './components/Navbar';
import Intro from './components/Intro';
import About from './components/About';
function App() {
  const [count, setCount] = useState(0)

  return (
   <>
   <Navbar/>
   <Intro/>
   <About/>
   </>
  )
}

export default App
