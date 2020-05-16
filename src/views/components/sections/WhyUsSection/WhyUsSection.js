import React, { Component } from 'react';
import './WhyUsSection.scss';


class WhyUs extends Component{
    render()
    {
        return(

            <div className="section_whyus section">
                <div className="container">
                        <h3 className="title_whyus">
                            CASE STUDY
                        </h3>
                    <div className="casestudy_wrapper">
                        <div className="row">
                            <div className="col-md-6 col-12 part">
                                <h3 className="part-title">Sanifair toilets</h3>
                                <div className="divider" />
                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.</p>
                                <button className="case_btn">Learn More</button>
                            </div>
                            <div className="col-md-6 part">
                                <h3 className="part-title">Sanifair toilets</h3>
                                <div className="divider" />
                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.</p>
                                <button className="case_btn">Learn More</button>
                            </div>
                        </div>
                    </div>
                        
                        
                   
                </div>
            </div>
        );
    }
}


export default WhyUs;