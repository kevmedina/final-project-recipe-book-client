import axios from "axios";

// const baseURL = process.env.REACT_APP_SERVER_POINT;

const service = axios.create({
  baseURL,
  withCredentials: true,
});

const RECIPE_SERVICE = {
  addRecipe(userData) {
    // const { username, email, password } = req.body; <==> userData
    console.log("User data in the service: ", userData);
    return service.post("/api/add-recipe", userData);
  },
};

export default RECIPE_SERVICE;
