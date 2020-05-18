import React, { Component, createRef } from 'react';
import './Header.scss';
import LogoSVG from '../../assets/img/Sansiel_Logo_SVG.svg';
class Header extends Component{

    constructor(props)
    {
    
        super(props);
        this.headerNavbar = React.createRef();
        this.menuWrapper = React.createRef();
        this.hamburger = React.createRef();
        this.state = {
            navLinks: [
                {
                    linkName: "OBER UNS",
                    linkAdd: "#",
                    active: true
                },
                {
                    linkName: "CASE STUDY",
                    linkAdd: "#about",
                    active: false
                },

                {
                    linkName: "BLOG",
                    linkAdd: "#team",
                    active: false
                },
                {
                    linkName: "KONTAKT",
                    linkAdd: "#whyus",
                    active: false
                },
                
            ],
            scrollCheck: false
        }
    }

    handleHamburger = () =>
    {   
        if(window.innerWidth < 1000)
        {
  
        this.hamburger.current.classList.toggle('open');
       const submenu = this.menuWrapper.current;
       if(!submenu.classList.contains('menuWrapper_display'))
       {
            submenu.classList.add('menuWrapper_display');
            setTimeout(function(){
                submenu.classList.add('menuWrapper_fadein');
            }, 10);
       }
       else
       {
           submenu.classList.remove('menuWrapper_fadein');
           setTimeout(function(){
               submenu.classList.remove('menuWrapper_display');
           }, 500);
       }
    }
    }

    componentDidMount()
    {
        document.addEventListener('scroll', ()=>{
            
            if(window.pageYOffset > 570)
            {
                if(!this.state.scrollCheck)
                {
                    this.headerNavbar.current.classList.add('navScroll');
                   
                    this.setState({scrollCheck: true});
                }
            }
            else{
                if(this.state.scrollCheck)
                {
                    this.headerNavbar.current.classList.remove('navScroll');
                    this.setState({scrollCheck: false})
                }
            }
        })
    }


    render(){
        
        const navlinks = this.state.navLinks.map((navLink)=>{
            
            return(
            <div className="navLink" onClick={this.handleHamburger}>
                <a href={navLink.linkAdd} alt={navLink.linkName}>{navLink.linkName}</a>
            </div>
            );
        });

    
        return(
          <>
          <div className="menuWrapper" ref={this.menuWrapper}>
              <div className="linksWrapper">
              {navlinks}
            
              </div>
              
          </div>
        <div className="header-wrap" ref={this.headerNavbar}>
           <div className="brandLogo">
           <object type="image/svg+xml" data={LogoSVG} style={{maxHeight: 40 + 'px'}}>
  Your browser does not support SVG
</object>
           </div>
           <div className="navLinks">
               <div className="desktopView">
               {navlinks}
               </div>
               </div>
        </div>
        <div ref={this.hamburger} id="hamburger" onClick={this.handleHamburger}> 
                <span></span>
                <span></span>
                <span></span>
               </div>
            </>
        );
    }
}

export default Header;