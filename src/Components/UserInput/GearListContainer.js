import React from 'react'

export default function GearListContainer(props) {

    const generateGearList =() => {
        return props.gearList.map(gear => {
            return (<button 
                        key={gear.id}
                        className="buttons" 
                        onClick={() => props.updateUserGear(gear.gear)}
                        // onClick={props.updateCollectiveGear}
                        >{gear.gear}
                    </button>)
        })
    }

    return (
        <div className="gearContainer">
            <div className="gearContainerHeader">
                <h2>What gear do you have?</h2>
            </div>
            <div className="buttonContainer">
                {generateGearList()}
            </div>  
        </div>
    )
}
