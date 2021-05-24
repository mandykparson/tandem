import React from 'react'
import UserInput from "./UserInput"
import ClimberContainer from "./ClimberContainer"

export default class MainDiv extends React.Component {

    state = {
        climbers: [],
        areas: []
    }

    componentDidMount() {
        fetch('http://localhost:3000/climbers')
            .then(res => res.json())
            .then(result => {
                this.setState({ 
                    climbers: result })
            })
    }
    componentDidMount() {
        fetch('http://localhost:3000/areas')
            .then(res => res.json())
            .then(result => {
                this.setState({ 
                    areas: result })
            })
    }


    render() {
        console.log(this.state.climbers)
        console.log(this.state.areas)
        return (
            <div>
                <p>Main Content</p>
                <UserInput />
                <ClimberContainer climbers={this.state.climbers}/>
            </div>
        )
    }
}
