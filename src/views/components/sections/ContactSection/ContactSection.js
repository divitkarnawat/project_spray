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
            <div className="divider" />
           

            
<div className="row contactWrapper" >
  
  <div className="col-12">
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