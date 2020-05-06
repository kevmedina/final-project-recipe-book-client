import axios from "axios";

const baseURL = "http://localhost:3001";

const service = axios.create({
  baseURL,
  withCredentials: true,
});

const RECIPE_SERVICE = {
  addRecipe(userData) {
    // const { username, email, password } = req.body; <==> userData
    console.log("User data in the service: ", userData);
    return service.post("/add-recipebook", userData);
  },
  getRecipes(userData) {
    return service.post("/searchExternalAPI", userData, {withCredentials: true});
  },
  // addFavorite(userData) {
  //   return service.post("/api/add-recipe", userData);
  // },
};

export default RECIPE_SERVICE;
