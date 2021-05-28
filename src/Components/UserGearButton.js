import React from 'react'

export default function UserGearButton(props) {

    const handleClick = (e) => {
        props.removeUserGear(props.gear)
    }


    return (
        <div className="userGearButton">
            <p>{props.gear}</p> 
            <button onClick={ handleClick }>x</button>   
        </div>
    )
}
