export default function UserInput(props) {

    const generateGearList = () => {
        return props.gearList.map(gear => {
            return (<button 
                        className="gear" 
                        onClick={() => props.updateUserGear(gear)}>{gear}
                    </button>)
        })
    }

    return (
        <div className="gearForm">
            <h2>What gear do you have? .gearForm</h2>
            <div className="gearListButtons">
                <p>These are .gearListButtons</p>
                {generateGearList()}
            </div>
        </div>
    )  
}
