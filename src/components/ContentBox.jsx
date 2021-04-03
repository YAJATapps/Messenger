import React, { Component } from 'react'
import './ContentBox.css';
import MessageMenu from './MessageMenu';
import MessagesView from './MessagesView';

// The box that contains the message menu which is a list of persons and the message views that shows messages
export default class ContentBox extends Component {
    constructor(props) {
        super(props);
        this.selectId = this.selectId.bind(this);
        this.state = { selectedMessage: '' };
    }

    render() {
        return (
            <div className='contentBox'>
                <MessageMenu selectId={this.selectId} />
                <MessagesView selected={this.state.selectedMessage} />
            </div>
        )
    }

    selectId(e) {
        this.setState({ selectedMessage: e });
    }
}
