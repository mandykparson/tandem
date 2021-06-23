import React from 'react'
import ClimberCard from "./ClimberCard"

export default function ClimberContainer(props) {
    const showClimbers = () => {
        return props.climbers.map(climber => {
            return <ClimberCard key={climber.id} climber={climber}/>
        })
    }
    return (
        <div className="climberContainer">
            <h1>Climbers</h1>
            {showClimbers()}
        </div>
    )
}
