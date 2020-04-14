import React from "react";
import { Link } from "react-router-dom";
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
              <Link
                to={{
                  pathname: `/recipe-details`,
                  state: {
                    recipe
                  }
                }}
              >
                <h3>{recipe.title}</h3>
              </Link>
              <button>
                <i className="fas fa-plus fa-fw"></i>
              </button>
              <button>
                <i className="far fa-star fa-fw"></i>
              </button>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default RecipeList;
