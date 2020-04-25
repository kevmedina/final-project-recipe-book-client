import React, { Component } from "react";
import { Link } from "react-router-dom";
import "./RecipesFromBook.css";

class RecipesFromBook extends Component {
  componentDidMount() {
    this.props.getRecipesFromBook(this.props.match.params.recipeBookID);
  }

  render() {
    console.log("Props ", this.props);
    const {
      recipeBook,
      recipeBook: { recipes },
      deleteRecipe,
      addFavorite,
    } = this.props;

    return (
      <div className="all-recipes-in-book">
        <header>
          <h1>{recipeBook.title}</h1>
          <button
            className="back-btn"
            onClick={() => this.props.history.goBack()}
          >
            Back
          </button>
        </header>
        <div className="recipes">
          {recipes !== undefined
            ? recipes.map((recipe, index) => {
                return (
                  <div key={index} className="recipe">
                    <div>
                      <img
                        src={`https://spoonacular.com/recipeImages/${recipe.image}`}
                        alt="recipe"
                      />
                    </div>
                    <div>
                      <Link
                        className="link"
                        to={{
                          pathname: `/recipe-details`,
                          state: {
                            recipe,
                          },
                        }}
                      >
                        <h3>
                          {recipe.title.slice(0, 25)}
                          {recipe.title.length > 25 ? "..." : null}
                        </h3>
                      </Link>
                      <div className="recipe-info">
                        <i
                          onClick={() =>
                            deleteRecipe(recipe._id, recipeBook._id)
                          }
                          className="fas fa-trash fa-fw"
                        ></i>
                        <i
                          onClick={() => addFavorite(recipe._id)}
                          className="fas fa-star fa-fw"
                        ></i>
                      </div>
                    </div>
                  </div>
                );
              })
            : null}
        </div>
      </div>
    );
  }
}

export default RecipesFromBook;
