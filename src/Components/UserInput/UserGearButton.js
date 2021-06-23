import React from 'react'

export default function UserGearButton(props) {

    const handleClick = (e) => {
        props.removeUserGear(props.gear)
    }


    return (
        <div className="userGearFakeButton">
            <p className="buttons">{props.gear}
            <button className="xbutton" onClick={ handleClick }>X</button>   
            </p>
        </div>
    )
}
