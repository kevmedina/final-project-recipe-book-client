import React, { Component } from "react";
import { AuthContext } from "../../context/index";
import { NavLink, Link } from "react-router-dom";
import "./ProfileNavbar.css";

export default class UserProfile extends Component {
  componentDidMount() {
    // console.log("------------", this.context.state.currentUser);
    if (!this.context.state.isLoggedIn) {
      return this.props.history.push("/signup-page");
    }
  }

  render() {
    return (
      <AuthContext.Consumer>
        {(context) => {
          const {
            currentUser: { username, image },
          } = context.state;
          const { handleLogout } = context;
          return (
            <div className="side-navbar">
              <div>
                <img src={image} alt="cook" />
                <h1>{username}</h1>
              </div>

              <div>
                <ul>
                  <li>
                    <NavLink className="navlink" to="/user-profile">
                      <i className="fas fa-user fa-fw"></i> Profile
                    </NavLink>
                  </li>
                  <li>
                    <NavLink className="navlink" to="/search">
                      <i className="fas fa-search fa-fw"></i> Search
                    </NavLink>
                  </li>
                  <li>
                    <NavLink className="navlink" to="/new-recipe">
                      <i className="fas fa-plus-square fa-fw"></i> New Recipe
                    </NavLink>
                  </li>
                  <li>
                    <NavLink className="navlink" to="/new-recipebook">
                      <i className="fas fa-book fa-fw"></i> Recipe Books
                    </NavLink>
                  </li>
                </ul>
              </div>

              <div>
                <button onClick={handleLogout}>Logout</button>
                <Link to="/update-profile">
                  <button>Update Profile</button>
                </Link>
              </div>
            </div>
          );
        }}
      </AuthContext.Consumer>
    );
  }
}

UserProfile.contextType = AuthContext;
