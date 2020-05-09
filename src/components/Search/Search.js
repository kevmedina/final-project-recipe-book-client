import React, { Component } from "react";
import "./Search.css";
import RecipeList from "../RecipeList/RecipeList";

class Search extends Component {
  state = {
    search: "",
  };

  handleSubmit = (event) => {
    event.preventDefault();
    this.props.searchRecipes(this.state.search);
  };

  handleSearch = (e) => {
    // here we set the search term to the state
    const { name, value } = e.target;
    this.setState({
      [name]: value,
    });
  };

  render() {
    const { search } = this.state;
    return (
      <div className="search">
        <h2>Recipe Search</h2>
        <div className="search-bar">
          <form onSubmit={(event) => this.handleSubmit(event)}>
            <div>
              <input
                name="search"
                type="text"
                placeholder="Search for recipes"
                onChange={this.handleSearch}
                value={search}
              />
              <button>
                <i className="fas fa-search"></i>
              </button>
            </div>
          </form>
        </div>

        <div className="recipes">
          {this.props.recipes && (
            <RecipeList
              recipes={this.props.recipes}
              recipeBooks={this.props.recipeBooks}
              searchRecipes={this.state.search}
              addRecipe={this.props.addRecipe}
              addFavorite={this.props.addFavorite}
            />
          )}
        </div>
      </div>
    );
  }
}

export default Search;
