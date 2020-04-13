import React from "react";
import "./RecipeList.css";

const RecipeList = (props) => {
  console.log(props);
  const filteredRecipes = props.recipes.filter((recipe) => {
    return recipe.title
      .toLowerCase()
      .includes(props.searchRecipes.toLowerCase());
  });
  console.log("Filtered Recipes: ", filteredRecipes);

  return (
    <div className="recipe-list">
      {filteredRecipes.map((recipe, index) => {
        return (
          <div key={index} className="recipe">
            <div>
              <img
                src={`https://spoonacular.com/recipeImages/${recipe.image}`}
                alt="recipe"
              />
            </div>
            <div>
              <h3>{recipe.title}</h3>
              <button>
                <i className="fas fa-plus fa-fw"></i>
              </button>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default RecipeList;
