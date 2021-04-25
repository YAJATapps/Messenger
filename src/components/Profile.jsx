import React, { Component } from 'react'
import './../css/Profile.css';

// The searched profile
export default class Profile extends Component {

    render() {
        return (
            <div className='profile'>
                <h1>{this.props.name}</h1>
            </div>
        )
    }
}
