import React, { Component } from 'react';
import './ContactSection.css';

class Contact extends Component{

render()
{
    return(
        <div className="section section_contact">
     
            <div className="container">
            <h2 className="title_contact">
                 Contact Us
            </h2>
            <hr className="divider" />
           

            
<div className="row contactWrapper" >
  <div className="col-md-4 col-12">
    <div className="contact_details">
      <div className="contact_details_divs">
      <h3> Our address</h3>
      <p> Musterstrasse, Musterland</p>
      </div>
      <div className="contact_details_divs">
      <h3>Give us a call</h3>
      <p>+880 168 108 109 1425<br/>
+0216 809 172</p>
      </div>
      <div className="contact_details_divs">
      <h3>Email us</h3>
      <p>info@sansiel.com</p>
      </div>
    </div>
  </div>
  <div className="col-md-8 col-12">
  <form  className="wpcf7" action="#">
    <div className = "row">
    <div className="col-12" id= "firstinput">
      <input required  type="text" id="fname" name="firstname" placeholder="First Name" />
    </div>
    <div className="col-12">
      <input required  type="text" id="lname" name="lastname" placeholder="Last Name" />
    </div>
    <div className="col-12 " id = "lastinput">
      <input required  type="text" id="email" name="email" placeholder="Email" />
    </div>
     </div>
    
    <div className="row">
        <div className="col-12">
    <textarea  id="message" name="message" placeholder="Message" rows="8" ></textarea>
    </div>
    </div>
    <input type="submit" value="Submit" />

  </form>
  </div>
  </div>
</div>

</div>


    );
}

}

export default Contact;