import React, { Component } from 'react';
import './Footer.css';

class Footer extends Component
{
    render()
    {
        return(
            <div className="footer_section">
                <div className="row">
                    <div className="col-sm-4 ">
                    COPYRIGHT SOFTSOURCED
                    </div>
                    <div className="col-sm-4 ">
                        <div className="footer_socialLinks">
                    <a href="/"><i className="fa fa-facebook mr-2"></i></a>
                    <a href="/"><i className="fa fa-linkedin"></i></a>
                    </div>
                    </div>
                    <div className="col-sm-4">
                        <div className="d-flex flex-column footer_links">
                        <a href="/">TERMS AND CONDITIONS</a>
                        <a href="/">IMPRESSUM</a>
                        <a href="/"> PRIVACY POLICY</a>
                      
                        </div>
                        
                    </div>
                </div>
            </div>

        );
    }
}

export default Footer;