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
import RecipeBook from "./components/RecipeBooks/RecipeBooks";
import RecipeDetails from "./components/RecipeDetails/RecipeDetails";

class App extends Component {
  state = {
    recipes: null,
    recipeBooks: [],
    favorites: [],
  };

  componentDidMount() {
    this.getRecipeBooks();
  }

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

  deleteRecipeBook = (recipeBookId) => {
    axios
      .post(`http://localhost:3001/recipe-books/${recipeBookId}/delete`)
      .then((response) => {
        this.setState({
          recipeBooks: response.data,
        });
      })
      .catch((err) => console.log("Error while deleting recipe book: ", err));
  };

  addRecipe = (recipeId, recipeBookId) => {
    const newRecipe = this.state.recipes.find(
      (recipe) => recipe.id === recipeId
    );
    newRecipe.bookId = recipeBookId;
    axios
      .post("http://localhost:3001/add-recipe", newRecipe)
      .then((recipe) => {
        console.log("New Recipe: ", recipe);
      })
      .catch((err) => console.log("Error while adding a recipe: ", err));
  };

  addFavorite = (recipeId) => {
    const favorite = this.state.recipes.find(
      (recipe) => recipe.id === recipeId
    );

    console.log("Favorite: ", favorite);

    this.setState({
      favorites: favorite,
    });
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
                          favorites={this.state.favorites}
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
                          addFavorite={this.addFavorite}
                        />
                      )}
                    />
                    <Route
                      exact
                      path="/new-recipebook"
                      render={(props) => (
                        <RecipeBook
                          {...props}
                          recipeBooks={this.state.recipeBooks}
                          createNewRecipeBook={this.createNewRecipeBook}
                          deleteRecipeBook={this.deleteRecipeBook}
                        />
                      )}
                    />
                    <Route
                      exact
                      path="/recipe-details"
                      render={(props) => <RecipeDetails {...props} />}
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
