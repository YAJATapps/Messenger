import React, { Component } from 'react'
import ChatContainer from './ChatContainer';
import ChatHeader from './ChatHeader';
import ChatInput from './ChatInput';
import './MessagesView.css';

// The view which contains the chats container and the chat header
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
                <ChatHeader selected={this.props.selected} />

                <ChatContainer />

                <ChatInput />
            </div>
        )
    }
}
