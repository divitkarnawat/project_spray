import React, { Component } from 'react';
import './Footer.scss';
import LogoSVG from '../../assets/img/Sansiel_Logo_SVG.svg';
class Footer extends Component
{
    render()
    {
        return(
            <div className="footer_section">
                <div className="row">
                    <div className="col-sm-4 col-12 cb">
                    <div >
           <object type="image/svg+xml" data={LogoSVG} style={{maxHeight: 40 + 'px'}}>
  Your browser does not support SVG
</object>
           </div>


                    </div>
                    <div className="col-sm-4 col-12 cd">
                        <div className="contact_details">
        <div><i class="fas fa-map-marker-alt"></i>Musterstrasse, Musterland</div>
                            <div><i class="fas fa-phone-alt"></i>+880 168 108 109 1425<br/>+0216 809 172</div>
                            <div><i class="fas fa-envelope"></i>info@sansiel.com</div>
                        </div>
                    </div>
                    <div className="col-sm-4 col-12 cf">
                        <div className="flinks">
                        <div><a>Datenschutzerklärung</a></div>
                        <div><a>Impressum</a></div>
                        <div>Copyright</div>
                        <div>Developed by softsourced</div>
                        </div>
                    </div>
                </div>
            </div>

        );
    }
}

export default Footer;