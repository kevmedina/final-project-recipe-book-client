import React from "react";
import { Switch, Route } from "react-router-dom";
import "./App.css";
import Signup from "./components/Authentication/Signup/Signup";
import Login from "./components/Authentication/Login/Login";
import Home from "./components/Home/Home";
import UserProfile from "./components/UserProfile/UserProfile";

function App() {
  return (
    <div className="App">
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/signup-page" component={Signup} />
        <Route exact path="/login-page" component={Login} />
        <Route exact path="/user-profile" component={UserProfile} />
      </Switch>
    </div>
  );
}

export default App;
