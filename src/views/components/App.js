import React, { Component } from 'react';

import '../../App.css';
import Header from '../../components/Header/Header.js';
import Parallax from '../../components/Parallax/Parallax.js';
import About from './sections/AboutSection/About.js';
import Contact from './sections/ContactSection/ContactSection.js';
import Team from './sections/TeamSection/TeamSection.js';
import Projects from './sections/ProjectsSection/ProjectSection.js';
import WhyUs from './sections/WhyUsSection/WhyUsSection.js';
import Pricing from './sections/PricingSection/PricingSection.js';
import Testimonials from './sections/TestimonialSection/TestimonialSection.js';
import Blog from './sections/BlogSection/BlogSection.js';
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
    <div id="team">  <Team /></div>
    <div id="whyus">    <WhyUs /></div>
    <div id="projects">  <Projects /></div>
    <div id="price">  <Pricing /></div>
    <div id="blog"> <Blog /></div>
    <Testimonials />
    <div id="contact">  <Contact /></div>
    

  
  
   
    
  
    
    <Footer />
     </div>
  );
  }
}

export default App;
