import React, { Component } from 'react'
import './MessageMenu.css';
import MessageProfile from './MessageProfile';

// The list of persons to message
export default class MessageMenu extends Component {

    constructor(props) {
        super(props);
        this.state = { profiles: '' };
    }

    // Load profiles after the component mounts
    componentDidMount() {
        this.loadProfiles();
    }

    render() {
        return (
            <div className='messageMenu'>
                {Array.isArray(this.state.profiles) && this.state.profiles.map((value, index) => {
                    return <MessageProfile key={index} name={value.name} id={value.id} clickAt={this.props.clickAt} />
                })}
            </div>
        )
    }

    // Fetch the profiles from API and load it into profiles state
    loadProfiles() {
        let url = 'http://127.0.0.1:5000/api/v1/messenger/profiles';
        fetch(url)
            .then(res => this.checkError(res))
            .then(res => res.json())
            .then((result) => {
                this.setState({
                    profiles: result
                });
            })
            .catch(error => console.log(error));
    }

    checkError(response) {
        if (!response.ok) {
            throw Error(response.statusText);
        }
        return response;
    }
}
