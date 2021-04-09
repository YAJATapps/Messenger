import React, { Component } from 'react'
import './../css/ChatHeader.css';

export default class ChatHeader extends Component {
    render() {
        return (
            <div className='chatHeader'>
                <h1>{this.props.selectedName}</h1>
            </div>
        )
    }
}
