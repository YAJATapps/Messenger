import React, { Component } from 'react'
import './../css/Profile.css';

// The searched profile
export default class Profile extends Component {

    // Render this component
    render() {
        return (
            <div className='profile' onClick={() => this.props.loadSearchedUser(this.props.id, this.props.name)}>
                <h1>{this.props.name}</h1>
            </div>
        )
    }

}
