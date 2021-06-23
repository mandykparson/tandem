import React from 'react'

export default function SelectAnArea(props) {

    const createDropdownAreaOptions = () => {
        return props.areas.map(area => {
            return <p 
                    key={area.id}
                    onClick={() => handleClick(area) }>{area.location}</p>
        })
    }

    const handleClick = (e) => {
        props.updateUserAreaAndAreaGear(e)
    }
    return (
        <div className="gearContainer">
            <div className="gearContainerHeader">
                <h2>Select an Area</h2>
            </div>
            <div className="dropdown">
                <button class="dropbtn">Areas</button>
                    <div onChange={ handleClick }class="dropdown-content">
                        { createDropdownAreaOptions() }
                </div>
            </div>
        </div>
    )
}
