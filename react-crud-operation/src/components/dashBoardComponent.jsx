import React, { Component } from "react";

/**
 * This component will show the details of the user when logged in.
 */
class DashBoard extends Component {
  render() {
    return (
      <React.Fragment>
        <h3> Hello {this.props.userData.name} </h3>
        <div className="">
          <p>
            Username : {this.props.userData.username}
            <br />
            Age : {this.props.userData.age}
            <br />
            email : {this.props.userData.email}
            <br />
          </p>
        </div>
      </React.Fragment>
    );
  }
}

export default DashBoard;
