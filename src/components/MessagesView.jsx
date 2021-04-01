import React, { Component } from 'react'
import './MessagesView.css';

export default class MessagesView extends Component {
    render() {
        if (this.props.selected === '') {
            return (
                <div className='messagesView'>
                    <h1 className='centreError'>No message profile selected. Select from the messsages view or send someone a new message.</h1>
                </div>
            )
        }

        return (
            <div className='messagesView'>
                <h1>{this.props.selected}</h1>
            </div>
        )
    }
}
