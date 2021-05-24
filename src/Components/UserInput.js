import React, { useState } from 'react'

export default function UserInput({userGear}) {
    
    // const createUserGearArray = () => {
    //     let gearArry = []
    //     if (input.id.gear1) {gearArry.push(input.id.gear1.value)}
    // }
    return (
        <form>
            <label>Name: </label>
                <input type="text" name="name"  />
            <label>Gear: I have... </label>
                <input type="checkbox" id="gear1" name="gear1" value="ATC"/>
                    <label for="gear1"> an ATC</label><br></br>
                <input type="checkbox" id="gear2" name="gear2" value="Rope"/>
                    <label for="gear2">a rope</label><br></br>
                <input type="checkbox" id="gear3" name="gear3" value="Trad Rack"/>
                    <label for="gear3"> a trad rack</label><br></br>
                <input type="checkbox" id="gear4" name="gear4" value="Crash Pad"/>
                    <label for="gear3"> a crash pad</label><br></br>
                <input type="checkbox" id="gear5" name="gear5" value="Quick Draws"/>
                    <label for="gear3"> some quick draws</label><br></br>
            <input type="submit" />
            {/* controlled forms get their values from state */}
        </form>
    )
    
}
