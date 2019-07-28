import React, { Component } from "react";
import Route from "react-router-dom/Route";

/**
 * This component will help us to route different urls which are supported by our app.
 */
class MainRouter extends Component {
  render() {
    return (
      <React.Fragment>
        {/** * For home path */}
        <Route
          path="/"
          exact
          render={() => {
            return <div>Hello User</div>;
          }}
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
      </React.Fragment>
    );
  }
}

export default MainRouter;
