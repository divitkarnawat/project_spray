import React, { Component } from 'react';
import './About.css';
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
            ],

            progressBars :[
                {
                    id: 0,
                    title: "GRAPHIC DESIGN",
                    classExt: " pw1",
                    per: "98%"
                },
                {
                    id: 0,
                    title: "PHP DEVELOPMENT",
                    classExt: " pw2",
                    per: "72%"
                },
                {
                    id: 0,
                    title: "JAVASCRIPT",
                    classExt: " pw3",
                    per: "84%"
                },
                {
                    id: 0,
                    title: "UI/UX DESIGN",
                    classExt: " pw4",
                    per: "91%"
                }
            ]

        }
    }

    render()
    {
        const aboutus_cards = this.state.about_cards.map((about_card) =>{
                return(
                    <div className= "col-sm-12 col-md-4">
                        <div className="card card_about text-center">
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

        const progressBars = this.state.progressBars.map((progressBar)=>{
            var cls = "progress-bar";
            cls += progressBar.classExt;
            return(
                <div className="progressBars_container">
                <div class="d-flex justify-content-between">
      <div>
         {progressBar.title}
      </div>
      <div>
         {progressBar.per}
      </div>
 </div>
                        <div className="progress mt-1">
                            <div className={cls} >
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
                WELCOME TO SOFTSOURCED
                </h2>
                <p className="description1">
                Digital Solutions Studio based in Munich, Germany.<br />

For over 3 years we have been developing outstanding web developement solutions, advising our <br />happy customer with professional advice to more revenue and success.<br />

7 full-time employees ensure smooth project delivery, that impresses.<br />

We are experts in web developement and design.
                </p>
                </div>

                <div className="container">
                    <div className="row">                            
                       {aboutus_cards}
                    </div>
                </div>

            </div>
            <div className="section2">
                <div className="container">
                <div className="row">
                    <div className="col-sm-6 mb-2">
                        <h4 className="title_about">
                        SOFTSOURCED – MUNICH’S FIRST DIGITAL SOLUTIONS STUDIO
                        </h4>
                        <p className="description2">
                        SOFTSOURCED creates exceptional, web and mobile user-experience by interpreting data points from a
                         website’s usage, to ultimately create an intuitive interface that visitors quickly understand. 
                         There is no doubting in what we do, no what-if, no skepticism. We are a Munich based
                          Digital Solutions Studio that delivers high-quality products on time.
                           Our award-winning web development team consistently exceeds expectations, spinning unique visual tales 
                           that our clients like telling – and the customer loves to hear.
                        </p>
                    </div>

                    <div className="col-sm-6 mt-2">
                    {progressBars}
                        
                    </div>
                </div>
                </div>

            </div>

            </div>
        );
    }
}
export default About;