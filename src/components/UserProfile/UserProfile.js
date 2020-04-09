import React, { Component } from "react";
import { AuthContext } from "../../context/index";
import "./UserProfile.css";

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
          const { username } = context.state.currentUser;
          return (
            <div className="user-profile">
              <h1>Welcome {username} to MY CookBook.</h1>
              <p>Build your own personal cookbooks to make the best meals.</p>
            </div>
          );
        }}
      </AuthContext.Consumer>
    );
  }
}

UserProfile.contextType = AuthContext;
