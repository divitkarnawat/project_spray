import React ,{Component} from 'react';
import './ProjectSection.css';

import img1 from '../../../../assets/img/blogboil.png';
import img2 from '../../../../assets/img/blogtrain.png';
import img3 from '../../../../assets/img/blogwall.png';
import img4 from '../../../../assets/img/bloglab.png';
import img5 from '../../../../assets/img/caseStudy.png';
import img6 from '../../../../assets/img/whyus.jpg';
import img7 from '../../../../assets/img/bg7.jpg';

class Projects extends Component{

    constructor(props)
    {
        super(props);
        this.state = {
            pjt_img: "pjt_img"
        }
    
    }

    clickHandler =  ()=>
    {
        
        this.setState({pjt_img: "pjt_img moveOut"});
    }

    appdevHandler = ()=>{
        this.setState({pjt_img: "pjt_img"});
    }

    render(){
        return(
            <div className="section section_projects">
                <div className="container">
                <h2 className="title">
                    Our Projects
                </h2>
                    <div className="row">
                        <div className="col-sm-3" >
                            ALL
                        </div>
                        <div className="col-sm-3" onClick={this.appdevHandler}>
                            APP DEVELOPMENT
                            </div>
                            <div className="col-sm-3" onClick={this.clickHandler}>
                            ECOMMERCE
                            </div>
                            <div className="col-sm-3">
                            WEBSITES
                            </div>
                    </div>


                    <div className="project_images">
                        <div className="pjt_img">
                            <img src={img1} alt='project' />
                        </div>
                        <div className={this.state.pjt_img}>
                            <img src={img2} alt='project' />
                        </div>
                        <div className={this.state.pjt_img}>
                            <img src={img3} alt='project' />
                        </div>
                        <div className="pjt_img">
                            <img src={img4} alt='project' />
                        </div>
                        <div className="pjt_img">
                            <img src={img5} alt='project' />
                        </div>
                        <div className="pjt_img">
                            <img src={img6} alt='project' />
                        </div>
                        
              
                </div>
                </div>
            </div>
        );
    }
} 

export default Projects;