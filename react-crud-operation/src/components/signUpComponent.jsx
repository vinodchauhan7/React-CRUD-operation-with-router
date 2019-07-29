import React, { Component } from "react";
import { withRouter } from "react-router-dom";
import { Link } from "react-router-dom";

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

  constructor(props) {
    super(props);
    console.log(`${this.props.data}`);
  }

  componentWillMount() {
    if (this.props.location.state !== undefined) {
      this.setState({
        username: this.props.location.state.data.username,
        password: this.props.location.state.data.password,
        name: this.props.location.state.data.name,
        age: this.props.location.state.data.age,
        email: this.props.location.state.data.email
      });
    }
  }

  render() {
    console.log(`${this.props.location.state}`);
    return (
      <React.Fragment>
        <form onSubmit={event => this.props.onRegister(this.state, event)}>
          <label> UserName:: </label>{" "}
          <input
            type="text"
            value={this.state.username}
            onChange={this.handleUserName}
          />{" "}
          <br />
          <label> Password:: </label>{" "}
          <input
            type="text"
            value={this.state.password}
            onChange={this.handlePassword}
          />{" "}
          <br />
          <label> Name:: </label>{" "}
          <input
            type="text"
            value={this.state.name}
            onChange={this.handleName}
          />{" "}
          <br />
          <label> Age:: </label>{" "}
          <input type="text" value={this.state.age} onChange={this.handleAge} />{" "}
          <br />
          <label> Email:: </label>{" "}
          <input
            type="text"
            value={this.state.email}
            onChange={this.handleEmail}
          />{" "}
          <br />
          <button type="submit">
            {this.props.location.state !== undefined ? "Update" : "Register"}{" "}
          </button>{" "}
          &nbsp;&nbsp; &nbsp;
          <button>
            <Link to="/">SignIn</Link>
          </button>
        </form>{" "}
      </React.Fragment>
    );
  }
}

export default withRouter(SignUpForm);
