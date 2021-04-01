import React, { Component } from 'react'
import './MessageMenu.css';
import MessageProfile from './MessageProfile';

export default class MessageMenu extends Component {
    componentDidMount() {

    }

    render() {
        return (
            <div className='messageMenu'>
                <MessageProfile name='Person1'/>
                <MessageProfile name='Person2'/>
                <MessageProfile name='Person3'/>
            </div>
        )
    }
}
