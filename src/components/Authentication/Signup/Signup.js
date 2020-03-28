import React from "react";

import { AuthContext } from "../../../context/index";

function Signup() {
  return (
    <AuthContext.Consumer>
      {context => {
        const {
          formSignup: { username, email, password }
        } = context.state;
        const { handleSignupInput, handleSignupSubmit } = context;
        return (
          <div>
            <h2>Signup form</h2>
            <form onSubmit={handleSignupSubmit}>
              <label htmlFor="username">
                Username:
                <input
                  id="username"
                  name="username"
                  type="text"
                  value={username}
                  onChange={handleSignupInput}
                />
              </label>
              <label htmlFor="email">
                Username:
                <input
                  id="email"
                  name="email"
                  type="email"
                  value={email}
                  onChange={handleSignupInput}
                />
              </label>
              <label htmlFor="password">
                Username:
                <input
                  id="password"
                  name="password"
                  type="password"
                  value={password}
                  onChange={handleSignupInput}
                />
              </label>
              <button>Signup</button>
            </form>
          </div>
        );
      }}
    </AuthContext.Consumer>
  );
}

export default Signup;
