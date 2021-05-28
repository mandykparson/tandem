import React from 'react'
import UserInputContainer from "./UserInputContainer"
import RenderContainer from "./renderContainer"

// Gear Array in order: ATC, Rope, Trad Rack, Crash Pad, Quick Draws

export default class MainDiv extends React.Component {

    state = {
        climbers: [],
        areas: [],
        gearList: [
            "ATC",
            "Rope",
            "Trad Rack",
            "Crash Pad",
            "Quick Draws"
        ],
        userGear: []  
    }

    componentDidMount() {
        fetch('http://localhost:3000/climbers')
            .then(res => res.json())
            .then(apiClimbers => {
                this.setState({ 
                    climbers: apiClimbers})
            })

        fetch('http://localhost:3000/areas')
            .then(res => res.json())
            .then(apiAreas => {
                this.setState({
                    areas: apiAreas
                })
            })
    }

    updateUserGear = (gearToAdd) => {
        const oldGear = this.state.userGear.filter(gear => {
            return gear !== gearToAdd
        })
        this.setState({
            userGear: [...oldGear, gearToAdd]
        })
    }

    removeUserGear = (gearToRemove) => {
        const updatedGear = this.state.userGear.filter(gear => {
            return gear !== gearToRemove})
        this.setState({
            userGear: updatedGear})
    }
    
    render() {
        return (
            <div className="MainContent">
                <UserInputContainer  
                    updateUserGear={this.updateUserGear}
                    gearList={this.state.gearList}
                    userGear={this.state.userGear}
                    removeUserGear={this.removeUserGear}
                />
                <RenderContainer 
                    climbers={this.state.climbers} 
                    areas={this.state.areas}
                />
            </div>
        )
    }
}
