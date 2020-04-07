import React from "react";
import { Switch, Route } from "react-router-dom";
import Landing from "../Home/Landing";
import Login from "../Authentication/Login/Login";
import Signup from "../Authentication/Signup/Signup";

const Home = () => {
  return (
    <div>
      <Switch>
        <Route exact path="/" component={Landing} />
        <Route exact path="/login-page" component={Login} />
        <Route exact path="/signup-page" component={Signup} />
      </Switch>
    </div>
  );
};

export default Home;
