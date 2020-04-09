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
import RecipeBook from "./components/RecipeBook/RecipeBook";
import axios from "axios";

class App extends Component {
  state = {
    recipes: null,
    recipeBooks: null
  };

  searchRecipes = async (param) => {
    // const { value } = e.target;
    try {
      const recipes = await axios.post(`http://localhost:3001/searchExternalAPI`, {param}, {withCredentials: true})
      console.log({recipes});

      this.setState({
        recipes: recipes.data,
      });

    } catch(err) {
      console.log("Error while getting the recipes: ", {err: err.response})
    }
  };

  getRecipeBooks = () => {

  }

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
                    <Route exact path="/new-recipe" component={NewRecipe} />
                    <Route
                      exact
                      path="/search"
                      render={props => (<Search {...props} recipes={this.state.recipes} searchRecipes={this.searchRecipes} />)}
                    />
                    <Route exact path="/new-cookbook" component={RecipeBook} />
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
