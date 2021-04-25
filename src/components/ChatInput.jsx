import React, { Component } from 'react'
import './../css/ChatInput.css';
import logo from './../img/send.svg';

// The input box where the user types message and the button to send
export default class ChatInput extends Component {

    constructor(props) {
        super(props);

        // The message state contains text in input box
        this.state = {
            message: ''
        };

        // Bind the methods
        this.handleMsgChange = this.handleMsgChange.bind(this);
        this.sendMessage = this.sendMessage.bind(this);
    }

    // Render this component
    render() {
        const handleEnter = e => {
            // Send message when enter key is pressed
            if (e.key === 'Enter') {
                this.sendMessage();
            }
        };
        return (
            <div
                className='chatInput'>
                <input
                    name='chatIn'
                    type='text'
                    placeholder='Write a message'
                    value={this.state.message}
                    onChange={this.handleMsgChange}
                    onKeyPress={handleEnter}
                />
                <img
                    src={logo}
                    alt='Send message'
                    width='24px'
                    height='24px'
                    onClick={this.sendMessage}
                />
            </div>
        )
    }

    // Handle the message change by updating the message state to value of input text
    handleMsgChange(event) {
        this.setState({
            message: event.target.value
        });
    }

    // Send the message
    sendMessage() {
        // The id of user sending message
        let uid = this.props.uid;

        // The id of user to send message to
        let tid = this.props.tid;

        // The message text
        let message = this.state.message;

        // Url to send the message
        let url = process.env.REACT_APP_API_URL + '/api/v1/messages/add?frm=' + uid + '&to=' + tid + '&msg=' + message;

        // Send the message to url with post
        fetch(url, { method: 'POST' })
            .then(res => res.json())
            .then((result) => {
                if (result.includes('addedMessage')) {
                    // Set the message state to empty when  message is sent
                    this.setState({
                        message: ''
                    });

                    // Increment the counter to update messages
                    this.props.incrementCounter();
                }
            });
    }

}
