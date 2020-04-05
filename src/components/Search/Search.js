import React, { Component } from "react";
import "./Search.css";
import RecipeList from '../RecipeList/RecipeList'

class Search extends Component {
  state = {
    search: "",
    recipes: ""
  };

  handleSearch = (e) => {
    // here we set the search term to the state
    const { name, value } = e.target;
    this.setState({
      [name]: value,
    });
  };


  render() {
    return (
      <div className="search-bar">
        <form>
          <input
            name="search"
            type="text"
            placeholder="Search for a recipe"
            onChange={this.handleSearch}
            value={this.state.search}
          />
        </form>

        <RecipeList search={this.state.search}/>
      </div>
    );
  }
}

export default Search;
