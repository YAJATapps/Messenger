import React, { Component } from 'react'
import './../css/Login.css';

export default class Login extends Component {
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
                            <input type='text' id='username' name='username' placeholder='Username' /><br></br>
                            <input type='password' id='password' name='password' placeholder='Password' /><br></br><br></br>
                            <button type='submit' id='login' className='button-blue'>Login</button><br></br><br></br>
                            <hr></hr>
                            <h5>Create a new account</h5>
                            <button type='button' id='signup' className='button-blue'>Sign Up</button>
                        </form>
                    </div>
                </div>
            </>
        )
    }
}
