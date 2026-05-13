import React from 'react'
import HeroSection from './components/HeroSection';
import About from './components/About';
import Skills from './components/Skills';
import Portfolio from './components/Portfolio';
import AppFooter from './components/AppFooter';
const App = () => {
  return (
    
    <div>
        <HeroSection />
        <About />
        <Skills />
        <Portfolio />
        <AppFooter />
    </div>
  )
}

export default App