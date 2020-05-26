import React, { Component } from 'react';
import './ContactSection.css';

class Contact extends Component{

  handleInvalid = (e)=>{
    e.target.setCustomValidity('Lütfen işaretli yerleri doldurunuz'); 
  }
  handleChange = (e)=>{
    if(e.target.value!="")
    e.target.setCustomValidity('');
  }
  handleSubmit = (e)=>{
    e.preventDefault();
    alert('Wir freuen uns, dass Sie sich die Zeit genommen haben, uns zu schreiben.Wir werden uns bald bei Ihnen melden.');
  }
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
  <form  className="wpcf7" onSubmit={this.handleSubmit}>
    <div className = "row">
    <div className="col-12" id= "firstinput">
      <input required  type="text" id="fname" name="firstname" placeholder="Vorname" onInvalid={this.handleInvalid} onChange={this.handleChange} title="Vorname"/>
    </div>
    <div className="col-12">
      <input required  type="text" id="lname" name="lastname" placeholder="Nachname" title="Nachname" onInvalid={this.handleInvalid} onChange={this.handleChange}/>
    </div>
    <div className="col-12 " id = "lastinput">
      <input required  type="text" id="email" name="email" placeholder="E-Mail" title="E-Mail" onInvalid={this.handleInvalid} onChange={this.handleChange} />
    </div>
     </div>
    
    <div className="row">
        <div className="col-12">
    <textarea  id="message" name="message" placeholder="Nachricht" rows="8" required onInvalid={this.handleInvalid} onChange={this.handleChange}/>
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