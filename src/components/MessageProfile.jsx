import React, { Component } from 'react'
import './MessageProfile.css';

export default class MessageProfile extends Component {

    render() {
        return (
            <div className='messageProfile' onClick={() => this.props.selectId(this.props.id)}>
                <h1>{this.props.name}</h1>
            </div>
        )
    }
}
