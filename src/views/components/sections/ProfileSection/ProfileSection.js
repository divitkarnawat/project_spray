import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import './ProfileSection.scss';
class ProfileSection extends Component
{
    constructor(props)
    {
        super(props);
        this.state={
            content: {
                name:["Gunter Gomola","Thomas Hensel","Michael Friedmann"],
                desig:["Geschäftsführender Gesellschafter","Geschäftsführender Gesellschafter","Geschäftsführender Gesellschafter"],
                desc:[
                    "",
                    "",
                    "Geb. 1995 ||Nach seinem Studium der Betriebs- und Volkswirtschaftslehre an der Universität Hohenheim war Michael Friedmann ab 1985 für McDonald‘s in Deutschland und Großbritannien als Einkäufer tätig und wechselte im Mai 1990 als Director Purchasing Europe zu Continental Dairy Queen in Italien. ||Im Oktober 1992 trat er als stellvertretender Leiter der Verkaufsdirektion Süd in die Südzucker AG in Rain am Lech ein. 1997 wurde er zum Geschäftsführer der Südzucker International GmbH, Ochsenfurt, ernannt, welche die Zuckeraktivitäten der Südzucker AG in Osteuropa koordinierte. Von 2000 bis 2004 war Michael Friedmann außerdem Vorsitzender der Geschäftsführung der polnischen Vertriebs-Tochtergesellschaft der Südzucker AG Cukier Krolewski Sp.z o.o., Krakau. 2004 übernahm er die Leitung der Zentralabteilung Futtermittel und Nebenprodukte der Südzucker AG in Mannheim. ||Von April 2015 bis Februar 2020 war Michael Friedmann als Chief Sales Officer Mitglied des Vorstands der CropEnergies AG. Seit ihrer Gründung im April 2020 ist er geschäftsführender Gesellschafter der Sansiel GmbH in Mannheim."
                ]
            }
        }
    }
   
    render()
    {
        let pid = 0;
        let imgsrc = this.props.location.state.imgsrc;

        switch(this.props.match.params.pid)
        {
            case "GGomola": pid=0; break;
            case "THensel": pid=1; break;
            case "MFriedmann": pid = 2; break;
            default: pid=2; break;
        }
        let desc = this.state.content.desc[pid].split('||').map((desc)=>{
            return(
                <p>
                    {desc}
                </p>
            );
        })

       return(
           <>
        <Link to="/"><div className="backbtn">Home</div></Link>
           <div className="section p_s">
           
               <div className="container">
                   <div className="profile">
                       <div className="p_name">
                           <h2> {this.state.content.name[pid]}</h2>
                       </div>
                       <div className="p_img">
                           <img src={imgsrc} alt="profile pic" />
                           {console.log(imgsrc)}
                       </div>
                       <div className="p_desc">
                           {desc}
                       </div>
                   </div>
               </div>
           </div>
           </>
       );
    
    }
}

export default ProfileSection;