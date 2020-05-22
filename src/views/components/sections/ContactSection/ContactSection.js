import React, { Component } from 'react';
import './ContactSection.css';

class Contact extends Component{

render()
{
    return(
        <div className="section section_contact">
     
            <div className="container">
            <h2 className="title_contact">
            Kontakt
            </h2>
            <div className="divider" />
           

            
<div className="row contactWrapper" >
  
  <div className="col-12">
  <form  className="wpcf7" action="#">
    <div className = "row">
    <div className="col-12" id= "firstinput">
      <input required  type="text" id="fname" name="firstname" placeholder="Vorname" />
    </div>
    <div className="col-12">
      <input required  type="text" id="lname" name="lastname" placeholder="Nachname" />
    </div>
    <div className="col-12 " id = "lastinput">
      <input required  type="text" id="email" name="email" placeholder="E-Mail" />
    </div>
     </div>
    
    <div className="row">
        <div className="col-12">
    <textarea  id="message" name="message" placeholder="Nachricht" rows="8" ></textarea>
    </div>
    </div>
    <input type="submit" value="Senden" />

  </form>
  </div>
  </div>
</div>

</div>


    );
}

}

export default Contact;