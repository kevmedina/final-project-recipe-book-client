import React, { Component } from "react";
import RECIPE_SERVICE from "../../services/RecipeService";
import "./RecipeDetails.css";

class RecipeDetails extends Component {
  state = {
    ingredients: {},
  };

  componentDidMount() {
    const {
      recipe: { id },
    } = this.props.location.state;
    RECIPE_SERVICE.getIngredients(id)
      .then((recipeIngredients) => {
        this.setState({
          ingredients: recipeIngredients.data,
        });
      })
      .catch((err) =>
        console.log("Error while getting the ingredients: ", err)
      );
  }

  render() {
    const { recipe } = this.props.location.state;
    console.log(this.state.ingredients.ingredients);
    return (
      <div className="recipe-details">
        <div>
          <button
            className="back-btn"
            onClick={() => this.props.history.goBack()}
          >
            Back
          </button>
        </div>
        <div className="recipe-info-container">
          <div>
            <img
              src={`https://spoonacular.com/recipeImages/${recipe.image}`}
              alt="recipe details"
            />
          </div>
          <div className="recipe-info">
            <h4 className="title">{recipe.title}</h4>
            <div>
              <span>
                <b>Ingredients:</b>
              </span>
              {this.state.ingredients.ingredients !== undefined
                ? this.state.ingredients.ingredients.map(
                    (ingredient, index) => {
                      return (
                        <span key={index}>
                          <span> {ingredient.name}, </span>
                        </span>
                      );
                    }
                  )
                : null}
            </div>
            <span>
              <b>Cook time:</b> {recipe.readyInMinutes} mins
            </span>
            <span>
              <b>Servings:</b> {recipe.servings}
            </span>
          </div>
        </div>
      </div>
    );
  }
}

export default RecipeDetails;
