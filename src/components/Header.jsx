import React, { Component } from 'react'
import logo from './../img/logo.svg';
import './../css/Header.css';

// The header with icon and text
export default class Header extends Component {
    render() {
        return (
            <header className="App-header">
                <img src={logo} className="App-logo" alt="logo" />
                <h1>Messenger</h1>
            </header>
        )
    }
}
