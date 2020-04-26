import React, { Component } from "react";
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
              placeholder="Name of Recipe Book"
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
                <h3
                  onClick={async () => {
                    await getRecipesFromBook(recipeBook._id);
                    this.props.history.push(
                      `/recipes-from-book/${recipeBook._id}`
                    );
                  }}
                >
                  {recipeBook.title}
                </h3>
                <div className="book-icons">
                  <i
                    onClick={() => deleteRecipeBook(recipeBook._id)}
                    className="fas fa-trash fa-fw"
                  ></i>
                  <i
                    onClick={() => deleteRecipeBook(recipeBook._id)}
                    className="fas fa-edit fa-fw"
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
