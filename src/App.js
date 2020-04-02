import React from "react";
import { Switch, Route } from "react-router-dom";
import "./App.css";
import Signup from "./components/Authentication/Signup/Signup";
import Login from "./components/Authentication/Login/Login";
import Home from "./components/Home/Home";
import Private from "./components/Private/Private";
import NavBar from "./components/Navbar/Navbar";

function App() {
  return (
    <div className="App">
      <header>
        <NavBar />
      </header>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/signup-page" component={Signup} />
        <Route exact path="/login-page" component={Login} />
        <Route exact path="/private" component={Private} />
      </Switch>
      {/* <footer>Made with at Ironhack Miami - PTWD October 2019</footer> */}
    </div>
  );
}

export default App;
