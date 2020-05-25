import React, { Component } from 'react';
import {HashLink as Link} from 'react-router-hash-link';
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
           Ihr Browser unterstützt SVG nicht

</object>
           </div>


                    </div>
                    <div className="col-sm-4 col-12 cd">
                        <div className="contact_details">
        <div><i class="fas fa-map-marker-alt"></i> Augustaanlage 17, 68165 Mannheim</div>
                            <div><i class="fas fa-phone-alt"></i>+49 621 405492 00</div>
                            <div><i class="fas fa-envelope"></i> kontakt@sansiel.de</div>
                        </div>
                    </div>
                    <div className="col-sm-4 col-12 cf">
                        <div className="flinks">
                        <div><Link to="/Datenschutzerklärung/#dp_s">Datenschutzerklärung</Link></div>
                        <div><Link to="/Impressum/#i_s">Impressum</Link></div>
                       
                        
                        </div>
                    </div>
                </div>
                <div className="row fdivider"></div>
                <div className="row ext_footer">
                    <div className="col-sm-4">© 2020 Sansiel GmbH</div>
        
                    <div className="col-sm-4 offset-sm-4">Entwickelt von softsourced</div>
                </div>
            </div>

        );
    }
}

export default Footer;