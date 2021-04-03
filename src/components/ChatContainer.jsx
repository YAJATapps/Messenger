import React, { Component } from 'react'
import ChatMessage from './ChatMessage';
import './ChatContainer.css';

export default class ChatContainer extends Component {

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
        return (
            <div className='chatsContainer'>
                {Array.isArray(this.state.messages) && this.state.messages.map((value, index) => {
                    return <ChatMessage key={index} message={value.msg} sent={value.sent} />
                })}
            </div>
        )
    }
}
