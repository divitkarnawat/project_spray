import React, { Component } from 'react';
import './WhyUsSection.css';
import whyus_img from '../../../../assets/img/whyus.jpg';

class WhyUs extends Component{
    render()
    {
        return(

            <div className="section_whyus section">
                <div className="container">
                        <h2 className="title_whyus">
                            CASE STUDY
                        </h2>
                    <div className="casestudy_wrapper">
                        <div className="row">
                            <div className="col-md-6 col-12 part">
                                <h2 className="part-title">Sanifair toilets</h2>
                                <hr className="divider" />
                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.</p>
                                <button className="btn btn-primary">Learn More </button>
                            </div>
                            <div className="col-md-6 part">
                                <h2 className="part-title">Sanifair toilets</h2>
                                <hr className="divider" />
                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.</p>
                                <button className="btn btn-primary">Learn More </button>
                            </div>
                        </div>
                    </div>
                        
                        
                   
                </div>
            </div>
        );
    }
}


export default WhyUs;