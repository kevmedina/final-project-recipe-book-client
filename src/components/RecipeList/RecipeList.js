import React from "react";

const RecipeList = (props) => {
  // console.log({ props });
  console.log(props);
  const filteredRecipes = props.recipes.filter((recipe) => {
    return recipe.recipe.label
      .toLowerCase()
      .includes(props.searchRecipes.toLowerCase());
  });

  return (
    <div>
      {filteredRecipes.map((recipe, index) => {
        return (
          <div key={index}>
            <h3>{recipe.recipe.label}</h3>
          </div>
        );
      })}
    </div>
  );
};

export default RecipeList;
