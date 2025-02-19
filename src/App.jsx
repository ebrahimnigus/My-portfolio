import React from 'react'
import "./App.css"
import Header from './Components/Header/Header';
import Home from './Components/Home/Home';
import About from './Components/About/About';
import Skills from './Components/Skills/Skills';
import Services from './Components/Services/Services';
import Qualificiation from './Components/qualification/Qualificiation';
import Contact from './Components/Contact/Contact';
import Footer from './Components/Footer/Footer';
import ScrollUp from './Components/Scrollup/ScrollUp';


const App = () => {
  return (
    <>
    <Header />
    <main className="main">
      <Home />
      <About />
      <Skills />
      <Services />
      <Qualificiation />
      <Contact />
    </main>
    <Footer />
    <ScrollUp />
    </>
  )
}

export default App