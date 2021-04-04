import React, { Component } from 'react'
import ChatMessage from './ChatMessage';
import './ChatContainer.css';

export default class ChatContainer extends Component {

    constructor(props) {
        super(props);
        this.state = { messages: '' };
    }

    componentDidMount() {
        let url = 'http://127.0.0.1:5000/api/v1/messenger/chats?id=' + this.props.selectedId;
        fetch(url).then(res => res.json()).then((result) => {
            this.setState({
                messages: result
            });
        });
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
