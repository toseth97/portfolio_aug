import React from 'react'
import Navigation from './component/Navigation'
import Home from './component/Home'
import Projects from './component/Projects'


const App = () => {
  return (
    <div className='App'>
      <Navigation />
      <Home />
      <Projects />

    </div>
  )
}

export default App