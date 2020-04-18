import React, { Component } from "react";
import { Link } from "react-router-dom";

class RecipesFromBook extends Component {
  render() {
    // const { addFavorite } = this.props;
    const { recipes } = this.props.recipeBook;
    console.log("Books with recipes:", recipes);

    return (
      <div>
        {recipes !== undefined
          ? recipes.map((recipe, index) => {
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
                      <h3>{recipe.title}</h3>
                    </Link>
                    {/* <div className="recipe-info">
                  <i
                    onClick={() => addFavorite(recipe.id)}
                    className="far fa-star fa-fw"
                  ></i>
                </div> */}
                  </div>
                </div>
              );
            })
          : null}
      </div>
    );
  }
}

export default RecipesFromBook;
