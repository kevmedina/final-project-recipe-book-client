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
              // value={username}
              // onChange={handleSignupInput}
            />
          </div>

          <div>
            <input
              name="ingredients"
              type="text"
              placeholder="Ingredients"
              // value={ingredients}
              // onChange={handleSignupInput}
            />
          </div>

          <div>
            <select>
              <option></option>
            </select>
          </div>

        {/* {message && <div>{message}</div>} */}
        <button>Create Recipe</button>
      </form>
    </div>
  );
}

export default NewRecipe;
