import React, { Component } from 'react'
import ContentBox from './ContentBox';
import Header from './Header';
import Login from './Login';

// The website fragment with header and content
export default class App extends Component {

  constructor(props) {
    super(props);
    this.state = { loggedIn: false };
    this.flipLogin = this.flipLogin.bind(this);
  }

  render() {
    return (
      <>
        <Header />
        {!this.state.loggedIn && <Login flipLogin={this.flipLogin} />}
        {this.state.loggedIn && <ContentBox />}
      </>
    );
  }

  flipLogin() {
    this.setState({
      loggedIn: true
    });
  }
}