import React from 'react'
import UserInput from "./UserInput/UserInput"
import RenderContainer from "./Rendered/renderContainer"

// Gear Array in order: ATC, Rope, Trad Rack, Crash Pad, Quick Draws

export default class MainDiv extends React.Component {

    state = {
        climbers: [],
        areas: [],
        gearList: [
            {
                id: 1,
                gear: "ATC"
            },
            {
                id: 2,
                gear: "Rope"

            },
            {
                id: 3,
                gear: "Trad Rack"

            },
            {
                id: 4,
                gear: "Crash Pad"

            },
            {
                id: 5,
                gear: "Quick Draws"
            }
        ],
        userGear: [], 
        userArea: [],
        collectiveGear: [],
        climberGear: [],
        areaGear: [],
        areaGearNeeded: [],
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
        const userGear = this.state.userGear
        const oldGear = this.state.userGear.filter(gear => {
            return gear !== gearToAdd
        })
        this.setState({
            userGear: [...oldGear, gearToAdd]
        })
        this.setState({
            collectiveGear: [...userGear, gearToAdd]
        })
        console.log(`userGear: ${this.state.userGear}`)
        console.log(`collectiveGear: ${this.state.collectiveGear}`)
    }

    removeUserGear = (gearToRemove) => {
        const updatedGear = this.state.userGear.filter(gear => {
            return gear !== gearToRemove})
        this.setState({
            userGear: updatedGear})
        this.setState({
            collectiveGear: [...updatedGear]
        })
        console.log(`userGear: ${this.state.userGear}`)
        console.log(`collectiveGear: ${this.state.collectiveGear}`)
    }

    updateUserAreaAndAreaGear = (selectedArea) => {
        const selectedAreaGear = selectedArea.requirements
        this.setState({
            userArea:[selectedArea]
        })
        this.setState({
            areaGear:[selectedAreaGear]
        })
        console.log(this.state.areaGear)
    }
    // updateAreaGearNeeded = (gearWeHave) => {
    // }
    
    render() {
        return (
            <div className="MainContent">
                <UserInput 
                    updateUserGear={this.updateUserGear}
                    gearList={this.state.gearList}
                    userGear={this.state.userGear}
                    removeUserGear={this.removeUserGear}
                    areas={this.state.areas}
                    updateUserAreaAndAreaGear={this.updateUserAreaAndAreaGear}
                    userArea={this.state.userArea}
                />
                <RenderContainer 
                    climbers={this.state.climbers} 
                    areas={this.state.areas}
                    userArea={this.state.userArea}
                    userGear={this.state.userGear}
                    collectiveGear={this.state.collectiveGear}
                />
            </div>
        )
    }
}
