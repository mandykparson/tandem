import React from 'react'
import ClimberContainer from "./ClimberContainer"
import AreaContainer from "./AreaContainer"

export default function RenderContainer(props) {

    
    return (
        <div className="renderContainer">
            <AreaContainer areas={props.areas} userArea={props.userArea}/>
            <ClimberContainer climbers={props.climbers}/>
        </div>
    )
}
