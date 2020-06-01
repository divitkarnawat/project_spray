import React, { Component } from "react";

import './ProductsSection.scss'
import product1 from '../../../../assets/img/product1.jpg';
import product2 from '../../../../assets/img/product2.jpg';
import product3 from '../../../../assets/img/product3.jpg';
import product4 from '../../../../assets/img/product4.jpg';
import product5 from '../../../../assets/img/product5.jpg';
import product5s from '../../../../assets/img/product5s.jpg';
import product6 from '../../../../assets/img/product6.jpg';
import product6s from '../../../../assets/img/product6s.jpg';
import product4s from '../../../../assets/img/product4s.jpg';
class ProductsSection extends Component {

    constructor(props)
    {
        super(props);
        this.state = {
            content1: {
                len: 3,
                imgURLs: [product1,product2,product3],

                titles: ["Sansiel Sanitär","Sansiel Antischimmel","Sansiel Duplex"],
                description:[
                    [
                        "Sansiel Sanitär ist eine Flüssigkeit, die nach dem Auftragen auf Oberflächen in kürzester Zeit (3 Min) zu einem harten, dünnen Film trocknet. Die antibakterielle, antivirale Wirkung - mehr als 99,9 % aller Krankheitserreger werden erfolgreich beseitigt - erfolgt binnen weniger Minuten. Die Wirksamkeit bleibt bei sachgemäßer Reinigung über 12 Monate erhalten.",
                        "Die Mikroorganismen finden keine Nahrung mehr und selbst multiresistente Keime zersetzen sich sofort und permanent.",
                        "Die Beschichtung stellt im ausgehärteten Zustand keine Risiken für Gesundheit und Umwelt dar."
                    ],
                    [
                        "Sansiel Antischimmel ist eine Antischimmel-Antialgenfarbe, die sowohl im Innen- wie auch Außenbereich eingesetzt wird. Die Farbe wird auf die befallenen Stellen aufgetragen und verhindert das Wachstum von Schimmel und Algen. Sie bleibt bei sachgemäßem Einsatz über 12 Monate erhalten.",
                    ],
                    [    
                        "Sansiel Duplex ist ein Produkt, das aus zwei Komponenten besteht. Eingesetzt wird es in z. B. Wassertanks oder anderen geschlossenen Behältern, Schwimmbädern, etc.",
                        "Auch dort findet eine permanente Inhibition des Wachstums von Mikroorganismen statt. Die Zulassung für Trinkwasser ist gerade in Vorbereitung."
                    ] 
                    ]

            },
            content2: {
                len: 3,
                imgURLs: [product4,product5,product6],
                imgURLsS: [product4s, product5s, product6s],
                titles: ["Sandura Floor","Sandura Plast/Edelstahl","Sandura Glas"],
                description:[
                    [
                        "Dieses Produkt ist die synergetische Verbindung aus DuraGuard und Sansiel Sanitär:",
                        "DuraGuard der Firma Duranox besticht durch eine extrem hohe Beständigkeit gegen Abnutzung, Abrieb- und Gebrauchsspuren. Es ist dampfdiffusionsoffen, lösemittelfrei und rutschfest - u.a. dank seines hohen Keramikpartikelanteils.",
                        "Durch die Zugabe von Sansiel Sanitär wird Sandura Floor zu einem einzigartigen antibakteriellen und antiviralen Produkt, das seinesgleichen sucht.",
                        "Sandura Floor eignet sich ideal für den Einsatz im Sanitärbereich, in Schulen, Krankenhäusern, Altenheimen und insbesondere in Kindergärten.",
                        "Mit Sandura Floor werden Reinigungsprozesse zudem erheblich vereinfacht."
                    ],
                    [
                        "Hierbei handelt es sich um eine harte, dennoch flexible „easy to clean“ Beschichtung für Kunststoff- und Metalloberflächen der Firma Duranox - selbstverständlich ohne gefährliche Inhaltsstoffe. Es besitzt eine besondere Anti-Fingerprinteigenschaft, wobei Abdrücke keine Spuren hinterlassen.",
                        "Mit Sansiel Sanitär versetzt, wird eine 99,9%ige antibakterielle und antivirale Wirkung erzielt.",
                        "Entsprechende Flächen werden hiermit sehr anwenderfreundlich gereinigt: Der Einsatz von aggressiven Reinigungsmittel ist nicht mehr notwendig - ein feuchtes Microfasertuch reicht."
                    ],
                    [    
                        "Eine hochwertige Beschichtung für Glas- und Keramikoberflächen der Firma Duranox. Die Neuverschmutzung wird durch die wasser-, öl- und schmutzabweisende Oberfläche um bis zu 70% reduziert („easy to clean“-Effekt)",
                        "Auch hier haben wir durch die Zugabe von Sansiel Sanitär ein einmaliges Produkt mit einer 99,9% igen antibakteriellen und antiviralen Wirkung geschaffen.",
                        "Es ist außerordentlich umweltfreundlich. Ein feuchtes Microfasertuch reicht wiederum zum Reinigen."
                    ] 
                    ]

            }
        }
    }

    render(){
        let projectsList1 = this.state.content1.titles.map((title,idx)=>
        {
            return(
                <>
                <div className="row project" data-aos="fade-up" data-aos-duration="1500"
    data-aos-easing="ease-in-out" >
                    <div className="col-12 col-lg-6" >
                        <div className="img_wrapper">
                        <img src={this.state.content1.imgURLs[idx]} alt="Project1"/>
                        
                        </div>
                    </div>
                    <div className="col-12 col-lg-6 content_wrapper">
                        <h4 >{title}</h4>
                        <p className="desc">{this.state.content1.description[idx].map((desc)=>{
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


        let projectsList2 = this.state.content2.titles.map((title,idx)=>
        {
            return(
                <>
                <div className="row project" data-aos="fade-up" data-aos-duration="1500"
    data-aos-easing="ease-in-out" >
                    <div className="col-12 col-lg-6" >
                        <div className="img_wrapper">
                        <picture>
                                <source media="(max-width: 500px)"
                                        srcSet = {this.state.content2.imgURLsS[idx]} />
                                <source srcSet={`${this.state.content2.imgURLs[idx]} 2x, ${this.state.content2.imgURLsS[idx]} 1x`} />
                                
                            <img src={this.state.content1.imgURLs[idx]} alt="Project1"/>
                            </picture>
                       
                        </div>
                    </div>
                    <div className="col-12 col-lg-6 content_wrapper">
                        <h4 >{title}</h4>
                        <p className="desc">{this.state.content2.description[idx].map((desc)=>{
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
        });
    return (
    <div className="section product_section">
      <div className="container">
                    <h2 className="title title_about">PRODUKTE</h2>
                    <div className="divider" />
          
            <div className="projects_list">
                {projectsList1}
            </div>


           <h3 className="title" data-aos="fade-up" data-aos-duration="1500"
    data-aos-easing="ease-in-out">Kombiprodukte der Firmen Sansiel & Duranox</h3>
           <div className="projects_list">
                {projectsList2}
           </div>
      </div>
     
    
    </div>
  );
    }

}

export default ProductsSection;
