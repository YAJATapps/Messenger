import React, { Component } from 'react'
import './../css/MessageProfile.css';

// The person to be messaged. Contains title and changes the view on message view on clicking
export default class MessageProfile extends Component {

    render() {
        return (
            <div className='messageProfile' onClick={() => this.props.clickAt([this.props.id, this.props.name])}>
                <h1>{this.props.name}</h1>
            </div>
        )
    }
}
