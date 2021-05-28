import React from 'react'

export default function AreaCard({area}) {

    return (
        <div className="areaCard">
            <img src={area.image} alt={area.location}></img>
            <div className="cardText">
                <h1>{area.location}</h1>
                <h3>Gear Needed: {area.requirements}</h3>
                <a href={area.link}>Check it out on Mountain Project</a>
            </div>
        </div>
    )
}
