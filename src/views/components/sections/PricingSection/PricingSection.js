import React, { Component } from 'react';
import './PricingSection.css';



class Pricing extends Component{

    constructor(props)
    {
        super(props);
        this.state={
            pricing_categories: [
                {
                    
                        cat: "Social Networking",
                        web_p: "€220k",
                        web_m: "4mo",
                        and_p: "€237k",
                        and_m: "4mo"
                    },
                    
                    {
                        cat: "Messaging",
                        web_p: "€220k",
                        web_m: "4mo",
                        and_p: "€237k",
                        and_m: "4mo"
                    },
                    
                    {
                        cat: "E-Commerce",
                        web_p: "€220k",
                        web_m: "4mo",
                        and_p: "€237k",
                        and_m: "4mo"
                    },
                    
                    {
                        cat: "Food Delivery",
                        web_p: "€220k",
                        web_m: "4mo",
                        and_p: "€237k",
                        and_m: "4mo"
                    }
                
            ]
        }
    }

    render()
    {

        let pricing_details = this.state.pricing_categories.map((pricing_category)=>{
            return(
            <tr>
                <th scope="row">{pricing_category.cat}</th>
                <td>{pricing_category.web_p} / {pricing_category.web_m}</td>
                <td>{pricing_category.and_p} / {pricing_category.and_m}</td>                
            </tr>
            );
        });
        return(
            <div className="section pricing_section">
                <div className="container">
                <h2 className="title">
                How much does it cost
                </h2>
                <p className="description">
                Our highly optimized development platform gets you higher quality with
lower costs than anywhere else – a simply better experience.
                </p>
   
   <div className="pricing_container">
       <div className="modal_price">
            <div className="components">
                <p className="comp_title"> COMPONENTS </p>
                <div className="container" id="comp">
                    <div >Backend</div>
                    <div>Design</div>
                    <div>Branding</div>
                </div>
            </div>
            
            <hr className="divider" />

            <div className="components">
                <p className="comp_title"> SPEED </p>
                <div className="container" id="comp">
                    <div>Relaxed</div>
                    <div>Normal</div>
                    <div>Fast</div>
                </div>
            </div>
       </div>
                <div className="pricingTable">
                <table class="table table-striped table-bordered price_table">
  <thead class="thead-dark">
    <tr>
      <th scope="col">CATEGORY</th>
      <th scope="col">WEB</th>
      <th scope="col">ANDROID</th>
    </tr>
  </thead>
  <tbody>

    {pricing_details}
    
  </tbody>
</table>
                </div>
                </div>
                </div>

            </div>
        );
    }
}

export default Pricing;