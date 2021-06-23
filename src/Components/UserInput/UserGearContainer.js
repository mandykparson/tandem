import React from 'react'
import UserGearButton from "./UserGearButton"

export default function UserGearContainer(props) {

    const renderGear = () => {
        return props.userGear.map(gear => {
           return <UserGearButton gear={gear} removeUserGear={props.removeUserGear}/>
        })
    }

    return (
        <div className="gearContainer">
            <div className="gearContainerHeader">
                <h2>My Gear</h2>
            </div>
            <div className="buttonContainer">
                {renderGear()}
            </div>
        </div>
    )
}
