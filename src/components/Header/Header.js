import React, { Component } from 'react';
import './Header.css';

class Header extends Component{

    constructor(props)
    {
        super(props);
        this.state = {
            navLinks: [
                {
                    linkName: "HOME",
                    linkAdd: "#",
                    active: true
                },
                {
                    linkName: "ABOUT",
                    linkAdd: "#about",
                    active: false
                },
                {
                    linkName: "TEAM",
                    linkAdd: "#team",
                    active: false
                },
                {
                    linkName: "WHY US",
                    linkAdd: "#whyus",
                    active: false
                },
                {
                    linkName: "PROJECTS",
                    linkAdd: "#projects",
                    active: false
                },
                {
                    linkName: "PRICE",
                    linkAdd: "#price",
                    active: false
                },
                {
                    linkName: "BLOG",
                    linkAdd: "#blog",
                    active: false
                },
               
               
                {
                    linkName: "CONTACT",
                    linkAdd: "#contact",
                    active: false
                }
            ]
        }
    }



    render(){

        const navLinks = this.state.navLinks.map((navLink)=>{
            var navItemState = navLink.active;
            if(navItemState)
            {
                navItemState = "nav-item active";
            }
            else{
                navItemState = "nav-item";
            }
            return(
            <li className={navItemState}>
                <a className="nav-link" href={navLink.linkAdd}>{navLink.linkName}</a>
            </li>
            );
        })




        return(
        <div className="header-wrap">
              <nav class="navbar navbar-expand-lg fixed-top ">
                  
  <a class="navbar-brand" href="#">SoftSourced</a>
  
  <div className="collapse navbar-collapse" id="navbarSupportedContent">
    <ul className="navbar-nav ml-auto">
    
        {navLinks}
  
    </ul>
    
  </div>
</nav>
        </div>
        );
    }
}

export default Header;