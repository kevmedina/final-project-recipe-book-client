import React from "react";
import "./RecipeList.css";

const RecipeList = (props) => {
  // console.log({ props });
  console.log(props);
  const filteredRecipes = props.recipes.filter((recipe) => {
    return recipe.recipe.label
      .toLowerCase()
      .includes(props.searchRecipes.toLowerCase());
  });

  return (
    <div className="recipe-list">
      {filteredRecipes.map((recipe, index) => {
        return (
          <div key={index} className="recipe">
            <div>
              <img src={recipe.recipe.image} alt="recipe" />
            </div>
            <div>
              <h3>{recipe.recipe.label}</h3>
              <button><i className="fas fa-plus fa-fw"></i></button>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default RecipeList;
