import React, { Component } from 'react'
import './MessageProfile.css';

// The person to be messaged. Contains title and changes the view on message view on clicking
export default class MessageProfile extends Component {

    render() {
        return (
            <div className='messageProfile' onClick={() => this.props.selectId(this.props.id)}>
                <h1>{this.props.name}</h1>
            </div>
        )
    }
}
