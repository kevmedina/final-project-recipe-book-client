import React from "react";
import "./NewRecipe.css";

const NewRecipe = ({ recipeBooks }) => {
  console.log("recipe books: ", recipeBooks);
  return (
    <div className="new-recipe">
      <form>
        <div>
          <input
            name="title"
            type="text"
            placeholder="Recipe Name"
            // onChange={handleSignupInput}
          />
        </div>

        <div>
          <input
            name="ingredients"
            type="text"
            placeholder="Ingredients"
            // onChange={handleSignupInput}
          />
        </div>
        <div>
          <input
            name="directions"
            type="text"
            placeholder="Directions"
            // onChange={handleSignupInput}
          />
        </div>

        <div>
          <input
            name="cookTime"
            type="text"
            placeholder="Cook Time (mins)"
            // onChange={handleSignupInput}
          />
        </div>

        <div>
          <select defaultValue="default">
            <option disabled value="default">
              Select Recipe Book
            </option>
            {recipeBooks.length !== 0 ? (
              recipeBooks.map((recipeBook, index) => {
                return <option key={index}>{recipeBook.title}</option>;
              })
            ) : (
              <option>Create New</option>
            )}
          </select>
        </div>

        <div>
          <input name="image" type="file" />
        </div>

        {/* {message && <div>{message}</div>} */}
        <button>Create Recipe</button>
      </form>
    </div>
  );
};

export default NewRecipe;
