import React ,{Component} from 'react';
import './ProjectSection.css';

import img1 from '../../../../assets/img/blogboil.jpg';
import img2 from '../../../../assets/img/blogtrain.jpg';
import img3 from '../../../../assets/img/blogwall.jpg';
import img4 from '../../../../assets/img/bloglab.jpg';


class Projects extends Component{

    constructor(props)
    {
        super(props);
        this.state = {
            pjt_img: "pjt_img"
        }
    
    }

    render(){
        return(
            <div className="section section_projects">
                <div className="container">
                <h2 className="title">
                    Our Blog
                </h2>
                <hr className="divider" />
                </div>
               
                <div className="row no-gutters">
                    <div className="col-md-6 col-12 parts">
                    <div className="img-part">
                            <img src={img3} alt="" />
                        </div>
                        <div className="container content-part">
                        <h5>LOREM IPSUM</h5>
<p>
Lorem ipsum dolor sit amet, consectetur Lorem ipsum dolor sit amet, consecteturLorem ipsum dolor sit amet, consectetur Lorem ipsum dolor sit amet, consectetur, consectetur Lorem ipsum. Lorem ipsum dolor sit amet, consectetur Lorem ipsum dolor sit amet, consectetur, consectetur Lorem ipsum  
</p>
                        </div>
                        
                    </div>
                    <div className="col-md-6 col-12 parts">
                    <div className="img-part">
                            <img src={img4} alt="" />
                        </div>
                        <div className="container content-part">
                        <h5>LOREM IPSUM</h5>
<p>
Lorem ipsum dolor sit amet, consectetur Lorem ipsum dolor sit amet, consecteturLorem ipsum dolor sit amet, consectetur Lorem ipsum dolor sit amet, consectetur, consectetur Lorem ipsum. Lorem ipsum dolor sit amet, consectetur Lorem ipsum dolor sit amet, consectetur, consectetur Lorem ipsum  
</p>
                        </div>
                        
                    </div>
                </div>

                <div className="row no-gutters">
                    <div className="col-md-6 col-12 parts">
                        
                        <div className="container content-part">
                        <h5>LOREM IPSUM</h5>
<p>
Lorem ipsum dolor sit amet, consectetur Lorem ipsum dolor sit amet, consecteturLorem ipsum dolor sit amet, consectetur Lorem ipsum dolor sit amet, consectetur, consectetur Lorem ipsum. Lorem ipsum dolor sit amet, consectetur Lorem ipsum dolor sit amet, consectetur, consectetur Lorem ipsum  
</p>
                        </div>
                        <div className="img-part">
                            <img src={img1} alt="" />
                        </div>
                    </div>
                    <div className="col-md-6 col-12 parts">
                       
                        <div className="container content-part">
                        <h5>LOREM IPSUM</h5>
<p>
Lorem ipsum dolor sit amet, consectetur Lorem ipsum dolor sit amet, consecteturLorem ipsum dolor sit amet, consectetur Lorem ipsum dolor sit amet, consectetur, consectetur Lorem ipsum. Lorem ipsum dolor sit amet, consectetur Lorem ipsum dolor sit amet, consectetur, consectetur Lorem ipsum  
</p>
                        </div>
                        <div className="img-part">
                            <img src={img2} alt="" />
                        </div>
                    </div>
                </div>


              
      
           
            </div>
        );
    }
} 

export default Projects;