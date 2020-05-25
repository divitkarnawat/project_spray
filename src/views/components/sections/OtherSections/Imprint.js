import React, { Component } from 'react';
import './OtherSections.scss';
class Imprint extends Component
{
    constructor(props)
    {
        super(props);
        this.state={
            headings: ["ANGABEN GEMÄSS 5 TM","KONTAKT","VERANTWORTLICH FÜR DEN INHALT NACH § 55 ABS. 2 RSTV","STREITSCHLICHTUNG","HAFTUNG FÜR INHALTE","URHEBERRECHT"],
            desc: ["Sansiel GmbH||Augustaanlage 17||Mannheim 68165||Deutschland||eingetragen im Handelsregister von Deutschland unter HRB 736459,||vertreten durch die Geschäftsführer||-	Michael Friedmann||-	Gunter Gomola||-	Thomas Hensel",
                    "Telefon: +49 621 405492 00||E-Mail: kontakt@sansiel.de",
                    "Sansiel GmbH||Augustaanlage 17||Mannheim 68165||Deutschland",
                    "Die Europäische Kommission stellt eine Plattform zur Online-Streitbeilegung (OS) bereit:||https://ec.europa.eu/consumers/odr.||Unsere E-Mail-Adresse finden Sie oben im Impressum.||Wir sind nicht bereit oder verpflichtet, an Streitbeilegungsverfahren vor einer||Verbraucherschlichtungsstelle teilzunehmen.",
                    "Als Dienstanbieter sind wir gemäß § 7 Abs.1 TMG für eigene Inhalte auf diesen Seiten nach den allgemeinen Gesetzen verantwortlich. Nach §§ 8 bis 10 TMG sind wir als Dienstanbieter jedoch nicht verpflichtet, übermittelte oder gespeicherte fremde Informationen zu überwachen oder nach Umständen zu forschen, die auf eine rechtswidrige Tätigkeit hinweisen.Verpflichtungen zur Entfernung oder Sperrung der Nutzung von Informationen nach den allgemeinen Gesetzen bleiben hiervon unberührt. Eine diesbezügliche Haftung ist jedoch erst ab dem Zeitpunkt der Kenntnis einer konkreten Rechtsverletzung möglich. Bei Bekanntwerden von entsprechenden Rechtsverletzungen werden wir diese Inhalte umgehend entfernen.",
                    "Die durch die Seitenbetreiber erstellten Inhalte und Werke auf diesen Seiten unterliegen dem deutschen Urheberrecht. Die Vervielfältigung, Bearbeitung, Verbreitung und jede Art der Verwertung außerhalb der Grenzen des Urheberrechtes bedürfen der schriftlichen Zustimmung des jeweiligen Autors bzw. Erstellers.||Downloads und Kopien dieser Seite sind nur für den privaten, nicht kommerziellen Gebrauch gestattet. Soweit die Inhalte auf dieser Seite nicht vom Betreiber erstellt wurden, werden die Urheberrechte Dritter beachtet. Insbesondere werden Inhalte Dritter als solche gekennzeichnet. Sollten Sie trotzdem auf eine Urheberrechtsverletzung aufmerksam werden, bitten wir um einen entsprechenden Hinweis. Bei Bekanntwerden von Rechtsverletzungen werden wir derartige Inhalte umgehend entfernen."        
            ]
        }
    }

    render()
    {
        const content = this.state.headings.map((heading, idx)=>{
            let desc = this.state.desc[idx].split('||').map((desc)=>{
                return (<p> {desc}</p>);
            });
            return (<div className="part">
                <h4 >{heading}</h4>
                <div className="desc">{desc}</div>
                </div>);
        })
        return(
            <>
                <div className="section" id="i_s">
                    <div className="container ">
                    <h2> Impressum </h2>
                    <div className="imprint">
                    {content}
                    </div>
                    </div>
                </div>
            </>

        );
    }
}

export default Imprint;