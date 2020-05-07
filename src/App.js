import React, { Component } from "react";
import { Switch, Route, withRouter } from "react-router-dom";
import { AuthContext } from "./context/index";
import RECIPE_SERVICE from "./services/RecipeService";
import RECIPE_BOOK_SERVICE from "./services/RecipeBookService";
import "./App.css";
import Home from "./components/Home/Home";
import Signup from "./components/Authentication/Signup/Signup";
import Login from "./components/Authentication/Login/Login";
import UpdateProfile from "./components/UpdateProfile/UpdateProfile";
import Navbar from "./components/Navbar/Navbar";
import UserProfile from "./components/UserProfile/UserProfile";
import ProfileNavbar from "./components/ProfileNavbar/ProfileNavbar";
import NewRecipe from "./components/NewRecipe/NewRecipe";
import Search from "./components/Search/Search";
import RecipeBooks from "./components/RecipeBooks/RecipeBooks";
import RecipeDetails from "./components/RecipeDetails/RecipeDetails";
import RecipesFromBook from "./components/RecipesFromBook/RecipesFromBook";
import Loader from "react-loading";

class App extends Component {
  state = {
    recipes: [],
    recipesFromDB: [],
    recipeBooks: [],
    favorites: [],
    trivia: {},
  };

  // When the component mounts it calls the getRecipeBooks function to retrieve all the books
  componentDidMount() {
    this.updateState();
  }

  // // Update the state once the component loads
  updateState = () => {
    this.getRecipeBooks();
    this.getRecipes();
    this.getFavorites();
  };

  // search for recipes from the API
  searchRecipes = (param) => {
    RECIPE_SERVICE.searchRecipes(param)
      .then((recipeSearch) => {
        this.setState({
          recipes: recipeSearch.data,
        });
      })
      .catch((err) =>
        console.log("Error while getting the recipes: ", { err: err.response })
      );
  };

  // Get all recipes from the DB
  getRecipes = () => {
    RECIPE_SERVICE.getRecipes()
      .then((recipes) => {
        this.setState({
          recipesFromDB: recipes.data,
        });
      })
      .catch((err) => console.log("Error while getting the recipes: ", err));
  };

  // Add a recipe from the API to the selected recipe book
  addRecipe = (recipeID, recipeBookID) => {
    const newRecipe = this.state.recipes.find(
      (recipe) => recipe.id === recipeID
    );
    newRecipe.bookID = recipeBookID;
    RECIPE_SERVICE.addRecipe(newRecipe)
      .then((recipe) => {
        console.log("New Recipe: ", recipe.data);
      })
      .catch((err) => console.log("Error while adding a recipe: ", err));
  };

  // Add a new recipe of your own
  addNewRecipe = (recipe) => {
    console.log("New Recipe: ", recipe);
    RECIPE_SERVICE.addRecipe(recipe)
      .then((recipe) => {
        console.log("New Recipe: ", recipe.data);
        this.props.history.push("/new-recipebook");
      })
      .catch((err) => console.log("Error while adding a new recipe: ", err));
  };

  // Get all recipes for each book the user clicks on
  getRecipesFromBook = (recipeBookID) => {
    RECIPE_BOOK_SERVICE.getRecipesFromBook(recipeBookID)
      .then(async (response) => {
        await this.setState({
          currentRecipeBook: response.data,
        });
        return true;
      })
      .catch((err) =>
        console.log("Error while getting recipes from book: ", err)
      );
  };

  // Create a new recipe book
  createNewRecipeBook = (title) => {
    RECIPE_BOOK_SERVICE.createNewRecipeBook(title)
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
    RECIPE_BOOK_SERVICE.getRecipeBooks()
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
      RECIPE_BOOK_SERVICE.deleteRecipeBook(recipeBookID)
        .then(() => {
          let updatedRecipeBooks = this.state.recipeBooks.filter(
            (recipeBook) => recipeBook._id !== recipeBookID
          );
          this.setState({
            recipeBooks: updatedRecipeBooks,
          });
        })
        .catch((err) => console.log("Error while deleting recipe book: ", err));
    }
  };

  // Update a recipe to be a favorite
  addFavorite = (recipeID) => {
    RECIPE_SERVICE.addFavorite(recipeID)
      .then((updatedRecipe) => {
        console.log("Updated favorite for recipe: ", updatedRecipe);
      })
      .catch((err) =>
        console.log("Error while updating the recipe to a favorite: ", err)
      );
  };

  // Get all favorite recipes from DB
  getFavorites = () => {
    RECIPE_SERVICE.getFavorites()
      .then((favoriteRecipes) => {
        this.setState({
          favorites: favoriteRecipes.data,
        });
      })
      .catch((err) =>
        console.log("Error while getting the favorite recipes: ", err)
      );
  };

  // Get a random joke from the API
  getRandomFoodTrivia = () => {
    RECIPE_SERVICE.getRandomFoodTrivia()
      .then((randomTrivia) => {
        this.setState({
          trivia: randomTrivia.data,
        });
      })
      .catch((err) => console.log("Error while getting the recipes: ", err));
  };

  render() {
    return (
      <AuthContext.Consumer>
        {(context) => {
          const { isLoggedIn, loading } = context.state;
          return (
            <div className="App">
              {loading ? (
                <Loader
                  className="loader"
                  type="bars"
                  color="var(--green-color)"
                />
              ) : (
                <div className={`${isLoggedIn ? "user-logged-in" : ""}`}>
                  {isLoggedIn ? <ProfileNavbar /> : <Navbar />}
                  <Switch>
                    <Route exact path="/" component={Home} />
                    <Route exact path="/signup-page" component={Signup} />
                    <Route exact path="/login-page" component={Login} />
                    <Route
                      exact
                      path="/update-profile"
                      render={(props) => <UpdateProfile {...props} />}
                    />
                    <Route
                      exact
                      path="/user-profile"
                      render={(props) => (
                        <UserProfile
                          {...props}
                          recipeBooks={this.state.recipeBooks}
                          recipesFromDB={this.state.recipesFromDB}
                          favorites={this.state.favorites}
                          trivia={this.state.trivia}
                          updateState={this.updateState}
                          getRandomFoodTrivia={this.getRandomFoodTrivia}
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
                          addNewRecipe={this.addNewRecipe}
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
                      path="/recipes-from-book/:recipeBookID"
                      render={(props) => (
                        <RecipesFromBook
                          {...props}
                          addFavorite={this.addFavorite}
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

export default withRouter(App);
