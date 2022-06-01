import React, { useRef } from 'react';

// import components
import Header from './components/Header';
import Hero from './components/Hero';
import Brands from './components/Brands';
import About from './components/About';
import Portfolio from './components/Portfolio';
import Skills from './components/Skills';
import Services from './components/Services';
import Contact from './components/Contact';
import Footer from './components/Footer';
import BackTopBtn from './components/BackTopBtn';

const App = () => {

  let cursorRef = useRef();

  const mousePos = e => {
    cursorRef.current.setAttribute('style', `
    top: ${e.pageY - 20}px; 
    left:${e.pageX - 20}px;
    `)
  }

  return (
    <div onMouseMove={mousePos} className='bg-white relative'>
      <div ref={cursorRef} className="cursor_perso"></div>
      <Header />
      <Hero />
      <Brands />
      <About />
      <Skills />
      <Portfolio />
      <Services />
      <Contact />
      <Footer />
      <BackTopBtn />
    </div>
  );
};

export default App;
