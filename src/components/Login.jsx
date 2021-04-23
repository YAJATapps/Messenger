import React, { Component } from 'react'
import './../css/Login.css';

export default class Login extends Component {

    constructor(props) {
        super(props);
        this.state = {
            username: '',
            password: ''
        };

        this.login = this.login.bind(this);
        this.handleInputChange = this.handleInputChange.bind(this);
    }


    render() {
        return (
            <>
                <div className='left-container'>
                    <div className='left-content'>
                        <h2>Login to message with people on Messenger.</h2>
                    </div>
                </div>
                <div className='right-container'>
                    <div className='right-content'>
                        <form>
                            <input name='username' type='text' placeholder='Username' value={this.state.username} onChange={this.handleInputChange} /><br></br>
                            <input name='password' type='password' placeholder='Password' value={this.state.password} onChange={this.handleInputChange} /><br></br><br></br>
                            <button type='button' id='login' className='button-blue' onClick={this.login}>Login</button><br></br><br></br>
                            <hr></hr>
                            <h5>Create a new account</h5>
                            <button type='button' id='signup' className='button-blue'>Sign Up</button>
                        </form>
                    </div>
                </div>
            </>
        )
    }

    login() {
        const user = this.state.username;
        const pass = this.state.password;
        let url = process.env.REACT_APP_API_URL + '/api/v1/users/login?user=' + user + '&pwd=' + pass;
        fetch(url, { method: 'POST' })
            .then(res => res.json())
            .then((result) => {
                if (result)
                    this.props.flipLogin(user);
                else
                    alert('Wrong username or password!');
            })
    }

    handleInputChange(event) {
        const target = event.target;
        const value = target.value;
        const name = target.name;

        this.setState({
            [name]: value
        });
    }
}
