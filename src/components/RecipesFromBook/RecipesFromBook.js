import React, { Component } from "react";

class RecipesFromBook extends Component {
  render() {
    const { recipesPerBook } = this.props;
    console.log("Recipes from book: ", recipesPerBook);
    return (
      <div>
        <h1>Hello</h1>
      </div>
    );
  }
}

export default RecipesFromBook;
