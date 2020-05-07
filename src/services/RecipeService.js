import axios from "axios";

const baseURL = process.env.REACT_APP_SERVER_POINT;

const service = axios.create({
  baseURL,
  withCredentials: true,
});

const RECIPE_SERVICE = {
  searchRecipes(param) {
    return service.post(
      "/searchExternalAPI",
      { param },
      { withCredentials: true }
    );
  },
  addRecipe(recipe) {
    return service.post("/add-recipe", recipe, { withCredentials: true });
  },
  addFavorite(recipeID) {
    return service.post(`/recipe/${recipeID}/update`, {
      withCredentials: true,
    });
  },
  getRecipes() {
    return service.get("/recipes", { withCredentials: true });
  },
  getFavorites() {
    return service.get("/favorite-recipes", { withCredentials: true });
  },
  getRandomFoodTrivia() {
    return service.post("/random-trivia", { withCredentials: true });
  },
  getIngredients(id) {
    return service.post(`/get-ingredients/${id}`, { withCredentials: true });
  },
  deleteRecipe(recipeID, recipeBookID) {
    return service.post(
      "recipe/delete",
      { recipeID, recipeBookID },
      {
        withCredentials: true,
      }
    );
  },
};

export default RECIPE_SERVICE;
