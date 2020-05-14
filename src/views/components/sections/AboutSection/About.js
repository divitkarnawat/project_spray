import React, { Component } from "react";

import './About.css'

class About extends Component {

    render(){
    return (
    <div className="section">
      <div className="container">
                    <h2 className="title title_about">PRODUKT</h2>
                    <hr className="divider" />
            <h4>
            Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum
            </h4>
            
            <p className="description description_about">
            Lorem ipsum is a pseudo-Latin text used in web design, typography, layout, and printing in place of English to emphasise design elements over content. It's also called placeholder (or filler) text. It's a convenient tool for mock-ups. ... The are likely to focus on the text, disregarding the layout and its elements.
            </p>
         
      </div>
     
      <video id='player' controls playsinline width="100%"
        poster="http://media.w3.org/2010/05/sintel/poster.png" className="video">
        <source id='mp4' src="http://media.w3.org/2010/05/sintel/trailer.mp4" type='video/mp4' />
        <source id='webm' src="http://media.w3.org/2010/05/sintel/trailer.webm" type='video/webm' />
        <source id='ogv' src="http://media.w3.org/2010/05/sintel/trailer.ogv" type='video/ogg' />
        
        <track kind="subtitles" label="English subtitles" src="subtitles_en.vtt" srclang="en" default></track>
  
     <p>Your user agent does not support the HTML5 Video element.</p>
      </video>

    </div>
  );
    }

}

export default About;
