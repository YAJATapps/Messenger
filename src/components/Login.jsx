import React, { Component } from 'react'
import './../css/Login.css';
import SignupSheet from './SignupSheet';

// The login page
export default class Login extends Component {

    constructor(props) {
        super(props);

        // The state of username and password contains these for the login
        // searchOpen is bool whether signup sheet is open
        this.state = {
            username: '',
            password: '',
            searchOpen: false
        };

        // Bind the methods
        this.login = this.login.bind(this);
        this.handleInputChange = this.handleInputChange.bind(this);
    }

    // Render this component
    render() {
        return (
            <>
                {
                    this.state.searchOpen &&
                    <SignupSheet
                        hideSheet={() =>
                            this.setState({ searchOpen: false })
                        }
                    />
                }

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
                                    this.setState({ searchOpen: true })
                                }
                            >Sign Up</button>
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
