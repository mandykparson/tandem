import React from 'react'
import AreaCard from "./AreaCard"

export default function AreaContainer(props) {
    const showAreas = () => {
        return props.areas.map(area => {
            return <AreaCard key={area.id} area={area}/>
        })
    }
    return (
        <div className="areaContainer">
            <h1>Area Container</h1>
            { showAreas() }
        </div>
    )
}
