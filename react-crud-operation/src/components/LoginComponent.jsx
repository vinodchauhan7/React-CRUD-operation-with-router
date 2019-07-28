/**
 *  Author Vinod Chauhan (vinodc45@gmail.com)
 */

import React, { Component } from "react";
import "../App.css";

/**
 * This Component basically creates a login form to log in into the app. We have used basic form
 * in react to advance further.
 */
class LoginComponent extends Component {
  state = {
    username: "",
    password: ""
  };

  handleUserName = event => {
    let { username } = this.state;
    username = event.target.value;
    this.setState({ username });
  };

  handlePassword = event => {
    let { password } = this.state;
    password = event.target.value;
    this.setState({ password });
  };

  //   handleSubmit = event => {
  //     alert(`${this.state.username} -- ${this.state.password}`);
  //     event.preventDefault();
  //   };

  render() {
    return (
      <div>
        <h6>SignIn Page</h6>
        <div className="signInBox">
          <form onSubmit={event => this.props.onLogin(this.state, event)}>
            <label>UserName :: </label>
            <input
              type="text"
              value={this.state.username}
              onChange={this.handleUserName}
            />
            <br />
            <label>Password :: </label>
            <input
              type="text"
              value={this.state.password}
              onChange={this.handlePassword}
            />
            <br />
            <button className="LogInButton" type="submit">
              LogIn
            </button>
          </form>
        </div>
      </div>
    );
  }
}

export default LoginComponent;
