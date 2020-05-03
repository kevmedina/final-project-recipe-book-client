import React, { Component } from "react";
import "./NewRecipe.css";

class NewRecipe extends Component {
  state = {
    title: "",
    ingredients: "",
    readyInMinutes: "",
    servings: "",
    bookID: "",
  };

  handleInput = (e) => {
    const { name, value } = e.target;
    this.setState({
      [name]: value,
    });
  };

  handleSelectChange = (e) => {
    const { value } = e.target;

    this.setState({
      bookID: value,
    });
  };

  createRecipe = (e) => {
    e.preventDefault();
    this.props.addNewRecipe(this.state);
  };

  render() {
    const { recipeBooks } = this.props;
    return (
      <div className="new-recipe">
        <form onSubmit={(e) => this.createRecipe(e)}>
          <div>
            <input
              name="title"
              type="text"
              placeholder="Recipe Name"
              value={this.state.title}
              onChange={this.handleInput}
            />
          </div>

          <div>
            <input
              name="ingredients"
              type="text"
              placeholder="Ingredients"
              value={this.state.ingredients}
              onChange={this.handleInput}
            />
          </div>

          <div>
            <input
              name="readyInMinutes"
              type="number"
              placeholder="Cook Time (mins)"
              value={this.state.readyInMinutes}
              onChange={this.handleInput}
            />
          </div>

          <div>
            <input
              name="servings"
              type="number"
              placeholder="Servings"
              value={this.state.servings}
              onChange={this.handleInput}
            />
          </div>

          <div>
            <select
              onChange={this.handleSelectChange}
              defaultValue="default"
              name="bookID"
            >
              <option disabled value="default">
                Select Recipe Book
              </option>
              {recipeBooks.length !== 0 ? (
                recipeBooks.map((recipeBook, index) => {
                  return (
                    <option key={index} value={recipeBook._id}>
                      {recipeBook.title}
                    </option>
                  );
                })
              ) : (
                <option>Create New</option>
              )}
            </select>
          </div>

          {/* <div>
            <input name="image" type="file" />
          </div> */}

          <button>Create Recipe</button>
        </form>
      </div>
    );
  }
}

export default NewRecipe;
