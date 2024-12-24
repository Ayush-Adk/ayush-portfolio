import { useState } from 'react'
import './App.css'
import About from './components/About/About'
import ContactForm from './components/Contact/ContactForm'
import Footer from './components/Footer/Footer'
import Home from './components/Home/Home'
import Horizontal from './components/Horizontal/Horizontal'
import Navbar from './components/Navbar/Navbar'
import Projects from './components/Projects/Projects'
import Skills from './components/Skills/Skills'

function App() {
  const [count, setCount] = useState(0)

  return (
  <div>
    <Navbar/>
    <Home/>
    <Horizontal/>
    <About/>
    <Horizontal/>
    <Skills/>
    <Horizontal/>
    <Projects/>
    <Horizontal/>
    <ContactForm/>
    <Footer/>
  </div>
  
  )
}

export default App
