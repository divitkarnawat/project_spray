import React, { Component, createRef } from 'react';
import './Ptest.scss';
import img1 from '../../../../assets/img/blogboil.jpg';
import img2 from '../../../../assets/img/blogtrain.jpg';
import img3 from '../../../../assets/img/blogwall.jpg';
import img4 from '../../../../assets/img/bloglab.jpg';

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
                },
                {
                    title: "LOREM IPSUM",
                    description: "Lorem ipsum dolor sit amet, consectetur Lorem ipsum dolor sit amet, consecteturLorem ipsum dolor sit amet, consectetur Lorem ipsum dolor sit amet, consectetur, consectetur Lorem ipsum. Lorem ipsum dolor sit amet, consectetur Lorem ipsum dolor sit amet, consectetur, consectetur Lorem ipsum",
                    imgURL: img4 
                }
            ],
            popactive: 0
        }
    }
    

    handlePopup = (cidx) =>
    {    
       const submenu = this.popup.current;
       if(!submenu.classList.contains('popup_display'))
       {
            submenu.classList.add('popup_display');
            setTimeout(function(){
                submenu.classList.add('popup_fadein');
            }, 10);
            this.setState({popactive: cidx});
       }
       else
       {
           submenu.classList.remove('popup_fadein');
           setTimeout(function(){
               submenu.classList.remove('popup_display');
           }, 500);
       }

    }

render()
{
   

    let projectCardsr1 = this.state.content.map((projectCard,idx)=>{
        if(idx<2) return(

              <div className="row" style={{margin: `0 auto`}}>
                  <div className="col-12">
                <div className="pcard">
                    <div className="pimg">
                        <img src={projectCard.imgURL} />
                    </div>
                    <div className="pcontent">
                        <div className="ptitle">
                            {projectCard.title}
                        </div>
                        <div className="pdescription">
                            {projectCard.description}
                        </div>
                    </div>
                    <button className="pbutton" onClick={()=>{console.log(idx); this.handlePopup(idx)}}>Learn More</button>
                </div>
                </div>
            </div>
    
        );
    
    })
    let projectCardsr2 = this.state.content.map((projectCard,idx)=>{
        if(idx>1) return(
            
              <div className="row"style={{margin: `0 auto`}}>
                  <div className="col-12">
                <div className="pcard">
                    <div className="pimg">
                        <img src={projectCard.imgURL} />
                    </div>
                    <div className="pcontent">
                        <div className="ptitle">
                            {projectCard.title}
                        </div>
                        <div className="pdescription">
                            {projectCard.description}
                        </div>
                    </div>
                    <button className="pbutton" onClick={()=>{this.handlePopup(idx)}}>Learn More</button>
                    </div>
                </div>
            </div>
    
        );
    
    })

    return(
    
            
            <div className="ptest_section">
                <div className="popup" ref={this.popup}>
                    <div className="backbtn" onClick={()=>{this.handlePopup(0)}}>{`<-`}</div>
                    <div className="popup_content">
                        <h2>{this.state.content[this.state.popactive].title}</h2>
                        <p>{this.state.content[this.state.popactive].description}</p>
                    </div>
                </div>
            <div className="title"><h3>UNSER BLOG</h3></div>
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