import React from 'react'
import UserInput from "./UserInput"
import RenderContainer from "./renderContainer"

// Gear Array in order: ATC, Rope, Trad Rack, Crash Pad, Quick Draws

export default class MainDiv extends React.Component {

    state = {
        climbers: [],
        areas: [],
        hasATC: false,
        hasRope: false,
        hasTradRack: false,
        hasCrashPad: false,
        hasQuickDraws: false,
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
    
    render() {
        return (
            <div className="MainContent">
                <UserInput 
                    hasATC={this.state.hasATC} 
                    hasRope={this.state.hasRope} 
                    hasTradRack={this.state.hasTradRack} 
                    hasCrashPad={this.state.hasCrashPad} 
                    hasQuickDraws={this.state.hasQuickDraws}
                    />
                <RenderContainer climbers={this.state.climbers} areas={this.state.areas}/>
            </div>
        )
    }
}
