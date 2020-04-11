import React from "react";
import "./NewRecipe.css";

const NewRecipe = () => {
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
          <select>
            <option disabled selected>
              Select Recipe Book
            </option>
            <option>Deserts</option>
            <option>Appetizers</option>
            <option>Plant Based</option>
            <option>Sea Food</option>
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
