/**
 *  Author Vinod Chauhan (vinodc45@gmail.com)
 */
import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
import "./App.css";
import MainRouter from "./utils/mainRouter";

function App() {
  return (
    <div className="App-basic">
      <div className="App">Welcome to React Crud Operation App</div>
      {/**
       * Router(BrowserRouter make our code react to routes based on url.)
       */}
      <Router>
        {/**
          MainRouter is added to give our app Router Functionality.
        */}
        <MainRouter />
      </Router>
    </div>
  );
}

export default App;
