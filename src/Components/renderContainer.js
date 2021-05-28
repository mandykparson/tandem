import React from 'react'
import ClimberCard from './ClimberCard'
import AreaCard from './AreaCard'
import ClimberContainer from "./ClimberContainer"
import AreaContainer from "./AreaContainer"

export default function RenderContainer(props) {

    
    return (
        <div className="renderContainer">
            <ClimberContainer climbers={props.climbers}/>
            <AreaContainer areas={props.areas}/>
        </div>
    )
}
