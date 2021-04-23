import React, { Component } from 'react'
import './../css/ChatInput.css';
import logo from './../img/send.svg';

export default class ChatInput extends Component {

    constructor(props) {
        super(props);
        this.state = {
            message: ''
        };

        this.handleMsgChange = this.handleMsgChange.bind(this);
        this.sendMessage = this.sendMessage.bind(this);
    }

    render() {
        return (
            <div className='chatInput'>
                <input name='chatIn' type='text' placeholder='Write a message' value={this.state.message} onChange={this.handleMsgChange} />
                <img src={logo} alt='Send message' width='24px' height='24px' onClick={this.sendMessage} />
            </div>
        )
    }

    handleMsgChange(event) {
        this.setState({
            message: event.target.value
        });
    }

    sendMessage() {
        let uid = this.props.uid;
        let tid = this.props.tid;
        let message = this.state.message;
        let url = process.env.REACT_APP_API_URL + '/api/v1/messages/add?frm=' + uid + '&to=' + tid + '&msg=' + message;
        fetch(url, { method: 'POST' })
            .then(res => res.json())
            .then((result) => {
                if (result.includes('addedMessage')) {
                    this.setState({
                        message: ''
                    });
                    this.props.incrementCounter();
                }
            })
    }
}
