import React, { Component } from "react";
import { AuthContext } from "../../context/index";
import { Switch, Route } from "react-router-dom";
import "./UserProfile.css";
import ProfileNavbar from "../ProfileNavbar/ProfileNavbar";
import Search from "../Search/Search";
import NewRecipe from "../NewRecipe/NewRecipe";

export default class UserProfile extends Component {
  componentDidMount() {
    console.log("------------", this.context.state.currentUser);
    if (!this.context.state.isLoggedIn) {
      return this.props.history.push("/signup-page");
    }
  }

  render() {
    // const { username } = this.context.state.currentUser;
    return (
      <AuthContext.Consumer>
        {(context) => {
          // const { currentUser } = context.state;
          // const { handleLogout } = context;
          return (
            <div className="profile">
              {/* Left div */}
              <ProfileNavbar />

              {/* Right Div */}
              <div className="right-panel">
                <Switch>
                  <Search />
                  <Route exact path="/new-recipe" component={NewRecipe} />
                  <Route exact path="/search" component={Search} />
                </Switch>
              </div>
            </div>
          );
        }}
      </AuthContext.Consumer>
    );
  }
}

UserProfile.contextType = AuthContext;
