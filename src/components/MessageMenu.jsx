import React, { Component } from 'react'
import './MessageMenu.css';
import MessageProfile from './MessageProfile';

// The list of persons to message
export default class MessageMenu extends Component {

    render() {
        return (
            <div className='messageMenu'>
                <MessageProfile name='Person1' id='0' clickAt={this.props.clickAt}/>
                <MessageProfile name='Person2' id='1' clickAt={this.props.clickAt}/>
                <MessageProfile name='Person3' id='2' clickAt={this.props.clickAt}/>
            </div>
        )
    }
}
