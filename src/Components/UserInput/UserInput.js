import GearListContainer from "./GearListContainer"
import UserGearContainer from "./UserGearContainer"
import SelectAnArea from "./SelectAnArea"

export default function UserInput(props) {

    return (
        <div className="userInput">
            <GearListContainer gearList={props.gearList} updateUserGear={props.updateUserGear} updateCollectiveGear={props.updateCollectiveGear}/>
            <UserGearContainer userGear={props.userGear} removeUserGear={props.removeUserGear} updateCollectiveGear={props.updateCollectiveGear}/>
            <SelectAnArea areas={props.areas} updateUserAreaAndAreaGear={props.updateUserAreaAndAreaGear} userArea={props.userArea}/>
        </div>
    )  
}
