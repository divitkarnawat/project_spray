import React, { Component, createRef } from 'react';
import './Ptest.scss';
import img1 from '../../../../assets/img/abt1.jpg';
import img2 from '../../../../assets/img/abt2.jpg';
import img3 from '../../../../assets/img/abt3.jpg';
//import img4 from '../../../../assets/img/abt1.jpg';

class Ptest extends Component{
    constructor(props)
    {
        super(props);
        this.popup = React.createRef();
    
        this.state = {
            content: [
                {
                    title: "LOREM IPSUM",
                    description: "Lorem ipsum dolor sit amet, consectetur Lorem ipsum dolor sit amet, consecteturLorem ipsum dolor sit amet, consectetur Lorem ipsum dolor sit amet, consectetur, consectetur Lorem ipsum. Lorem ipsum dolor sit amet, consectetur Lorem ipsum dolor sit amet, consectetur, consectetur Lorem ipsum",
                    imgURL: img3 
                },
                {
                    title: "LOREM IPSUM",
                    description: "Lorem ipsum dolor sit amet, consectetur Lorem ipsum dolor sit amet, consecteturLorem ipsum dolor sit amet, consectetur Lorem ipsum dolor sit amet, consectetur, consectetur Lorem ipsum. Lorem ipsum dolor sit amet, consectetur Lorem ipsum dolor sit amet, consectetur, consectetur Lorem ipsum",
                    imgURL: img1 
                },
                {
                    title: "LOREM IPSUM",
                    description: "Lorem ipsum dolor sit amet, consectetur Lorem ipsum dolor sit amet, consecteturLorem ipsum dolor sit amet, consectetur Lorem ipsum dolor sit amet, consectetur, consectetur Lorem ipsum. Lorem ipsum dolor sit amet, consectetur Lorem ipsum dolor sit amet, consectetur, consectetur Lorem ipsum",
                    imgURL: img2 
                },
                {
                    title: "LOREM IPSUM",
                    description: "Lorem ipsum dolor sit amet, consectetur Lorem ipsum dolor sit amet, consecteturLorem ipsum dolor sit amet, consectetur Lorem ipsum dolor sit amet, consectetur, consectetur Lorem ipsum. Lorem ipsum dolor sit amet, consectetur Lorem ipsum dolor sit amet, consectetur, consectetur Lorem ipsum",
                    imgURL: img3
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
                <div className="pcard" data-aos="fade-up"  data-aos-once="true"
   >
                    <div className="pimg">
                        <img src={projectCard.imgURL} />
                    </div>
                    <div className="pcontent">
                        <h3 className="ptitle">
                            {projectCard.title}
                        </h3>
                        
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