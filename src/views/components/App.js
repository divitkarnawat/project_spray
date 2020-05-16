import React, { Component } from 'react';
import { useSprings, animated } from 'react-spring'
import { useGesture } from 'react-use-gesture'
import '../../App.css';
import Header from '../../components/Header/Header.js';
import Parallax from '../../components/Parallax/Parallax.js';
import About from './sections/AboutSection/About.js';
import Contact from './sections/ContactSection/ContactSection.js';
import Team from './sections/TeamSection/TeamSection.js';
import Projects from './sections/ProjectsSection/ProjectSection.js';
import WhyUs from './sections/WhyUsSection/WhyUsSection.js';
import Rcard from './sections/Rcard/Rcard.js';
import Pricing from './sections/PricingSection/PricingSection.js';
import Testimonials from './sections/TestimonialSection/TestimonialSection.js';
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
    <div id="whyus">    <WhyUs /></div>
    <div id="projects">   <Ptest/></div>

   
 
    <div id="contact">  <Contact /></div>
    

  
  
   
    
  
    
    <Footer />
     </div>
  );
  }
}

export default App;
