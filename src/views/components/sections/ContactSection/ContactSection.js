import React, { Component } from 'react';
import './ContactSection.css';

class Contact extends Component{

render()
{
    return(
        <div className="section">
            <div className="container">
            <h2 className="title">
                 GET IN TOUCH
            </h2>
            <h4 className="description">
                Fill out the form below if you have any questions or are ready to start a new project, 
                and our team will get back to you soon.
            </h4>
            

            

  <form  action="#">
    <div className = "row">
    <div className="col-sm-4 col-12" id= "firstinput">
      <input required  type="text" id="fname" name="firstname" placeholder="First Name" />
    </div>
    <div className="col-sm-4 col-12">
      <input required  type="text" id="lname" name="lastname" placeholder="Last Name" />
    </div>
    <div className="col-sm-4 col-12 " id = "lastinput">
      <input required  type="text" id="email" name="email" placeholder="Email" />
    </div>
     </div>
    
    <div className="row">
        <div className="col-12 mt-4">
    <textarea  id="message" name="message" placeholder="Message" rows="8" ></textarea>
    </div>
    </div>
    <input type="submit" value="Submit" />

  </form>
</div>
</div>


    );
}

}

export default Contact;