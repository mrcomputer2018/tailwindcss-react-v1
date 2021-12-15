import React, { useState, useEffect } from 'react';
import { BrowserRouter, Routes ,Route } from 'react-router-dom'
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import Home from './pages/home';
import Menu from './pages/menu';
import About from './pages/about';
import Contact from './pages/contact';
import Dropdown from './components/Dropdown';

function App() {
  const [isOpen, setIsOpen] = useState('false');

  const toggle = () => {
      setIsOpen(!isOpen)
  }

  useEffect(() => {
    const hideMenu = () => {
      if (window.innerwidth > 768 && isOpen) {
        setIsOpen('false')
        console.log("resizeedd");
      }
    }
    window.addEventListener('resize', hideMenu);

    return () => {
      window.removeEventListener('resize', hideMenu);
    }
  })

  return (
    <>
      <BrowserRouter>
        <Navbar toggle={toggle}/>
        <Dropdown isOpen={isOpen} toggle={toggle}/>
        <Routes>
          <Route path="/" element={ <Home/> }/>
          <Route path="/menu" element={ <Menu/> }/>
          <Route path="/about" element={ <About/> }/>
          <Route path="/contact" element={ <Contact/> }/>
        </Routes>
        <Footer />
      </BrowserRouter>
    </>
  );
}

export default App;
