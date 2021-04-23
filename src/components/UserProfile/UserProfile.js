import React, { Component } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../../context/index";
import "./UserProfile.css";

export default class UserProfile extends Component {
  componentDidMount() {
    if (!this.context.state.isLoggedIn) {
      return this.props.history.push("/signup-page");
    }
    this.props.updateState();
    // this.props.getRandomFoodTrivia();
  }

  render() {
    // const { username } = this.context.state.currentUser;
    return (
      <AuthContext.Consumer>
        {(context) => {
          const { username } = context.state.currentUser;
          const { recipeBooks, recipesFromDB, favorites, trivia } = this.props;

          return (
            <div className="user-profile">
              <header>
                <h1 className="greeting">{username}</h1>
                <Link to="/new-recipe" className="create-btn">
                  <i className="fas fa-plus fa-fw"></i> New Recipe
                </Link>
              </header>
              <main>
                <section className="user-header">
                  <div>
                    <div className="item">
                      <div>
                        <i className="fas fa-utensils"></i>
                      </div>
                      <div>
                        <h3>Recipes </h3>
                        <span>{recipesFromDB.length}</span>
                      </div>
                    </div>

                    <div className="item">
                      <div>
                        <i className="fas fa-book"></i>
                      </div>
                      <div>
                        <h3>Recipes Books </h3>
                        <span>{recipeBooks.length}</span>
                      </div>
                    </div>

                    <div className="item">
                      <div>
                        <i className="fas fa-star"></i>
                      </div>
                      <div>
                        <h3>Favorite Recipes </h3>
                        <span>{favorites.length}</span>
                      </div>
                    </div>
                  </div>
                </section>

                {/* Favorites Section */}
                <section className="favorites-section">
                  <div>
                    <h2>Random Food Trivia</h2>
                    <h2>DID YOU KNOW?</h2>
                    <p>{trivia.text}</p>
                  </div>
                  <div>
                    <h2>Favorite Recipes</h2>
                    <div className="favorites">
                      {favorites.length !== 0 ? (
                        favorites.map((recipe, index) => {
                          return (
                            <Link
                              key={index}
                              className="link"
                              to={{
                                pathname: `/recipe-details`,
                                state: {
                                  recipe,
                                },
                              }}
                            >
                              <div>
                                <div>
                                  <img
                                    src={`https://spoonacular.com/recipeImages/${recipe.image}`}
                                    alt={recipe.title}
                                  />
                                </div>
                                <div>
                                  <h4>
                                    {recipe.title.slice(0, 30)}
                                    {recipe.title.length > 25 ? "..." : null}
                                  </h4>
                                </div>
                              </div>
                            </Link>
                          );
                        })
                      ) : (
                        <div>
                          <h4>
                            Click the star icon on a recipe to add a favorite
                          </h4>
                          <i className="fas fa-star fa-fw"></i>
                        </div>
                      )}
                    </div>
                  </div>
                </section>
              </main>
            </div>
          );
        }}
      </AuthContext.Consumer>
    );
  }
}

UserProfile.contextType = AuthContext;
