import React, { Component } from "react";

import './ProductsSection.scss'
import product1 from '../../../../assets/img/product1.jpg';
import product2 from '../../../../assets/img/product2.jpg';
import product3 from '../../../../assets/img/product3.jpg';
class ProductsSection extends Component {

    constructor(props)
    {
        super(props);
        this.state = {
            content: {
                len: 3,
                imgURLs: [product1,product2,product3],
                titles: ["Sansiel Sanitär","Sansiel Antischimmel","Sansiel Duplex"],
                description:[
                    [
                        "Sansiel Sanitär ist eine Flüssigkeit, die nach dem Auftragen auf Oberflächen in kürzester Zeit (3 Min) zu einem harten, dünnen Film trocknet. Die antibakterielle, antivirale Wirkung (99,9%) erfolgt binnen weniger Minuten. Die Wirksamkeit bleibt bei sachgemäßer Reinigung über 12 Monate erhalten",
                        " Die Mikroorganismen finden keine Nahrung mehr und selbst multiresistente Keime zersetzen sich sofort und permanent.",
                        "Die Beschichtung stellt im ausgehärteten Zustand keine Risiken für Gesundheit und Umwelt dar."
                    ],
                    [
                        "Sansiel Antischimmel ist eine Antischimmel- Antialgenfarbe, die sowohl im Innen- wie auch Außenbereich eingesetzt wird. Die Farbe wird auf die befallenen Stellen aufgetragen und verhindert Wachstum von Schimmel und Algen und bleibt bei sachgemäßem Einsatz über 12 Monate erhalten.",
                    ],
                    [    
                        "Sansiel Duplex ist ein Produkt, das aus zwei Komponenten besteht. Eingesetzt wird es in z.B. Wassertanks oder anderen geschlossenen Behältern, Schwimmbädern, etc.",
                        "Auch dort findet eine permanente Inhibition des Wachstums von Mikroorganismen statt. Die Zulassung für Trinkwasser ist gerade in Vorbereitung."
                    ] 
                    ]

            }
        }
    }

    render(){
        let projectsList = this.state.content.titles.map((title,idx)=>
        {
            return(
                <>
                <div className="row project" data-aos="fade-up" data-aos-duration="1500"
    data-aos-easing="ease-in-out" >
                    <div className="col-12 col-lg-6" >
                        <div className="img_wrapper">
                        <img src={this.state.content.imgURLs[idx]} alt="Project1"/>
                        </div>
                    </div>
                    <div className="col-12 col-lg-6 content_wrapper">
                        <h4 >{title}</h4>
                        <p className="desc">{this.state.content.description[idx].map((desc)=>{
                            return(
                                <>
                                {desc}
                                <br />
                                </>
                            );
                        })}</p>    
                    </div>
                </div>
                </>
            );
        })
    return (
    <div className="section product_section">
      <div className="container">
                    <h2 className="title title_about">PRODUKT</h2>
                    <div className="divider" />
          
            <div className="projects_list">
                {projectsList}
            </div>
      </div>
     
    
    </div>
  );
    }

}

export default ProductsSection;
