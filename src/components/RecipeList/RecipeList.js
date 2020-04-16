import React, { Component } from "react";
import { Link } from "react-router-dom";
import "./RecipeList.css";

class RecipeList extends Component {
  state = {
    bookId: "",
  };

  handleSelectChange = (e) => {
    const { value } = e.target;
    console.log("Value: ", value);

    this.setState({
      bookId: value,
    });
  };

  render() {
    const {
      recipes,
      recipeBooks,
      searchRecipes,
      addRecipe,
      addFavorite,
    } = this.props;

    const filteredRecipes = recipes.filter((recipe) => {
      return recipe.title.toLowerCase().includes(searchRecipes.toLowerCase());
    });
    console.log("Filtered Recipes: ", filteredRecipes);

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
                  to={{
                    pathname: `/recipe-details`,
                    state: {
                      recipe,
                    },
                  }}
                >
                  <h3>{recipe.title}</h3>
                </Link>
                <div>
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
                        <option>Create New</option>
                      )}
                    </select>
                  </div>
                  <i
                    onClick={() => addRecipe(recipe.id, this.state.bookId)}
                    className="fas fa-plus fa-fw"
                  ></i>
                  <i
                    onClick={() => addFavorite(recipe.id)}
                    className="far fa-star fa-fw"
                  ></i>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    );
  }
}

export default RecipeList;
