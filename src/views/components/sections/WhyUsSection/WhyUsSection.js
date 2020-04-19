import React, { Component } from 'react';
import './WhyUsSection.css';
import whyus_img from '../../../../assets/img/whyus.jpg';

class WhyUs extends Component{
    render()
    {
        return(

            <div className="section_whyus">
                <div className="row">
                    <div className="col-sm-6 col-12 offset-sm-1 whyus">
                        <h2 className="title_whyus">
                            WHY US
                        </h2>
                        <p className="description_whyus">
                        Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
                        </p>
                        <button className="button primary"> More Information -></button>
        {/*<button className="button button--wayra button--border-thick button--text-upper button--size-s">Remove</button>*/}
                    </div>
                    <div className="col-sm-4 offset-sm-1">
                        <img className="img_whyus" src = {whyus_img} alt="whyus" />
                    </div>
                </div>
            </div>
        );
    }
}


export default WhyUs;