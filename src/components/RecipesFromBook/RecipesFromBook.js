import React, { Component } from "react";
import { Link } from "react-router-dom";
import "./RecipesFromBook.css";

class RecipesFromBook extends Component {
  render() {
    const { recipes } = this.props.recipeBook;
    const { recipeBook, deleteRecipe, addFavorite } = this.props;
    console.log("Books with recipes:", recipes);

    return (
      <div className="all-recipes-in-book">
        <header>
          <h1>{this.props.recipeBook.title}</h1>
          <button onClick={() => this.props.history.goBack()}>Back</button>
        </header>
        <div>
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
                        <h3>{recipe.title}</h3>
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
                          className="far fa-star fa-fw"
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
