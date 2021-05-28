import React from 'react'
import { Card, Icon, Image } from 'semantic-ui-react'

export default function ClimberCard({climber}) {
    return (
        <div className="climberCard">
            <img src={climber.image} alt={climber.name}></img>
            <div className="cardText">
                <h1>{climber.name}</h1>
                <h3>Years Climbing: {climber.years}</h3>
                <p>{climber.bio}</p>
            </div>
        </div>
    ) 
}

