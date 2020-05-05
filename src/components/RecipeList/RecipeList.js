import React, { Component } from "react";
import { Link, withRouter } from "react-router-dom";
import "./RecipeList.css";

class RecipeList extends Component {
  state = {
    bookID: "",
  };

  handleSelectChange = (e) => {
    const { value } = e.target;
    if (value === "new") {
      this.props.history.push("/new-recipebook");
    } else {
      this.setState({
        bookID: value,
      });
    }
  };

  render() {
    const { recipes, recipeBooks, searchRecipes, addRecipe } = this.props;

    const filteredRecipes = recipes.filter((recipe) => {
      return recipe.title.toLowerCase().includes(searchRecipes.toLowerCase());
    });

    return (
      <div className="recipe-list">
        {filteredRecipes.map((recipe, index) => {
          return (
            <div key={index} className="recipe">
              <div>
                <img
                  src={`https://spoonacular.com/recipeImages/${recipe.image}`}
                  alt="recipe"
                />
              </div>
              <div>
                <Link
                  className="link"
                  to={{
                    pathname: `/recipe-details`,
                    state: {
                      recipe,
                    },
                  }}
                >
                  <h3>
                    {recipe.title.slice(0, 25)}
                    {recipe.title.length > 25 ? "..." : null}
                  </h3>
                </Link>
                <div className="select-recipe-book">
                  <div>
                    <select
                      defaultValue="default"
                      onChange={this.handleSelectChange}
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
                        <option value="new">Create New</option>
                      )}
                    </select>
                  </div>
                  <div className="add-button">
                    <i
                      onClick={() => addRecipe(recipe.id, this.state.bookID)}
                      className="fas fa-plus fa-fw"
                    ></i>
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    );
  }
}

export default withRouter(RecipeList);
