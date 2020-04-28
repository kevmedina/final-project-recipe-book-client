import React, { Component } from "react";
import "./NewRecipe.css";

class NewRecipe extends Component {
  state = {
    recipeForm: {
      title: "",
      ingredients: "",
      readyInMinutes: "",
      servings: "",
      bookID: "",
    },
  };

  handleInput = (e) => {
    const { name, value } = e.target;
    this.setState({
      recipeForm: {
        [name]: value,
      },
    });
  };

  handleSelectChange = (e) => {
    const { value } = e.target;

    this.setState({
      bookID: value,
    });
  };

  render() {
    const { recipeBooks, addNewRecipe } = this.props;
    return (
      <div className="new-recipe">
        <form onSubmit={addNewRecipe(this.state.recipeForm)}>
          <div>
            <input
              name="title"
              type="text"
              placeholder="Recipe Name"
              onChange={this.handleInput}
            />
          </div>

          <div>
            <input
              name="ingredients"
              type="text"
              placeholder="Ingredients"
              onChange={this.handleInput}
            />
          </div>

          <div>
            <input
              name="readyInMinutes"
              type="number"
              placeholder="Cook Time (mins)"
              onChange={this.handleInput}
            />
          </div>

          <div>
            <input
              name="servings"
              type="number"
              placeholder="Servings"
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

          <div>
            <input name="image" type="file" />
          </div>

          <button>Create Recipe</button>
        </form>
      </div>
    );
  }
}

export default NewRecipe;
