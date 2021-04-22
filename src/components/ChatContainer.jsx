import React, { Component } from 'react'
import ChatMessage from './ChatMessage';
import './../css/ChatContainer.css';

export default class ChatContainer extends Component {

    constructor(props) {
        super(props);
        this.state = { messages: '' };
    }

    componentDidMount() {
        this.loadMessages();
    }

    componentDidUpdate(prevProps) {
        if (this.props.selectedId !== prevProps.selectedId) {
            this.loadMessages();
        }
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

    loadMessages() {
        let url = process.env.REACT_APP_API_URL + '/api/v1/messages/' + this.props.selectedId;
        fetch(url)
            .then(res => this.checkError(res))
            .then(res => res.json())
            .then((result) => {
                this.setState({
                    messages: result
                });
            })
            .catch(error => console.log(error));
    }

    checkError(response) {
        if (!response.ok) {
            throw Error(response.statusText);
        }
        return response;
    }
}
