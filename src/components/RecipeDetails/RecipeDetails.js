import React, { Component } from "react";
import "./RecipeDetails.css";

class RecipeDetails extends Component {
  componentDidMount() {
    console.log(this.props.location.state);
  }
  render() {
    const { recipe } = this.props.location.state;
    console.log("Recipe details: ", recipe);
    return (
      <div className="recipe-details">
        <div>
          <div>
            <img
              src={`https://spoonacular.com/recipeImages/${recipe.image}`}
              alt="recipe details"
            />
          </div>
          <div>
            <h2>{recipe.title}</h2>
            <p>Cook time: {recipe.readyInMinutes} mins</p>
            <p>Servings: {recipe.servings}</p>
          </div>
        </div>
      </div>
    );
  }
}

export default RecipeDetails;
