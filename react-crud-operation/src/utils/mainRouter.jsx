/**
 *  Author Vinod Chauhan (vinodc45@gmail.com)
 */

import React, { Component } from "react";
import Route from "react-router-dom/Route";
import LoginComponent from "../components/LoginComponent";

/**
 * This component will help us to route different urls which are supported by our app.
 */
class MainRouter extends Component {
  render() {
    return (
      <div>
        {/** * For home path
         * Now we have added LoginComponent as our home Path, so that User can signin into our App.
         */}
        <Route path="/" exact component={LoginComponent} />
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
      </div>
    );
  }
}

export default MainRouter;
