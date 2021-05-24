import React from 'react'
import ClimberCard from './ClimberCard'

export default function ClimberContainer({climbers}) {

    const showClimbers = (props) => {
        return props.map(prop => {
            return <ClimberCard climber={prop}/>
        })
    }
    return (
        <div>
            <h1>{showClimbers(climbers)}</h1>
        </div>
    )
}
