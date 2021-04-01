import React, { Component } from 'react'
import './ContentBox.css';
import MessageMenu from './MessageMenu';
import MessagesView from './MessagesView';

export default class ContentBox extends Component {
    render() {
        return (
            <div className='contentBox'>
                <MessageMenu />
                <MessagesView />
            </div>
        )
    }
}
