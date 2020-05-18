import React, { Component } from "react";

import './About.css'

class About extends Component {

  constructor(props)
  {
    super(props);
    this.state = {
      content : {
        len: 4,
        icons: []
      }
    }
  }

    render(){
    return (
    <div className="section abt_s">
      <div className="container">
                    <h2 className="title title_about">UERS UNS</h2>
                    <div className="divider" />
        
            
            <p className="description description_about">
            Sansiel GmbH vermarktet ein ein revolutionäres Produkt der Hygienetechnologie.
Mit Sansiel Sanitär ist es uns gelungen ein Produkt auf den Markt zu bringen, dass eine grundlegende Veränderung der Reinigungsprozesse mit sich bringt und dies auf ökologischer Basis - im industriellen Bereich, Gesundheitssektor und im Privathaushalt.
Begleitet werden wir von einem Team aus Ärzten, Wissenschaftlern und Chemikern unter der Aufsicht der DTMD Universität Luxemburg.
Des Weiteren bieten wir für unsere Produkte die Fachberatung und Schulung der Anwender hinsichtlich Produkteigenschaften und Verarbeitung an.
            </p>

            <div className="row">
              
            </div>
            <div className="row">
              
            </div>
      </div>
     
    
    </div>
  );
    }

}

export default About;
