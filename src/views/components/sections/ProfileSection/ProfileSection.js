import React, {Component} from 'react';

import './ProfileSection.scss';
import teamCard1 from '../../../../assets/img/mf.jpg';
import teamCard3 from '../../../../assets/img/th.jpg';
import teamCard2 from '../../../../assets/img/gg.jpg';

class ProfileSection extends Component
{
    constructor(props)
    {
        super(props);
        this.state={
            content: {
                name:["Michael Friedmann","Gunter Gomola","Thomas Hensel"],
                desig:["Geschäftsführender Gesellschafter","Geschäftsführender Gesellschafter","Geschäftsführender Gesellschafter"],
                imgURL:[teamCard1, teamCard2, teamCard3],
                desc:[
                    "Geb. 1959 ||Nach seinem Studium der Betriebs- und Volkswirtschaftslehre an der Universität Hohenheim war Michael Friedmann ab 1985 für McDonald‘s in Deutschland und Großbritannien als Einkäufer tätig und wechselte im Mai 1990 als Director Purchasing Europe zu Continental Dairy Queen in Italien. ||Im Oktober 1992 trat er als stellvertretender Leiter der Verkaufsdirektion Süd in die Südzucker AG in Rain am Lech ein. 1997 wurde er zum Geschäftsführer der Südzucker International GmbH, Ochsenfurt, ernannt, welche die Zuckeraktivitäten der Südzucker AG in Osteuropa koordinierte. Von 2000 bis 2004 war Michael Friedmann außerdem Vorsitzender der Geschäftsführung der polnischen Vertriebs-Tochtergesellschaft der Südzucker AG Cukier Krolewski Sp.z o.o., Krakau. 2004 übernahm er die Leitung der Zentralabteilung Futtermittel und Nebenprodukte der Südzucker AG in Mannheim. ||Von April 2015 bis Februar 2020 war Michael Friedmann als Chief Sales Officer Mitglied des Vorstands der CropEnergies AG. Seit ihrer Gründung im April 2020 ist er geschäftsführender Gesellschafter der Sansiel GmbH in Mannheim.",
                    "Geb. 1951 ||Lufhansa bestimmte über 40 Jahre seinen beruflichen Werdegang. Nach seinem Einstieg  1971 bei Lufthansa Operations und schneller Verantwortung als Sektionsleiter Operations wurde Gomola nach Ausbildung zum Teacher on Demand 1989  zum Flight Manager ernannt. ||Als Gründungsmitglied der “Vereinigung Boden” wechselte er in den Personalbereich und übernahm ab 2004 bis zu seinem Unruhestand 2012 die Gesamtverantwortung als Schwerbehindertenvertreter für den Lufthansa-Konzern in Frankfurt. Seit ihrer Gründung im April 2020 ist Gomola geschäftsführender Gesellschafter der Sansiel GmbH in Mannheim.",
                    ""
                ]
            }
        }
    }
    componentDidMount()
    {
        window.scrollTo(0,0);
    }
    render()
    {
        let pid = 0;
      

        switch(this.props.match.params.pid)
        {
            case "MFriedmann": pid=0; break;
            case "GGomola": pid=1; break;
            case "THensel": pid = 2; break;
            default: pid=0; break;
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

<div className="section p_s">
           
           <div className="container">
               <div className="profile">
                   <div className="p_name">
                       <h2> {this.state.content.name[pid]}</h2>
                   </div>
                   <div className="p_img">
                   <img src={`https://sansiel.de/${this.state.content.imgURL[pid]}`} alt="profile pic" />

                        </div>
                        <h4>    {this.state.content.desig[pid]}</h4>
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