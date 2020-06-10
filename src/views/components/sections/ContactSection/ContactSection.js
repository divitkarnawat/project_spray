import React, { Component } from 'react';
import './ContactSection.css';
import ReCAPTCHA from 'react-google-recaptcha';
//import emailjs from 'emailjs-com';
const axios = require('axios');

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
  if(e.target.name == 'email')
  {
    if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(e.target.value))
    {

      this.setState({status: ''});
    }
    else{
      
      this.send_status.current.style.color = "red";
      this.setState({status: 'Ungültig E-mail'});
    }
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
   if(this.recaptchaRef.current.getValue())
   {
    let axiosConfig = {
      headers: {
        'Content-Type': 'multipart/form-data',
          "Access-Control-Allow-Origin": "*"
      }
    };
    const {first_name, last_name, email, message} =  this.state;
    
    const formData = new FormData();
    formData.set('first_name', first_name);
    formData.set('last_name', last_name);
    formData.set('email', email);
    formData.set('message', message);
    formData.set('g-recaptcha-response',this.recaptchaRef.current.getValue());
    
    this.send_status.current.style.color = "orange";
    this.setState({status: "Senden..."});
    axios.post('https://sansiel.de/hello.php', formData, axiosConfig)
    .then(()=> {
      console.log(this.recaptchaRef.current.getValue());
      this.send_status.current.style.color = "green";
   this.setState({status: 'Ihre Nachricht wurde gesendet'})
   setTimeout(()=>{this.resetForm()}, 2000);
    })
    .catch(()=> {
      this.send_status.current.style.color = "red";
      this.setState({status: "Bitte füllen Sie das Captcha aus"});
    });
  }
  else{
    this.send_status.current.style.color = "red";
    this.setState({status: "Bitte füllen Sie das Captcha aus"});
  }
  
  }


handleOnCaptchaChange = ()=>
{
  if(this.state.status == "Bitte füllen Sie das Captcha aus")
  {
    this.setState({status: ""});
  }
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
    <div className="row " >
    
  <ReCAPTCHA
    className = "contact_recaptcha_main"
    ref={this.recaptchaRef}
    hl="de"
    onChange ={this.handleOnCaptchaChange}
    style={{margin: `10px auto`}}
    sitekey="6LeYhgAVAAAAAH_7rJlQTlPx_zTwnLb15BcACs6O"
    
  />
   
  </div>
    <input type="submit" value="SENDEN"  disabled={(this.state.status != "")} />
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