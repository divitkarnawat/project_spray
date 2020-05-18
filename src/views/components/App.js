import React, { Component } from 'react';

import '../../App.css';
import Header from '../../components/Header/Header.js';
import Parallax from '../../components/Parallax/Parallax.js';
import About from './sections/AboutSection/About.js';
import Contact from './sections/ContactSection/ContactSection.js';

import WhyUs from './sections/WhyUsSection/WhyUsSection.js';
import Rcard from './sections/Rcard/Rcard.js';
import ProductsSection from './sections/ProductsSection/ProductsSection.js';
import Ptest from './sections/Ptest/Ptest.js';
import Footer from '../../components/Footer/Footer.js';

class App extends Component{

  constructor(props)
  {
    super(props);
  }

  render(){
  return (

    <div>
      <Header />
      <Parallax />
 
    <div id="about">   <About /></div>
    <div id="team">   <Rcard/></div>
    <div><ProductsSection /></div>
    <div id="projects">   <Ptest/></div>

   
 
    <div id="contact">  <Contact /></div>
    

  
  
   
    
  
    
    <Footer />
     </div>
  );
  }
}

export default App;
