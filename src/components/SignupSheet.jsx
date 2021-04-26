import React, { Component } from 'react'
import './../css/SignupSheet.css'

// The signup sheet
export default class SignupSheet extends Component {

    constructor(props) {
        super(props);

        // The state of signUsername and signPassword contains these for the 
        this.state = {
            signUsername: '',
            signPassword: ''
        };

        // Bind the methods
        this.signup = this.signup.bind(this);
        this.handleInputChange = this.handleInputChange.bind(this);
    }

    // Render this component
    render() {
        return (
            <div
                className='signup-sheet'
                onClick={
                    this.props.hideSheet
                }>

                <div
                    className='signup-content'
                    onClick={(e) =>
                        e.stopPropagation()
                    }>

                    <form>

                        <input name='signUsername'
                            type='text'
                            placeholder='Username'
                            value={this.state.signUsername}
                            onChange={this.handleInputChange} />
                        <br></br>

                        <input
                            name='signPassword'
                            type='password'
                            placeholder='Password'
                            value={this.state.signPassword}
                            onChange={this.handleInputChange} />
                        <br></br><br></br>

                        <button
                            type='button'
                            id='signup'
                            className='button-blue'
                            onClick={this.signup}>Signup</button>
                        <br></br><br></br>

                    </form>

                </div>
            </div>
        )
    }

    // Handle signup button click
    signup() {
        // The username for signup
        const user = this.state.signUsername;

        // The password for signup
        const pass = this.state.signPassword;

        // Url to send the signup info
        let url = process.env.REACT_APP_API_URL + '/api/v1/users/add?user=' + user + '&pwd=' + pass;

        // Send the signup info to url with post
        fetch(url, { method: 'POST' })
            .then(res => res.json())
            .then((result) => {
                if (result.includes('addedUser')) { // Successful signup
                    alert('Signup successful!');
                    this.props.hideSheet();
                } else if (result.includes('alreadyExists')) // User already exists
                    alert('Username already exists!');
                else // Other error in signup
                    alert('Invalid username or password!');
            });
    }

    // Handle input change
    handleInputChange(event) {
        const target = event.target;
        const value = target.value;
        const name = target.name;

        this.setState({
            [name]: value
        });
    }

}
