import React, { Component } from 'react'
import './ChatHeader.css';

export default class ChatHeader extends Component {
    render() {
        return (
            <div className='chatHeader'>
                <h1>{this.props.selected}</h1>
            </div>
        )
    }
}
