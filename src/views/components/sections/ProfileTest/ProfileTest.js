import React, { Component } from 'react';
import './ProfileTest.scss';
class ProfileTest extends Component
{
    constructor(props)
    {
        super(props);

    }

    handleChangeSection = (profile_id)=>{
        const buttons = document.querySelectorAll(".profile_card-buttons button");
        const sections = document.querySelectorAll(".profile_card-section");
        const section = document.getElementById(profile_id);
        console.log(sections, buttons[1]);
        sections.forEach((s) => s.classList.remove("is-active"));
        buttons.forEach((b) => b.classList.remove("is-active"));
        profile_id === "profile_about" ? buttons[0].classList.add("is-active") : buttons[1].classList.add("is-active");
        if(section) {
            section.classList.add("is-active");
        }
        window.scrollTo(0,0);
    }

    render()
    {
        return(
        
        <div class="profile_card" data-state="#profile_about" id="profile_card_main">

            <div class="profile_card-header">
                <div class="profile_card-cover" ></div>
                <img class="profile_card-avatar" src={`http://localhost:3000${this.props.pimgURL}` } alt="avatar" />
                <h1 class="profile_card-fullname">{this.props.pname}</h1>
                <h2 class="profile_card-jobtitle">{this.props.pdesig}</h2>
            </div>

        <div class="profile_card-main">
            <div className="main-content-wrapper">
          <div class="profile_card-section is-active" id="profile_about">
            <div class="profile_card-content">
              <div class="profile_card-subtitle">ABOUT</div>
              <p class="profile_card-desc">
              {this.props.pdesc}
                </p>
            </div>
          </div>
          <div class="profile_card-section" id="profile_contact">
            <div class="profile_card-content">
              <div class="profile_card-subtitle">CONTACT</div>
              <div class="profile_card-contact-wrapper">   
                <div class="profile_card-contact">
                    (xxx) xxx-xxxx
                </div>
                <div class="profile_card-contact"> 
                  william@rocheald.com
                </div>
                <div class="profile_card-social">
                <a ><i class="fab fa-linkedin-in"></i></a>
                <a ><i class="fab fa-twitter"></i></a>
                <a ><i class="fab fa-facebook-f"></i></a>
                </div>               
              </div>
            </div>
          </div>
          </div>
                  </div>
                  <div class="profile_card-buttons">
            <button  class="is-active" onClick={()=>this.handleChangeSection("profile_about")}>ABOUT</button>
       
            <button  onClick={()=>this.handleChangeSection("profile_contact")}>CONTACT</button>
          </div>

      </div>
      );
    }
}


export default ProfileTest;