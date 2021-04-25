import React, { Component } from 'react'
import './../css/ContentBox.css';
import MessageMenu from './MessageMenu';
import MessagesView from './MessagesView';

// The box that contains the message menu which is a list of persons and the message views that shows messages
export default class ContentBox extends Component {

    constructor(props) {
        super(props);

        // Bind the method
        this.selectProfile = this.selectProfile.bind(this);

        // The selectedId contains the id of selected user, selectedName contains name of selected user
        this.state = {
            selectedId: '',
            selectedName: ''
        };
    }

    // Render this component
    render() {
        return (
            <div className='contentBox'>
                <MessageMenu clickAt={this.selectProfile} uid={this.props.uid} />
                <MessagesView selectedId={this.state.selectedId} selectedName={this.state.selectedName} uid={this.props.uid} />
            </div>
        )
    }

    // Set the id and name to selected profile
    selectProfile(e) {
        this.setState({ selectedId: e[0], selectedName: e[1] });
    }

}
