import React, { Component } from "react";
import { AuthContext } from "../../context/index";
import "./UserProfile.css";

export default class UserProfile extends Component {
  
  componentDidMount() {
    // console.log("------------", this.context.state.currentUser);
    if (!this.context.state.isLoggedIn) {
      return this.props.history.push("/signup-page");
    }
    this.props.updateState();
  }

  render() {
    // const { username } = this.context.state.currentUser;
    return (
      <AuthContext.Consumer>
        {(context) => {
          const { username } = context.state.currentUser;
          const {
            recipeBooks,
            recipesFromDB: { recipes },
            favorites,
          } = this.props;

          return (
            <div className="user-profile">
              <div className="user-header">
                <h1>Welcome {username} to MY CookBook.</h1>
                <p>Build your own personal cookbooks to make the best meals.</p>
              </div>

              <div className="user-info">
                <div>
                  <h3>Recipes: {recipes.length}</h3>
                  <h3>Recipe Books: {recipeBooks.length}</h3>
                  <h3>Favorite Recipes: {favorites.length}</h3>
                </div>
                <div>
                  <header>
                    <h1>Favorite Recipes</h1>
                  </header>
                  <div className="favorites">
                    {favorites.length !== 0 ? (
                      favorites.map((recipe, index) => {
                        return (
                          <div key={index}>
                            <div>
                              <img
                                src={`https://spoonacular.com/recipeImages/${recipe.image}`}
                                alt={recipe.title}
                              />
                            </div>
                            <div>
                              <h4>{recipe.title}</h4>
                            </div>
                          </div>
                        );
                      })
                    ) : (
                      <div>
                        Click the star icon on a recipe to add a favorite
                      </div>
                    )}
                  </div>
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
