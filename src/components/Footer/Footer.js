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
                    © 2020 Sansiel


                    </div>
                    <div className="col-sm-4 ">
                    Powered by WordPress
                    </div>
                    <div className="col-sm-4 up-div">
                        <a href="#" className="up">Up </a>
                    </div>
                </div>
            </div>

        );
    }
}

export default Footer;