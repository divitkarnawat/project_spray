import React, { Component } from 'react';
import './TeamSection.css';
import person from "../../../../assets/img/person1_team.jpg"; 
class Team extends Component{
    constructor(props)
    {
        super(props);
        this.state = {
            team_cards: [
                {
                    id : 0,
                    img_url: person,
                    name: "NAME",
                    designation: "CEO",
                    socialadd: "#"
                },
                {
                    id : 1,
                    img_url: person,
                    name: "NAME",
                    designation: "CTO",
                    socialadd: "#"
                },
                {
                    id : 2,
                    img_url: person,
                    name: "NAME",
                    designation: "COO",
                    socialadd: "#"
                },
                {
                    id : 3,
                    img_url: person,
                    name: "NAME",
                    designation: "CFO",
                    socialadd: "#"
                }
            ]
        }
    }

    render()
    {
        const team_cards = this.state.team_cards.map((team_card) =>{
                return(
                    <div className= "col-sm-12 col-md-3 mb-5 mt-4">
                        <div className="card card_team text-center">
                            <img className="card-img-top img_team" src = {team_card.img_url} alt = "team card image"/>
                            <div className="card-body">
                                <div className="card-title">
                                    {team_card.name}
                                </div>
                                <div className="card-text">
                                    {team_card.designation}
                                </div>
                                <div className="socialLink">
                                    <a href={team_card.socialadd}><i class="fab fa-linkedin-in" aria-hidden="true"></i> </a>
                                </div>
                            </div>
                        </div>
                    </div>
                );
        });
        return(
            <div className="section">
                <div className = "container">
                <h2 className="title_team">
                Team
                </h2>
                <p className="description">

                </p>
                </div>

                <div className="container">
                    <div className="row">                            
                       {team_cards}
                    </div>
                </div>
                
            </div>
        );
    }
}

export default Team;