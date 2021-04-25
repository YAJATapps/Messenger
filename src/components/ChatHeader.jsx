import React, { Component } from 'react'
import './../css/ChatHeader.css';

// The chat header that contains the username of the person which is selected
export default class ChatHeader extends Component {

    // Render this component
    render() {
        return (
            <div className='chatHeader'>
                <h1>{this.props.selectedName}</h1>
            </div>
        )
    }
    
}
