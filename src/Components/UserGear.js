import React from 'react'
import UserGearButton from "./UserGearButton"

export default function UserGear(props) {

    const renderGear = () => {
        return props.userGear.map(gear => {
           return <UserGearButton gear={gear} removeUserGear={props.removeUserGear}/>
        })
    }
    return (
        <div className="userGear">
            <h2>My Gear .userGear</h2>
            <p>buttons are .userGearButton</p>
            {renderGear()}

        </div>
    )
}
