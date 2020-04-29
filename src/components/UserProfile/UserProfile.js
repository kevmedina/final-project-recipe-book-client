import React, { Component } from "react";
import { Link } from "react-router-dom";
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
              <header>
                <h1 className="greeting">Welcome {username}</h1>
                <Link to="/new-recipebook" className="create-btn">
                  <i className="fas fa-plus fa-fw"></i> Create New
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
                        <span>{recipes.length}</span>
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
                  <div>Hello</div>
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
                                <h4>
                                  {recipe.title.slice(0, 30)}
                                  {recipe.title.length > 25 ? "..." : null}
                                </h4>
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
