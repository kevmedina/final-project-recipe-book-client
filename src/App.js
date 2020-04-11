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
import RecipeBook from "./components/RecipeBook/RecipeBook";

class App extends Component {
  state = {
    recipes: null,
    recipeBooks: [],
  };

  componentDidMount() {
    this.getRecipeBooks();
  }

  searchRecipes = async (param) => {
    try {
      const recipes = await axios.post(
        `http://localhost:3001/searchExternalAPI`,
        { param },
        { withCredentials: true }
      );
      console.log({ recipes });

      this.setState({
        recipes: recipes.data,
      });
    } catch (err) {
      console.log("Error while getting the recipes: ", { err: err.response });
    }
  };

  createNewRecipeBook = (param) => {
    axios
      .post(
        "http://localhost:3001/new-recipebook",
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
        console.log("Recipe books from DB: ", allRecipeBooks);
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

  // createNewRecipe = async (param) => {
  //   try {
  //     const newRecipe = await axios.post(
  //       "http://localhost:3001/new-recipe",
  //       { param },
  //       { withCredentials: true }
  //     );
  //   } catch (err) {
  //     console.log("Error while creating a new recipe: ", {
  //       err: err.response,
  //     });
  //   }
  // };

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
                <div>
                  {isLoggedIn ? <ProfileNavbar /> : <Navbar />}
                  <Switch>
                    <Route exact path="/" component={Home} />
                    <Route exact path="/signup-page" component={Signup} />
                    <Route exact path="/login-page" component={Login} />
                    <Route exact path="/user-profile" component={UserProfile} />
                    <Route
                      exact
                      path="/new-recipe"
                      component={NewRecipe}
                      recipeBooks={this.state.recipeBooks}
                    />
                    <Route
                      exact
                      path="/search"
                      render={(props) => (
                        <Search
                          {...props}
                          recipes={this.state.recipes}
                          searchRecipes={this.searchRecipes}
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
