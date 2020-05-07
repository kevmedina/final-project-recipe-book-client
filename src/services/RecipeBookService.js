import axios from "axios";

const baseURL = process.env.REACT_APP_SERVER_POINT;

const service = axios.create({
  baseURL,
  withCredentials: true,
});

const RECIPE_BOOK_SERVICE = {
  createNewRecipeBook(title) {
    return service.post("/add-recipebook", {title}, { withCredentials: true });
  },
  getRecipeBooks() {
    return service.get("/recipe-books", { withCredentials: true });
  },
  deleteRecipeBook(recipeBookID) {
    return service.post(`/recipe-books/${recipeBookID}/delete`);
  },
  getRecipesFromBook(recipeBookID) {
    return service.get(`/recipe-books/${recipeBookID}`);
  },
};

export default RECIPE_BOOK_SERVICE;
