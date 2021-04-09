import React, { Component } from 'react'
import './../css/ChatInput.css';
import logo from './../img/send.svg';

export default class ChatInput extends Component {
    render() {
        return (
            <div className='chatInput'>
                <input type='text' id='chatIn' name='chatIn' placeholder='Write a message' />
                <img src={logo} alt='Send message' width='24px' height='24px' />
            </div>
        )
    }
}
