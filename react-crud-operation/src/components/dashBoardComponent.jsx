import React, { Component } from "react";
import { withRouter } from "react-router-dom";

/**
 * This component will show the details of the user when logged in.
 */
class DashBoard extends Component {
  onUpdate = userData => {
    this.props.history.push({
      pathname: "/signUp",
      state: { data: userData }
    });
  };

  constructor(props) {
    super(props);
    console.log(props);
  }

  render() {
    const isAdmin = this.props.userData.username === "admin" ? true : false;
    return (
      <React.Fragment>
        <h3> Hello {this.props.userData.name} </h3>
        {isAdmin ? (
          <div>
            <table border="1" cellSpacing="1">
              <th>Username</th>
              <th>Password</th>
              <th>Age</th>
              <th>Name</th>
              <th>Email</th>
              <th>Update</th>
              <th>Delete</th>
              {this.props.dbData.map((data, index) => (
                <tr>
                  <th>{data.username}</th>
                  <th>{data.password}</th>
                  <th>{data.age}</th>
                  <th>{data.name}</th>
                  <th>{data.email}</th>
                  <th>
                    {data.username === "admin" ? (
                      ""
                    ) : (
                      <button onClick={() => this.onUpdate(data)}>
                        Update
                      </button>
                    )}
                  </th>
                  <th>
                    {data.username === "admin" ? (
                      ""
                    ) : (
                      <button onClick={() => this.props.onDelete(data)}>
                        Delete
                      </button>
                    )}
                  </th>
                </tr>
              ))}
            </table>
          </div>
        ) : (
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
        )}

        <button
          onClick={() => {
            this.props.loggedOut();
          }}
        >
          Logout
        </button>
      </React.Fragment>
    );
  }
}

export default withRouter(DashBoard);
