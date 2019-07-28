/**
 *  Author Vinod Chauhan (vinodc45@gmail.com)
 */

import React, { Component } from "react";
import Route from "react-router-dom/Route";
import LoginComponent from "../components/LoginComponent";
import { Redirect } from "react-router-dom";
import { withRouter } from "react-router-dom";
import DashBoard from "../components/dashBoardComponent";

/**
 * This component will help us to route different urls which are supported by our app.
 */
class MainRouter extends Component {
  state = {
    user: "",
    loggedIn: false,
    message: "",
    userData: [
      {
        username: "vinod7",
        password: "vinod",
        name: "Vinod Chauhan",
        age: "27",
        email: "vinodc45@gmail.com"
      },
      {
        username: "nikhil3",
        password: "nikhil",
        name: "Nikhil Jauhri",
        age: "28",
        gender: "ignitesofthelp@gmail.com"
      }
    ]
  };

  /**
   * This method will handle LogIn activity by User.
   */
  handleLogIn = (userCredential, event) => {
    event.preventDefault();
    //This setState is used to set correctCredentials state message
    this.setState({ message: "" });
    console.log("Logged In button clicked");
    const userCred = this.state.userData.filter(
      data => data.username === userCredential.username
    );

    if (userCred[0] !== undefined) {
      if (
        userCred[0].username === userCredential.username &&
        userCred[0].password === userCredential.password
      ) {
        //setUserName Value so that we can use it in other components
        this.setState({ user: userCred[0] });
        this.setState({ loggedIn: true });
        this.props.history.push("/dashboard");
      } //Matchin if Condition ends here
      else {
        this.setState({ message: "Wrong UserName and Password." });
      }
    } else {
      //if No username found as given per given by user.
      this.setState({
        message: "No username found :: " + userCredential.username
      });
    }
  }; //end of handleLoged in method

  render() {
    console.log("Render works");
    return (
      <div>
        <h3 className="warning">{this.state.message}</h3>
        {/** * For home path
         * Now we have added LoginComponent as our home Path, so that User can signin into our App.
         */}
        <Route
          path="/"
          exact
          component={() => <LoginComponent onLogin={this.handleLogIn} />}
        />
        {/** * for signup path 
            For checking purpose, we can type http://localhost:3000/signUp in url to check this route.
        */}
        <Route
          path="/signUp"
          exact
          render={() => {
            return <div>Let the user sign up Here</div>;
          }}
        />

        {/**
         * In This route, we will move to this component when user signed In
         * It also checks whether user logged in or not, If loggedIn then
         * we can navigate to "Dashboard" otherwise to home page.
         */}
        <Route
          path="/dashboard"
          exact
          component={() =>
            this.state.loggedIn ? (
              <DashBoard userData={this.state.user} />
            ) : (
              <Redirect to="/" />
            )
          }
        />
      </div>
    );
  }
}

export default withRouter(MainRouter);
