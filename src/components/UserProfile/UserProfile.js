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
          // const { currentUser } = context.state;
          // const { handleLogout } = context;
          return (
              <div className="right-panel">
                <Search />
              </div>
          );
        }}
      </AuthContext.Consumer>
    );
  }
}

UserProfile.contextType = AuthContext;
