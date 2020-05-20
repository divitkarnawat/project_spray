import React, { Component } from 'react';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';

import '../../App.css';
import Header from '../../components/Header/Header.js';
import Parallax from '../../components/Parallax/Parallax.js';
import About from './sections/AboutSection/About.js';
import Contact from './sections/ContactSection/ContactSection.js';
import Ptest from './sections/Ptest/Ptest.js';

import Rcard from './sections/Rcard/Rcard.js';
import ProfileSection from './sections/ProfileSection/ProfileSection.js';
import ProductsSection from './sections/ProductsSection/ProductsSection.js';

import Footer from '../../components/Footer/Footer.js';

class App extends Component{

  constructor(props)
  {
    super(props);
  }

  render(){
  return (
    
    <Router>
    <Switch>
    <Route exact path="/" >
      <Header />
      <Parallax />
 
    <div id="about">   <About /></div>
    <div id="team"><Rcard /></div>
    <div id="product"><ProductsSection /></div>
    <div id="contact" >  <Contact /></div>
    </Route>

 <Route   path="/profile/:pid"  component={ProfileSection} />
 
 </Switch>

   
  <Footer />

     </Router>
  );
  }
}

export default App;
