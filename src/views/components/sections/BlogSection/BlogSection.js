import React, { Component } from 'react';
import './BlogSection.css';
import imgURL1 from "../../../../assets/img/about_pic1.jpg";
import imgURL2 from "../../../../assets/img/about_pic2.jpg";
import imgURL3 from "../../../../assets/img/about_pic1.jpg";

class About extends Component{

    constructor(props)
    {
        super(props);
        this.state = {
            about_cards: [
                {
                    id : 0,
                    img_url: imgURL1,
                    title: "APPLICATIONS (WEB, IOS, ANDROID)",
                    description: "We build customized apps for iOS & Android devices. We excel at developing sophisticated and eye-catching native apps tailored to your needs!"
                },
                {
                    id : 1,
                    img_url: imgURL2,
                    title: "ECOMMERCE",
                    description: "We develop ecommerce websites, seamless & intuitive to manage. No matter the number of products, we deliver the most optimal solution."
                },
                {
                    id : 2,
                    img_url: imgURL3,
                    title: "WEBSITES",
                    description: "We leverage latest trends in marketing to promote effective communication through your website. SEO is key to increase quality website traffic"
                }
            ]
        }
    }

    render()
    {
        const aboutus_cards = this.state.about_cards.map((about_card) =>{
                return(
                    <div className= "col-sm-12 col-md-4">
                        <div className="card card_blog text-center">
                            <img className="card-img-top" src = {about_card.img_url} alt = "about card image"/>
                            <div className="card-body">
                                <div className="card-title">
                                    {about_card.title}
                                </div>
                                <div className="card-text">
                                    {about_card.description}
                                </div>
                            </div>
                        </div>
                    </div>
                );
        });

       
        return(
            <div>
            <div className="section1">
                <div className = "container">
                <h2 className="title">
                LATEST ARTICLES
                </h2>
                <p className="description1">
                Stay up to date and read through recent industry-leading articles.
                </p>
                </div>

                <div className="container">
                    <div className="row">                            
                       {aboutus_cards}
                    </div>
                </div>

            </div>
            

       

            </div>
        );
    }
}
export default About;