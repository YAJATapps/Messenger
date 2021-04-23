import React, { Component } from 'react'
import ContentBox from './ContentBox';
import Header from './Header';
import Login from './Login';

// The website fragment with header and content
export default class App extends Component {

  constructor(props) {
    super(props);
    this.state = { loggedIn: false, uid: -1 };
    this.flipLogin = this.flipLogin.bind(this);
  }

  render() {
    return (
      <>
        <Header />
        {!this.state.loggedIn && <Login flipLogin={this.flipLogin} />}
        {this.state.loggedIn && <ContentBox uid={this.state.uid}/>}
      </>
    );
  }

  flipLogin(username) {
    this.setState({
      loggedIn: true
    });

    let url = process.env.REACT_APP_API_URL + '/api/v1/users/id?user=' + username;
    fetch(url, { method: 'POST' })
      .then(res => res.json())
      .then((result) => {
        if (Array.isArray(result)) {
          this.setState({
            uid: result[0]
          });
        }
      })
  }
}