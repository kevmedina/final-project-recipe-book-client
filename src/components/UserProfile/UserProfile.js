import React, { Component } from "react";
import { AuthContext } from "../../context/index";
import "./UserProfile.css";
import Search from "../Search/Search";

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
          const { handleLogout } = context;
          return (
            <div className="profile">
              <div className="container">
                <div>
                  <div>
                    <button onClick={handleLogout}>Logout</button>
                  </div>
                </div>
                <div>
                  <Search />
                </div>
              </div>
            </div>
          );
        }}
      </AuthContext.Consumer>
    );
  }
}

UserProfile.contextType = AuthContext;
