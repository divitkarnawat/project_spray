import React, { Component, createRef } from 'react';
import './Ptest.scss';

import img1 from '../../../../assets/img/abt4.jpg';
import img2 from '../../../../assets/img/abt2.jpg';
import img3 from '../../../../assets/img/abt3.jpg';
import img4 from '../../../../assets/img/abt1.jpg';

class Ptest extends Component{
    constructor(props)
    {
        super(props);
        this.popup = React.createRef();
    
        this.state = {
            content: [
                {
                    title: "Innovation und Entwicklung",
                    description: "Dank jahrelanger Forschung ist es unserem Team gelungen, nicht nur ein tragfähiges Produkt, sondern auch eine innovative Lösung zu entwickeln, die mit dem jüngsten Anstieg der Pandemien noch relevanter wird.",
                    imgURL: img3 
                },
                {
                    title: "Sicherheit und Qualität",
                    description: "Eines unserer Hauptziele ist es, Sicherheits- und Qualitätsstandards in unserer Fabrik, in der Lieferkette und bei unseren Kunden zu gewährleisten. Dies wird durch strenge Prozesse sichergestellt, die vom Management festgelegt werden.",
                    imgURL: img1 
                },
                {
                    title: "Nachhaltigkeit",
                    description: "Wir sind stolz darauf, dass nicht nur die Produkte, sondern die gesamte Organisation einem sehr genau definierten Nachhaltigkeitsprogramm folgen. Dies steht im Einklang mit den europäischen Vorschriften.",
                    imgURL: img2 
                },
                {
                    title: "Breites anwendungsspektrum",
                    description: "Mit Sansiel halten wir nicht nur Ihre Oberflächen sauber, sondern verhindern auch das Wachstum von Bakterien und Viren oder sogar Schimmel.",
                    imgURL: img4
                }
            ],
            popactive: 0
        }
    }
    


render()
{
   

    let projectCardsr1 = this.state.content.map((projectCard,idx)=>{
        if(idx<2) return(

              <div className="row" style={{margin: `0 auto`}}>
                  <div className="col-12">
                <div className="pcard" data-aos="fade-up"  data-aos-once="true">    
                    <div className="pimg">
                        <img src={projectCard.imgURL} />
                    </div>
                    <div className="pcontent">
                        <h3 className="ptitle">
                            {projectCard.title}
                        </h3>
                        <p className="pdesc">
                            {projectCard.description}
                        </p>
                        
                    </div>
                    </div>
                </div>
            </div>
    
        );
    
    })
    let projectCardsr2 = this.state.content.map((projectCard,idx)=>{
        if(idx>1) return(
            
              <div className="row"style={{margin: `0 auto`}}>
                  <div className="col-12">
                <div className="pcard" data-aos="fade-up"  data-aos-once="true"
    >
                    <div className="pimg">
                        <img src={projectCard.imgURL} />
                    </div>
                    <div className="pcontent">
                        <h3 className="ptitle">
                            {projectCard.title}
                        </h3>
                        <p className="pdesc">
                            {projectCard.description}
                        </p>
                        
                      
                    </div>
                   </div>
                </div>
           
            </div>
    
        );
    
    })

    return(
    
            
            <div className="ptest_section">
             
            <div className="row">
            <div className="col-12 col-sm-6 ">
                {projectCardsr1}
            </div>
            <div className="col-12 col-sm-6">
                {projectCardsr2}
            </div>
            </div>
            </div>
    
    );
}


}

export default Ptest;