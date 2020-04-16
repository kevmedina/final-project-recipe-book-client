import axios from "axios";

const baseURL = process.env.REACT_APP_SERVER_POINT;

const service = axios.create({
  baseURL,
  withCredentials: true,
});

const RECIPE_BOOK_SERVICE = {
  addRecipeBook(recipeBook) {
    // const { username, email, password } = req.body; <==> userData
    return service.post("/add-recipebook", recipeBook);
  },
  getRecipeBooks() {
    return service.post("/recipe-books");
  },
  deleteRecipeBook(recipeBookId) {
    return service.post(
      `/recipe-books/${recipeBookId}/delete`
    );
  },
};

export default RECIPE_BOOK_SERVICE;
