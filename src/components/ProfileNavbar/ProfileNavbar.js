import React, { Component } from "react";
import { AuthContext } from "../../context/index";
import { NavLink } from "react-router-dom";
import "./ProfileNavbar.css";

export default class UserProfile extends Component {
  componentDidMount() {
    console.log("------------", this.context.state.currentUser);
    if (!this.context.state.isLoggedIn) {
      return this.props.history.push("/signup-page");
    }
  }

  render() {
    return (
      <AuthContext.Consumer>
        {(context) => {
          const { currentUser } = context.state;
          const { handleLogout } = context;
          return (
            <div className="left-panel">
              <div>
                <button onClick={handleLogout}>Logout</button>
                <h1>{currentUser.username}</h1>
              </div>
              <div>
                <ul>
                  <li>
                    <NavLink to="/search">
                      <i className="fas fa-search fa-fw"></i> Search
                    </NavLink>
                  </li>
                  <li>
                    <NavLink to="/new-recipe">
                      <i className="fas fa-plus-square fa-fw"></i> New Recipe
                    </NavLink>
                  </li>
                  <li>
                    <NavLink to="/new-recipe">
                      <i className="fas fa-book-open fa-fw"></i> My Cookbooks
                    </NavLink>
                  </li>
                </ul>
              </div>
            </div>
          );
        }}
      </AuthContext.Consumer>
    );
  }
}

UserProfile.contextType = AuthContext;
