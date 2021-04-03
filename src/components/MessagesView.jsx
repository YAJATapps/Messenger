import React, { Component } from 'react'
import ChatMessage from './ChatMessage';
import './MessagesView.css';

// The view which contains the chats container and the chat header
export default class MessagesView extends Component {
    constructor(props) {
        super(props);
        this.state = { messages: '' };
    }

    componentDidMount() {
        let arr = [
            {
                msg: 'Hey',
                sent: false
            },
            {
                msg: 'Hi',
                sent: true
            },
            {
                msg: 'Hello',
                sent: false
            }
        ];

        this.setState({ messages: arr });
    }

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
                <div className='chatHeader'>
                    <h1>{this.props.selected}</h1>
                </div>
                <div className='chatsContainer'>
                    {this.state.messages.map((value, index) => {
                        return <ChatMessage key={index} message={value.msg} sent={value.sent} />
                    })}
                </div>
            </div>
        )
    }
}
