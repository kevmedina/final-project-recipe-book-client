import React, { Component } from "react";
import { Switch, Route } from "react-router-dom";
import { AuthContext } from "./context/index";
import "./App.css";
import Home from "./components/Home/Home";
import Signup from "./components/Authentication/Signup/Signup";
import Login from "./components/Authentication/Login/Login";
import Navbar from "./components/Navbar/Navbar";
import UserProfile from "./components/UserProfile/UserProfile";
import ProfileNavbar from "./components/ProfileNavbar/ProfileNavbar";
import NewRecipe from "./components/NewRecipe/NewRecipe";
import Search from "./components/Search/Search";
import axios from "axios";
import RecipeBooks from "./components/RecipeBooks/RecipeBooks";
import RecipeDetails from "./components/RecipeDetails/RecipeDetails";
import RecipesFromBook from "./components/RecipesFromBook/RecipesFromBook";

class App extends Component {
  state = {
    recipes: [],
    recipesFromDB: [],
    recipeBooks: [],
    favorites: [],
    currentRecipeBook: "",
  };

  // When the component mounts it calls the getRecipeBooks function to retrieve all the books
  componentDidMount() {
    this.updateState();
  }

  // Update the state once the component loads
  updateState = () => {
    this.getRecipeBooks();
    this.getRecipes();
    this.getFavorites();
  };

  // search for recipes from the API
  searchRecipes = async (param) => {
    try {
      const recipeSearch = await axios.post(
        `http://localhost:3001/searchExternalAPI`,
        { param },
        { withCredentials: true }
      );
      this.setState({
        recipes: recipeSearch.data,
      });
    } catch (err) {
      console.log("Error while getting the recipes: ", { err: err.response });
    }
  };

  // Get all recipes from the DB
  getRecipes = () => {
    axios
      .get("http://localhost:3001/recipes")
      .then((recipes) => {
        this.setState({
          recipesFromDB: recipes.data,
        });
      })
      .catch((err) =>
        console.log("Error while getting the favorite recipes: ", err)
      );
  };

  // Add a recipe from the API to the selected recipe book
  addRecipe = (recipeID, recipeBookID) => {
    const newRecipe = this.state.recipes.find(
      (recipe) => recipe.id === recipeID
    );
    newRecipe.bookID = recipeBookID;
    axios
      .post("http://localhost:3001/add-recipe", newRecipe)
      .then((recipe) => {
        console.log("New Recipe: ", recipe.data);
      })
      .catch((err) => console.log("Error while adding a recipe: ", err));
  };

  // Delete a recipe from its recipe book
  deleteRecipe = (recipeID, recipeBookID) => {
    axios
      .post("http://localhost:3001/recipe/delete", {
        recipeID,
        recipeBookID,
      })
      .then((response) => {
        console.log("Deleted recipe: ", response.data);
        this.updateState();
      })
      .catch((err) =>
        console.log("Error while deleting a recipe from its book: ", err)
      );
  };

  // Get all recipes for each book the user clicks on
  getRecipesFromBook = (recipeBookID) => {
    axios
      .get(`http://localhost:3001/recipe-books/${recipeBookID}`)
      .then((response) => {
        this.setState({
          currentRecipeBook: response.data,
        });
      })
      .catch((err) =>
        console.log("Error while getting recipes from book: ", err)
      );
  };

  // Create a new recipe book
  createNewRecipeBook = (param) => {
    axios
      .post(
        "http://localhost:3001/add-recipebook",
        { param },
        { withCredentials: true }
      )
      .then((response) => {
        this.setState({
          recipeBooks: response.data,
        });
      })
      .catch((err) =>
        console.log("Error while creating a new Recipe Book: ", {
          err: err.response,
        })
      );
  };

