import { useState } from 'react'

import './App.css'
import Navigation from './components/Navigation'
import Hero from './components/hero'
import Projects from './components/project'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Hero />
      <Projects/>
      <div>Stupid Fuck</div>
    </>
  )
}

export default App
