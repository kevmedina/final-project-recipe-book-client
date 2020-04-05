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
    const { username } = this.context.state.currentUser;
    const { handleLogout } = this.context;
    return (
      <div className="profile">
        <div className="container">
          <div>
            <div>
              <button onClick={handleLogout}>Logout</button>
            </div>
          </div>
          <div>
            <h3>Welcome to the Private Page!</h3>
            <p>User in session: {username}</p>
          </div>
        </div>
      </div>
    );
  }
}

UserProfile.contextType = AuthContext;
