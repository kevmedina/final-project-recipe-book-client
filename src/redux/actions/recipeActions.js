import RECIPE_SERVICE from "../../services/RecipeService";

export const searchRecipes = (param) => (dispatch) => {
  RECIPE_SERVICE.searchRecipes(param)
    .then((recipeSearch) => {
      dispatch({ type: "SEARCH_RECIPES", recipeSearch });
    })
    .catch((err) =>
      console.log("Error while getting the recipes: ", { err: err.response })
    );
};

export const getRecipes = () => (dispatch) => {
  RECIPE_SERVICE.getRecipes()
    .then((recipes) => {
      dispatch({ type: "GET_RECIPES", recipes });
    })
    .catch((err) => console.log("Error while getting the recipes: ", err));
};

export const addRecipes = (recipeID, recipeBookID) => (dispatch) => {
  const newRecipe = this.state.recipes.find((recipe) => recipe.id === recipeID);
  newRecipe.bookID = recipeBookID;
  RECIPE_SERVICE.addRecipe(newRecipe)
    .then((recipe) => {
      dispatch({ type: "ADD_RECIPE", recipe });
    })
    .catch((err) => console.log("Error while adding a recipe: ", err));
};

export const addNewRecipe = (recipe) => (dispatch) => {
  RECIPE_SERVICE.addRecipe(recipe)
    .then((recipe) => {
      dispatch({ type: "NEW_RECIPE", recipe });
    })
    .catch((err) => console.log("Error while adding a new recipe: ", err));
};

export const addFavorite = (recipeID) => (dispatch) => {
  RECIPE_SERVICE.addFavorite(recipeID)
    .then((updatedRecipe) => {
      dispatch({ type: "ADD_FAVORITE", updatedRecipe });
    })
    .catch((err) =>
      console.log("Error while updating the recipe to a favorite: ", err)
    );
};

export const getRandomFoodTrivia = () => (dispatch) => {
  RECIPE_SERVICE.getRandomFoodTrivia()
    .then((randomTrivia) => {
      dispatch({ type: "RANDOM_TRIVIA", randomTrivia });
    })
    .catch((err) => console.log("Error while getting the recipes: ", err));
};
