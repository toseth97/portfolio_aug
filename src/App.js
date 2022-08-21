import React from 'react'
import { useState } from 'react'
import Navigation from './component/Navigation'
import Home from './component/Home'
import Projects from './component/Projects'
import AboutMe from './component/AboutMe'


const App = () => {

  const [mobile, setMobile] = useState(false);


  const handleMobile=() =>{
    setMobile(!mobile)
  }
  return (
    <div className='App'>
      <Navigation handleMobile={handleMobile} mobile={mobile}/>
      <Home />
      <Projects />
      <AboutMe />
    </div>
  )
}

export default App