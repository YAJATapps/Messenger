import React, { Component } from 'react'
import './../css/ChatMessage.css';

// This represents a message
export default class ChatMessage extends Component {
    render() {
        let boxColor = {
            backgroundColor: this.props.sent ? '#61dafb' : 'grey'
        };
        let boxAlign = {
            textAlign: 'left'
        };
        if (this.props.sent) {
            boxColor.marginLeft = '10%';
            boxAlign.textAlign = 'right';
        }
        return (
            <div className='chatMessage' style={boxColor}>
                <h3 style={boxAlign}>{this.props.message}</h3>
            </div>
        )
    }
}
