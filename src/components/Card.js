import React from 'react'

export default class Card extends React.Component{
    state = {
        toggle: true
    }

    toggleSwitch = () => {
        this.setState({
            toggle: !this.state.toggle
        })
    }

    picOrDetails = () => {
        return <ul>
            <li> <strong>specialty: </strong>{this.props.specialty}</li>
            <li> <strong>greased? </strong>{this.props.greased ? "Yes" : "No"}</li>
            <li> <strong>weight: </strong>{this.props.weight}</li>
            <li> <strong>Highest medal achieved: </strong>{this.props['highest medal achieved']}</li>
        </ul>
    }

    hideHog = (e) => {
        // console.log(e.target.parentNode.parentNode)
        e.target.parentNode.parentNode.style.display = "none"
    }

    render(){
        let urlName = this.props.name.toLowerCase().split(' ').join("_")
        let pigImg = require(`../hog-imgs/${urlName}.jpg`)

        return(
            <div className="ui eight wide column" onClick={this.toggleSwitch}>
                <h3>{this.props.name}</h3>
                { this.state.toggle ? <img src={pigImg} alt={this.props.name}/> : this.picOrDetails() }
                <div>
                    <button onClick={this.hideHog}>Hide</button>
                </div>
            </div>
        )
    }
}