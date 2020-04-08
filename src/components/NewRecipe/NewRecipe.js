import React from "react";

function NewRecipe() {
  return (
    <div className="new-recipe">
      <form>
        <div className="inner-form-container">
          <div>
            {/* <label htmlFor="username">Username:</label> */}
            <input
              name="title"
              type="text"
              placeholder="Recipe Name"
              // value={username}
              // onChange={handleSignupInput}
            />
          </div>

          <div>
            {/* <label htmlFor="email">Email:</label> */}
            <input
              name="ingredients"
              type="text"
              placeholder="Ingredients"
              // value={ingredients}
              // onChange={handleSignupInput}
            />
          </div>

          <div>
            {/* <label htmlFor="password">Password:</label> */}
            <input
              name="cookTime"
              type="text"
              placeholder="Cook Time"
              // value={password}
              // onChange={handleSignupInput}
            />
          </div>
        </div>

        {/* {message && <div>{message}</div>} */}
        <button>Create Recipe</button>
      </form>
    </div>
  );
}

export default NewRecipe;