  // Get all the recipe books from DB
  getRecipeBooks = () => {
    axios
      .get("http://localhost:3001/recipe-books")
      .then((allRecipeBooks) => {
        this.setState({
          recipeBooks: allRecipeBooks.data,
        });
      })
      .catch((err) =>
        console.log("Error while getting all recipe books from DB: ", err)
      );
  };

  // Delete a recipe book
  deleteRecipeBook = (recipeBookID) => {
    const result = window.confirm(
      "Click OK to permanently delete this recipe book."
    );
    if (result) {
      axios
        .post(`http://localhost:3001/recipe-books/${recipeBookID}/delete`)
        .then((response) => {
          this.setState({
            recipeBooks: response.data,
          });
        })
        .catch((err) => console.log("Error while deleting recipe book: ", err));
    }
  };

  // Update a recipe to be a favorite
  addFavorite = (recipeID) => {
    axios
      .post(`http://localhost:3001/recipe/${recipeID}/update`)
      .then((updatedRecipe) => {
        console.log("Updated recipe: ", updatedRecipe);
      })
      .catch((err) =>
        console.log("Error while updating the recipe to a favorite: ", err)
      );
  };

  // Get all favorite recipes from DB
  getFavorites = () => {
    axios
      .get("http://localhost:3001/favorite-recipes")
      .then((favoriteRecipes) => {
        this.setState({
          favorites: favoriteRecipes.data,
        });
        console.log("Favorite from state: ", this.state.favorites);
      })
      .catch((err) =>
        console.log("Error while getting the favorite recipes: ", err)
      );
  };

  render() {
    return (
      <AuthContext.Consumer>
        {(context) => {
          const { isLoggedIn, loading } = context.state;
          return (
            <div className="App">
              {loading ? (
                <h1>Hello</h1>
              ) : (
                <div className={`${isLoggedIn ? "user-logged-in" : ""}`}>
                  {isLoggedIn ? <ProfileNavbar /> : <Navbar />}
                  <Switch>
                    <Route exact path="/" component={Home} />
                    <Route exact path="/signup-page" component={Signup} />
                    <Route exact path="/login-page" component={Login} />
                    <Route
                      exact
                      path="/user-profile"
                      render={(props) => (
                        <UserProfile
                          {...props}
                          recipeBooks={this.state.recipeBooks}
                          recipesFromDB={this.state.recipesFromDB}
                          favorites={this.state.favorites}
                          updateState={this.updateState}
                        />
                      )}
                    />
                    <Route
                      exact
                      path="/new-recipe"
                      render={(props) => (
                        <NewRecipe
                          {...props}
                          recipeBooks={this.state.recipeBooks}
                        />
                      )}
                    />
                    <Route
                      exact
                      path="/search"
                      render={(props) => (
                        <Search
                          {...props}
                          recipes={this.state.recipes}
                          recipeBooks={this.state.recipeBooks}
                          searchRecipes={this.searchRecipes}
                          addRecipe={this.addRecipe}
                        />
                      )}
                    />
                    <Route
                      exact
                      path="/new-recipebook"
                      render={(props) => (
                        <RecipeBooks
                          {...props}
                          recipeBooks={this.state.recipeBooks}
                          createNewRecipeBook={this.createNewRecipeBook}
                          deleteRecipeBook={this.deleteRecipeBook}
                          getRecipesFromBook={this.getRecipesFromBook}
                        />
                      )}
                    />
                    <Route
                      exact
                      path="/recipe-details"
                      render={(props) => <RecipeDetails {...props} />}
                    />
                    <Route
                      exact
                      path="/recipes-from-book"
                      render={(props) => (
                        <RecipesFromBook
                          {...props}
                          recipeBook={this.state.currentRecipeBook}
                          deleteRecipe={this.deleteRecipe}
                          addFavorite={this.addFavorite}
                          updateState={this.updateState}
                        />
                      )}
                    />
                  </Switch>
                </div>
              )}
            </div>
          );
        }}
      </AuthContext.Consumer>
    );
  }
}

export default App;
