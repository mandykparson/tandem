import React from 'react'
import UserInput from "./UserInput"
import UserGear from "./UserGear"

export default function UserInputContainer(props) {
    return (
        <div className="userInputContainer">
            <UserInput 
                updateUserGear={props.updateUserGear} 
                gearList={props.gearList}  />
            <UserGear 
                userGear={props.userGear} removeUserGear={props.removeUserGear}/>
        </div>
    )
}
