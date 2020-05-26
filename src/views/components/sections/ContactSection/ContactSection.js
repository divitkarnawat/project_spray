import React, { Component } from 'react';
import './ContactSection.css';

class Contact extends Component{
  constructor(props)
  {
    super(props);
    this.state={
      firstname:"",
      lastname: "",
      email: "",
      message:""
    }
  }

  handleInvalid = (e)=>{
    e.target.setCustomValidity('Lütfen işaretli yerleri doldurunuz'); 
  }
  handleChange = (e)=>{
    if(e.target.value!="")
    e.target.setCustomValidity('');

    this.setState({[e.target.name]: [e.target.value]});
    
  }
  handleSubmit = (e)=>{
    e.preventDefault();
    alert('Wir freuen uns, dass Sie sich die Zeit genommen haben, uns zu schreiben.Wir werden uns bald bei Ihnen melden.');
    this.setState({
      firstname:"",
      lastname: "",
      email: "",
      message:""
    });
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
      <input required  type="text" id="fname" name="firstname" placeholder="Vorname" value={this.state.firstname} onInvalid={this.handleInvalid} onChange={this.handleChange} title="Vorname"/>
    </div>
    <div className="col-12">
      <input required  type="text" id="lname" name="lastname" placeholder="Nachname" title="Nachname" value={this.state.lastname} onInvalid={this.handleInvalid} onChange={this.handleChange}/>
    </div>
    <div className="col-12 " id = "lastinput">
      <input required  type="text" id="email" name="email" placeholder="E-Mail" title="E-Mail" value={this.state.email} onInvalid={this.handleInvalid} onChange={this.handleChange} />
    </div>
     </div>
    
    <div className="row">
        <div className="col-12">
    <textarea  id="message" name="message" placeholder="Nachricht" rows="8" required value={this.state.message} onInvalid={this.handleInvalid} onChange={this.handleChange}/>
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