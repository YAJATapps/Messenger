import React, { Component } from 'react'
import ContentBox from './ContentBox';
import Header from './Header';
import Login from './Login';

// The website fragment with header and content
export default class App extends Component {

  constructor(props) {
    super(props);

    // loggedIn state is whether the user is logged in, uid is the id the of the user if logged in
    this.state = {
      loggedIn: false,
      uid: -1
    };

    // Bind the method
    this.flipLogin = this.flipLogin.bind(this);
  }

  // Render this component
  render() {
    return (
      <>
        <Header />
        {!this.state.loggedIn && <Login flipLogin={this.flipLogin} />}
        {this.state.loggedIn && <ContentBox uid={this.state.uid} />}
      </>
    );
  }

  // Call when login is successful
  flipLogin(username) {
    // Set the loggedIn state to true
    this.setState({
      loggedIn: true
    });

    // Url to get the id from the username
    let url = process.env.REACT_APP_API_URL + '/api/v1/users/id?user=' + username;

    // Fetch the url with post
    fetch(url, { method: 'POST' })
      .then(res => res.json())
      .then((result) => {
        if (Array.isArray(result)) {
          // Set the id with result
          this.setState({
            uid: result[0]
          });
        }
      });
  }

}