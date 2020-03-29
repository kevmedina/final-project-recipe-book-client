import React, { Component } from "react";
import { AuthContext } from "../../context/index";

export default class Private extends Component {
  componentDidMount() {
    console.log("------------", this.context.state.currentUser);
    if (!this.context.state.isLoggedIn) {
      return this.props.history.push("/signup-page");
    }
  }

  render() {
    const { username } = this.context.state.currentUser;
    return (
      <div>
        <h3>Welcome to the Private Page!</h3>
        <p>User in session: {username}</p>
      </div>
    );
  }
}

Private.contextType = AuthContext;
