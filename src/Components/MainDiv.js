import React from 'react'
import UserInput from "./UserInput"
import ClimberContainer from "./ClimberContainer"

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
            .then(result => {
                this.setState({ 
                    climbers: result })
            })
    }

    // toggleState = (gear) => {
    //     gear.setState({gear: true})
    // }
    
    render() {
        return (
            <div>
                <p>Main Content</p>
                <UserInput 
                    hasATC={this.state.hasATC} 
                    hasRope={this.state.hasRope} 
                    hasTradRack={this.state.hasTradRack} 
                    hasCrashPad={this.state.hasCrashPad} 
                    hasQuickDraws={this.state.hasQuickDraws}
                    />
                <ClimberContainer climbers={this.state.climbers}/>
            </div>
        )
    }
}

// componentDidMount() {
//     fetch('http://localhost:3000/areas')
//         .then(res => res.json())
//         .then(result => {
//             this.setState({ 
//                 areas: result })
//         })
// }