import React, { Component } from "react";
import "./RecipeDetails.css";

class RecipeDetails extends Component {
  render() {
    const { recipe } = this.props.location.state;
    return (
      <div className="recipe-details">
        <div>
          <button className="back-btn" onClick={() => this.props.history.goBack()}>Back</button>
        </div>
        <div className="recipe-info-container">
          <div>
            <img
              src={`https://spoonacular.com/recipeImages/${recipe.image}`}
              alt="recipe details"
            />
          </div>
          <div className="recipe-info">
            <h4>{recipe.title}</h4>
            <p><b>Cook time:</b> {recipe.readyInMinutes} mins</p>
            <p><b>Servings:</b> {recipe.servings}</p>
          </div>
        </div>
      </div>
    );
  }
}

export default RecipeDetails;
