import React, { Component } from 'react';
import './TestimonialSection.css';

class Testimonials extends Component{

    constructor(props)
    {
        
        super(props);
        this.testi_description = "After spending a year surfing the Internet for ideas for our web site, we chose softsourced because we like the design of their web site. We also called their references and were impressed with the glowing reports. We personally worked with Frank, who is both artistic and knowledgeable.";
        this.testi_author = "JENS TOPFINGER";
        this.q = 0;
        this.state = {
            flag: 1
        }
    }

    clickHandler = (change_testi) => {
        
        let n = 3;
        let i = this.q;
        i += change_testi;
        if(i<0)
        {
            i = n-1;
        }
        else if(i>n)
        {
            i = 0;
        }
        else{

        }

        switch(i)
        {
            case 0: this.testi_description = "After spending a year surfing the Internet for ideas for our web site, we chose softsourced because we like the design of their web site. We also called their references and were impressed with the glowing reports. We personally worked with Frank, who is both artistic and knowledgeable.";
                    this.testi_author = "JENS TOPFINGER";
                    break;
            case 1: this.testi_description = "I could not have asked for a better company to help re-design my website. softsourced was quick, reliable and professional. They were there to answer any questions I had and I highly recommend them to help with your web development needs.";
                    this.testi_author = "MARC MUELLER";
                    break;
            case 2: this.testi_description="I have used them for my Webshop, focused on Webdesign. They are the best in the industry 🙂" ;
                    this.testi_author="TAMAS DVORAK";
                    break;
            case 3: this.testi_description="Blown away with my new website thank you. It looks amazing!";
                    this.testi_author="HUANG CHAO";
                    break;
            default: break;
        }
        
        this.setState({flag: i});
        this.q = i;

    }
    
    render()
    {

      
        return(
            <div className="section">
                
                <div className="container">
                    <div className="wrapper">
                <h2 className="title">TESTIMONIALS </h2>
                <div className="testimonials">
                        <div className="container">
                            <h2> " </h2>
        <p className="testi_description"> {this.testi_description}</p>
        <p className="testi_author">{this.testi_author}</p>
        <button onClick={()=>this.clickHandler(-1)} className="btn  btn-testi" > prev </button>
        <button onClick={()=>this.clickHandler(1)} className="btn  btn-testi">next </button>
        
                        </div>
                        </div>
                </div>
                </div>
            </div>
        );
    }
}


export default Testimonials;