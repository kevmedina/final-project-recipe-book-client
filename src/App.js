import React from "react";
import { Switch, Route } from "react-router-dom";
import "./App.css";
import Signup from "./components/Authentication/Signup/Signup";
import Login from "./components/Authentication/Login/Login";
import Home from "./components/Home/Home";
import UserProfile from "./components/UserProfile/UserProfile";
import { AuthContext } from "./context/index";
import Navbar from "./components/Navbar/Navbar";
import ProfileNavbar from "./components/ProfileNavbar/ProfileNavbar";
import NewRecipe from "./components/NewRecipe/NewRecipe";
import Search from "./components/Search/Search";

function App() {
  return (
    <AuthContext.Consumer>
      {(context) => {
        const { isLoggedIn, loading } = context.state;
        return (
          <div className="App">
            {loading ? (
              <h1>Hello</h1>
            ) : (
              <div>
                {isLoggedIn ? <ProfileNavbar /> : <Navbar />}
                <Switch>
                  <Route exact path="/" component={Home} />
                  <Route exact path="/signup-page" component={Signup} />
                  <Route exact path="/login-page" component={Login} />
                  <Route exact path="/user-profile" component={UserProfile} />
                  <Route exact path="/new-recipe" component={NewRecipe} />
                  <Route exact path="/search" component={Search} />
                </Switch>
              </div>
            )}
          </div>
        );
      }}
    </AuthContext.Consumer>
  );
}

export default App;
