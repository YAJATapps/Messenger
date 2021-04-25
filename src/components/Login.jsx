import React, { Component } from 'react'
import './../css/Login.css';

// The login page
export default class Login extends Component {

    constructor(props) {
        super(props);

        // The state of username and password contains these for the login
        // The state of signUsername and signPassword contains these for the signup
        this.state = {
            username: '',
            password: '',
            signUsername: '',
            signPassword: ''
        };

        // Bind the methods
        this.login = this.login.bind(this);
        this.signup = this.signup.bind(this);
        this.handleInputChange = this.handleInputChange.bind(this);
    }

    // Render this component
    render() {
        return (
            <>
                <div
                    className='signup-sheet'
                    onClick={() =>
                        this.signupSheet('none')
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

                <div
                    className='left-container'>
                    <div
                        className='left-content'>
                        <h2>Login to message with people on Messenger.</h2>
                    </div>
                </div>
                <div
                    className='right-container'>
                    <div
                        className='right-content'>
                        <form>
                            <input
                                name='username'
                                type='text'
                                placeholder='Username'
                                value={this.state.username}
                                onChange={this.handleInputChange} />
                            <br></br>

                            <input
                                name='password'
                                type='password'
                                placeholder='Password'
                                value={this.state.password}
                                onChange={this.handleInputChange} />
                            <br></br><br></br>

                            <button
                                type='button'
                                id='login'
                                className='button-blue'
                                onClick={this.login}>Login</button>
                            <br></br><br></br>
                            <hr></hr>

                            <h5>Create a new account</h5>

                            <button
                                type='button'
                                id='signup'
                                className='button-blue'
                                onClick={() =>
                                    this.signupSheet('block')
                                }>Sign Up</button>
                        </form>
                    </div>
                </div>
            </>
        )
    }

    // Handle login button click
    login() {
        // The username for login
        const user = this.state.username;

        // The password for login
        const pass = this.state.password;

        // Url to send the login info
        let url = process.env.REACT_APP_API_URL + '/api/v1/users/login?user=' + user + '&pwd=' + pass;

        // Send the login info to url with post
        fetch(url, { method: 'POST' })
            .then(res => res.json())
            .then((result) => {
                if (result)
                    this.props.flipLogin(user); // Login successful
                else
                    alert('Wrong username or password!'); // Login failed
            });
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
                    this.signupSheet('none');
                    this.setState({
                        signUsername: '',
                        signPassword: ''
                    });
                } else if (result.includes('alreadyExists')) // User already exists
                    alert('Username already exists!');
                else // Other error in signup
                    alert('Invalid username or password!');
            });
    }

    // Set the display of signup sheet
    signupSheet(state) {
        document.getElementsByClassName('signup-sheet')[0].style.display = state;
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
