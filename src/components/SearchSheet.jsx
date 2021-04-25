import React, { Component } from 'react'
import './../css/SearchSheet.css'
import Profile from './Profile';

// The search sheet that show the username of the users searched with the search box
export default class SearchSheet extends Component {

    constructor(props) {
        super(props)

        // The profiles states contains the object with name and id of users in search list
        this.state = {
            profiles: ''
        };
    }

    // Load profiles after the component mounts
    componentDidMount() {
        // Show all the users when component is mounted
        this.handleTextChange('');
    }

    // Render this component
    render() {
        return (
            <div
                className='search-sheet'
                onClick={this.props.hideSheet}>
                <div
                    className='search-content'
                    onClick={(e) =>
                        e.stopPropagation()
                    }>
                    <input
                        name='search-text'
                        type='text'
                        placeholder='Search profiles...'
                        onChange={(e) => this.handleTextChange(e.target.value)}
                    />
                    <br></br>

                    {Array.isArray(this.state.profiles) && this.state.profiles.map((value, index) => {
                        return <Profile
                            key={index}
                            name={value.name}
                            id={value.id}
                            loadSearchedUser={this.props.loadSearchedUser}
                        />
                    })}
                </div>
            </div>
        )
    }

    // Handle text changes in search box
    handleTextChange(text) {
        // Url to get the list of names that contain text
        let url = process.env.REACT_APP_API_URL + '/api/v1/users/find?user=' + text;

        // Fetch the url with post
        fetch(url, { method: 'POST' })
            .then(res => res.json())
            .then((result) => {
                // Set the result to profiles state
                this.setState({
                    profiles: result
                });
            });
    }

}
