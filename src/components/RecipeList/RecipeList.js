import React from "react";
import { Link } from "react-router-dom";
import "./RecipeList.css";

const RecipeList = ({
  recipes,
  // recipeBooks,
  searchRecipes,
  addRecipe,
  addFavorite,
}) => {
  // console.log(props);
  const filteredRecipes = recipes.filter((recipe) => {
    return recipe.title.toLowerCase().includes(searchRecipes.toLowerCase());
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
                    recipe,
                  },
                }}
              >
                <h3>{recipe.title}</h3>
              </Link>
              <div>
                <i
                  onClick={() => addRecipe(recipe.id)}
                  className="fas fa-plus fa-fw"
                ></i>
                <i
                  onClick={() => addFavorite(recipe.id)}
                  className="far fa-star fa-fw"
                ></i>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default RecipeList;
