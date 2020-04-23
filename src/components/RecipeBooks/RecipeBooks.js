import React, { Component } from "react";
import { Link } from "react-router-dom";
import "./RecipeBooks.css";

class RecipeBooks extends Component {
  state = {
    title: "",
  };

  handleSubmit = (e) => {
    e.preventDefault();
    this.props.createNewRecipeBook(this.state.title);
    this.setState({
      title: "",
    });
  };

  handleInputChange = (e) => {
    // here we set the search term to the state
    const { name, value } = e.target;
    this.setState({
      [name]: value,
    });
  };

  render() {
    const { deleteRecipeBook, getRecipesFromBook } = this.props;
    return (
      <div className="recipebook">
        <div>
          <h1>Recipe Books</h1>
          <form onSubmit={(e) => this.handleSubmit(e)}>
            <input
              name="title"
              type="text"
              placeholder="Name of Cook Book"
              onChange={this.handleInputChange}
              value={this.state.title}
            />
            <button>Create</button>
          </form>
        </div>

        <div>
          {this.props.recipeBooks.map((recipeBook, index) => {
            return (
              <div key={index} className="recipe-book">
                <Link
                  className="link"
                  key={index}
                  to="/recipes-from-book"
                  onClick={() => getRecipesFromBook(recipeBook._id)}
                >
                  <h3>{recipeBook.title}</h3>
                </Link>
                <div>
                  <i
                    onClick={() => deleteRecipeBook(recipeBook._id)}
                    className="fas fa-trash fa-fw"
                  ></i>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    );
  }
}

export default RecipeBooks;
