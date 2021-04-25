import React, { Component } from 'react'
import ChatContainer from './ChatContainer';
import ChatHeader from './ChatHeader';
import ChatInput from './ChatInput';
import './../css/MessagesView.css';

// The view which contains the chats header, chats container and the chat input
export default class MessagesView extends Component {

    constructor(props) {
        super(props);

        // The counter state is a number that is used only for updates
        this.state = {
            // Used for updating messages
            counter: 0
        };

        // Bind the method
        this.incrementCounter = this.incrementCounter.bind(this);
    }

    // Render this component
    render() {
        if (this.props.selectedId === '') {
            return (
                <div className='messagesView'>
                    <h1 className='centreError'>No message profile selected. Select from the messsages view or send someone a new message.</h1>
                </div>
            )
        }

        return (
            <div className='messagesView'>
                <ChatHeader
                    selectedName={this.props.selectedName}
                />

                <ChatContainer
                    uid={this.props.uid}
                    selectedId={this.props.selectedId}
                    counter={this.state.counter}
                />

                <ChatInput
                    uid={this.props.uid}
                    tid={this.props.selectedId}
                    incrementCounter={this.incrementCounter}
                />
            </div>
        )
    }

    // Increase the counter to update the messages
    incrementCounter() {
        this.setState({
            counter: this.state.counter + 1
        });
    }

}
