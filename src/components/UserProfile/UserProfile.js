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
          const { recipeBooks } = this.props;
          return (
            <div className="user-profile">
              <div className="user-header">
                <h1>Welcome {username} to MY CookBook.</h1>
                <p>Build your own personal cookbooks to make the best meals.</p>
              </div>

              <div className="user-info">
                <div>
                  <h3>Recipe Books: {recipeBooks.length}</h3>
                  <h3>Recipes: </h3>
                </div>
                <div>
                  <h1>Top 5 Favorite Recipes</h1>
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
