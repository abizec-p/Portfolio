import { Profiler, useState } from 'react'

import './App.css'
import Navigation from './components/Navigation'
import Hero from './components/hero'
import Projects from './components/project'
import Profile from './components/profile'
import Skills from './components/skills'
import Contact from './components/contact'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Hero />
      <Projects />
      <Profile />
      <Skills />
      <Contact/>
    </>
  )
}

export default App
