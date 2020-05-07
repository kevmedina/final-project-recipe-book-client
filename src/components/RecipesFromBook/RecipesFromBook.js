import React, { Component } from "react";
import { Link } from "react-router-dom";
import RECIPE_BOOK_SERVICE from "../../services/RecipeBookService";
import RECIPE_SERVICE from "../../services/RecipeService";
import "./RecipesFromBook.css";

class RecipesFromBook extends Component {
  state = {
    recipeBook: null,
    recipes: null,
    addFavorite: null,
  };

  componentDidMount() {
    this.getRecipesFromBook(this.props.match.params.recipeBookID);
  }

  // Get all recipes for each book the user clicks on
  getRecipesFromBook = (recipeBookID) => {
    RECIPE_BOOK_SERVICE.getRecipesFromBook(recipeBookID)
      .then((response) => {
        this.setState({
          recipeBook: response.data,
          recipes: response.data.recipes,
          addFavorite: this.props.addFavorite,
        });
      })
      .catch((err) =>
        console.log("Error while getting recipes from book: ", err)
      );
  };

  // Delete a recipe from its recipe book
  deleteRecipe = (recipeID, recipeBookID) => {
    const result = window.confirm(
      "Click OK to permanently delete this recipe."
    );
    if (result) {
      RECIPE_SERVICE.deleteRecipe(recipeID, recipeBookID)
        .then(() => {
          let updatedRecipes = this.state.recipes.filter(
            (recipe) => recipe._id !== recipeID
          );
          this.setState({
            recipes: updatedRecipes,
          });
        })
        .catch((err) =>
          console.log("Error while deleting a recipe from its book: ", err)
        );
    }
  };

  render() {
    const { recipeBook, recipes, addFavorite } = this.state;

    return (
      <>
        {recipeBook && (
          <div className="all-recipes-in-book">
            <header>
              <button
                className="back-btn"
                onClick={() => this.props.history.goBack()}
              >
                Back
              </button>
              <h1>{recipeBook.title}</h1>
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
                          <div className="recipe-icons">
                            <i
                              onClick={() =>
                                this.deleteRecipe(recipe._id, recipeBook._id)
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
        )}
      </>
    );
  }
}

export default RecipesFromBook;
