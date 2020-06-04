import React, { Component } from 'react';
import './ContactSection.css';
import emailjs from 'emailjs-com';
const axios = require('axios');
//import ReCAPTCHA from 'react-google-recaptcha';
class Contact extends Component{
  constructor(props)
  {
    super(props);
    this.state={
      first_name:"",
      last_name: "",
      email: "",
      message:"",
      status: ""
   
    }
    this.recaptchaRef = React.createRef();
    this.send_status = React.createRef();
  }


  handleInvalid = (e)=>{
    
    if(document.documentElement.clientWidth > 500)
    e.target.setCustomValidity('Bitte füllen Sie dieses Feld aus');
    else{
      e.target.setCustomValidity(' ');
      
    }
    e.target.style.borderColor = "red";
  }
  handleChange = (e)=>{
    if(e.target.value!="")
    {
    e.target.setCustomValidity('');
    e.target.style.borderColor = "#204379";
  }
    this.setState({[e.target.name]: [e.target.value]});
    
  }
  
  resetForm = () => {
    this.setState({
      first_name:"",
      last_name: "",
      email: "",
      message:"",
      status: ""
    });
  }
 

  handleSubmit = (e)=>{
   e.preventDefault();
    let axiosConfig = {
      headers: {
          'Content-Type': 'application/json;charset=UTF-8',
          "Access-Control-Allow-Origin": "*",
      }
    };
    const {first_name, last_name, email, message} =  this.state;
    const body = { first_name, last_name, email, message };
    
    axios.post('https://sansiel.de/hello.php', {
      first_name: 'Fred',
      last_name: 'Flintstone'
    })
    .then(function (response) {
      console.log("form submitted");
    })
    .catch(function (error) {
      console.log("error DKJCBhjbcnxzcnbsjhbkaslknakcbmx nabjc");
    });
    // if(this.recaptchaRef.current.getValue())
    // {
    // this.send_status.current.style.color = "orange";
    // this.setState({status: "Senden..."});
    // const {firstname, lastname, email, message} =  this.state;
//     let templateParams = {
//       from_name: firstname,
//       to_name: 'sansiel',
//       reply_to : email,
//       message_html: message,
//       firstname,
//       lastname,
//       email,
//       message
//  }
//  emailjs.send("gmail", "template_74tsu5x6",templateParams, "user_sWVyIEywbQTDzFH6OGZ98").then((res)=>{
//   this.send_status.current.style.color = "green";
//    this.setState({status: 'Ihre Nachricht wurde gesendet'})
//    setTimeout(()=>{this.resetForm()}, 2000);
//  }).catch();
}
// else
// {
//   this.send_status.current.style.color = "red";
// this.setState({status: "Bitte füllen Sie das Captcha aus"});
// }   
  
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
  <form  className="wpcf7" onSubmit = {this.handleSubmit}>
    <div className = "row">
    <div className="col-12" id= "firstinput">
      <input required  type="text" id="fname" name="first_name" placeholder="Vorname" value={this.state.first_name} onInvalid={this.handleInvalid} onChange={this.handleChange} title="Vorname"/>
    </div>
    <div className="col-12">
      <input required  type="text" id="lname" name="last_name" placeholder="Nachname" title="Nachname" value={this.state.last_name} onInvalid={this.handleInvalid} onChange={this.handleChange}/>
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
    <div className="row contact_recaptcha" >
   {/*} <ReCAPTCHA
    className = "contact_recaptcha_main"
    ref={this.recaptchaRef}
    hl="de"
    style={{margin: `10px auto`}}
    sitekey="6LeMW_8UAAAAAEviqyazs6RGElnP--XRAkJXqo0w"
    
  />
    */}
  </div>
    <input type="submit" value="Senden" />
    <div className="status" ref={this.send_status}>{this.state.status}</div>
  </form>
  </div>
  </div>
</div>

</div>


    );
}

}

export default Contact;