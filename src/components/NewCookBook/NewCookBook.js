import React from "react";
import "./NewCookBook.css";

function NewCookBook() {
  return (
    <div className="container">
      <div className="inner-container">
        <div>
          <h2>Name of Book</h2>
          <form>
            <div>
              <input
                name="cookbook"
                type="text"
                placeholder="Name of Cook Book"
                // value={password}
                // onChange={handleSignupInput}
              />
            </div>
            {/* {message && <div>{message}</div>} */}
            <button>Create Cook Book</button>
          </form>
        </div>

        <div>
          <h1>Hello</h1>
        </div>
      </div>
    </div>
  );
}

export default NewCookBook;
