import React, { Component } from 'react'
import './ContentBox.css';
import MessageMenu from './MessageMenu';
import MessagesView from './MessagesView';

// The box that contains the message menu which is a list of persons and the message views that shows messages
export default class ContentBox extends Component {
    constructor(props) {
        super(props);
        this.selectProfile = this.selectProfile.bind(this);
        this.state = { selectedId: '', selectedName: '' };
    }

    render() {
        return (
            <div className='contentBox'>
                <MessageMenu clickAt={this.selectProfile} />
                <MessagesView selected={this.state.selectedName} />
            </div>
        )
    }

    selectProfile(e) {
        this.setState({ selectedId: e[0], selectedName: e[1] });
    }
}
