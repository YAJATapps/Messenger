import React, { Component } from 'react'

export default class MessageProfile extends Component {

    render() {
        return (
            <div className='messageProfile'>
                <h1>{this.props.name}</h1>
            </div>
        )
    }
}
