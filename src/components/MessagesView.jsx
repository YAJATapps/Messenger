import React, { Component } from 'react'
import './MessagesView.css';

export default class MessagesView extends Component {
    render() {
        return (
            <div className='messagesView'>
                <h1>{this.props.selected}</h1>
            </div>
        )
    }
}
