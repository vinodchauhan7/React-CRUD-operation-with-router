import React, { Component } from "react";

class SignUpForm extends Component {
  state = {
    username: "",
    password: "",
    name: "",
    age: "",
    email: ""
  };

  handleUserName = event => {
    this.setState({ username: event.target.value });
  };

  handlePassword = event => {
    this.setState({ password: event.target.value });
  };

  handleName = event => {
    this.setState({ name: event.target.value });
  };

  handleAge = event => {
    this.setState({ age: event.target.value });
  };

  handleEmail = event => {
    this.setState({ email: event.target.value });
  };

  render() {
    return (
      <React.Fragment>
        <form onSubmit={event => this.props.onRegister(this.state, event)}>
          <label> UserName:: </label>
          <input
            type="text"
            value={this.state.username}
            onChange={this.handleUserName}
          />
          <br />
          <label> Password:: </label>
          <input
            type="text"
            value={this.state.password}
            onChange={this.handlePassword}
          />
          <br />
          <label> Name:: </label>
          <input
            type="text"
            value={this.state.name}
            onChange={this.handleName}
          />
          <br />
          <label> Age:: </label>
          <input type="text" value={this.state.age} onChange={this.handleAge} />
          <br />
          <label> Email:: </label>
          <input
            type="text"
            value={this.state.email}
            onChange={this.handleEmail}
          />
          <br />
          <button type="submit">Register</button>
        </form>
      </React.Fragment>
    );
  }
}

export default SignUpForm;
