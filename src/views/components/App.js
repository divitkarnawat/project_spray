import React, { Component } from 'react';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';

import '../../App.css';
import Header from '../../components/Header/Header.js';
import Parallax from '../../components/Parallax/Parallax.js';
import About from './sections/AboutSection/About.js';
import Contact from './sections/ContactSection/ContactSection.js';
import Imprint from './sections/OtherSections/Imprint.js';
import DataProtection from './sections/OtherSections/DataProtection.js';
import Rcard from './sections/Rcard/Rcard.js';
import ProfileSection from './sections/ProfileSection/ProfileSection.js';
import ProductsSection from './sections/ProductsSection/ProductsSection.js';

import Footer from '../../components/Footer/Footer.js';

import CookieConsent from "react-cookie-consent";

class App extends Component{

  constructor(props)
  {
    super(props);
  }

  render(){
   
  return (
    
    <Router>
       <Header />
    <Switch>
    <Route exact path="/" >
     {console.log(' i work')}
      <Parallax />

    <div id="about">   <About /></div>
    <div id="team"><Rcard /></div>
    <div id="product"><ProductsSection /></div>

    <div id="contact" >  <Contact /></div>
       


    </Route>

 <Route   path="/profile/:pid"  component={ProfileSection} />
 <Route   path="/impressum"  component={Imprint} />
 <Route   path="/Datenschutzerklärung"  component={DataProtection} />
 </Switch>


 <Footer />
 
<CookieConsent  buttonText="Akzeptieren"  style={{ background: "black" }} buttonStyle={{ backgroundColor: "#204379", color: "white", border: "1px solid white" }} >Diese Website verwendet Cookies, um die Benutzererfahrung zu verbessern.</CookieConsent>
     </Router>
  );
  }
}
export default App;
