import React, { Component } from "react";
// import "./RecipeBooks.css";

class RecipeBooks extends Component {
  render() {
    // const { recipeBooks } = this.props;
    // console.log(recipeBooks)
    return (
      <div className="recipebooks">
        <h1>My Cook Books</h1>
        {/* {recipeBooks.map((recipeBook, index) => {
          return <div key={index}>{recipeBook.title}</div>;
        })} */}
      </div>
    );
  }
}

export default RecipeBooks;
