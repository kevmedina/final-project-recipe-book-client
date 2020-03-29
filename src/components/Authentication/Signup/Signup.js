import React from "react";
import { Redirect } from "react-router-dom";
import { AuthContext } from "../../../context/index";
import "./Signup.css";

function Signup() {
  return (
    <AuthContext.Consumer>
      {context => {
        const {
          formSignup: { username, email, password },
          message,
          isLoggedIn
        } = context.state;

        const { handleSignupInput, handleSignupSubmit } = context;
        return (
          <div>
            {isLoggedIn ? (
              <Redirect to="/" />
            ) : (
              <div className="signup">
                <h2>Signup form</h2>
                <form onSubmit={handleSignupSubmit}>
                  <div>
                    <label htmlFor="username">Username:</label>
                    <input
                      id="username"
                      name="username"
                      type="text"
                      value={username}
                      onChange={handleSignupInput}
                    />
                  </div>

                  <div>
                    <label htmlFor="email">Email:</label>
                    <input
                      id="email"
                      name="email"
                      type="email"
                      value={email}
                      onChange={handleSignupInput}
                    />
                  </div>

                  <div>
                    <label htmlFor="password">Password:</label>
                    <input
                      id="password"
                      name="password"
                      type="password"
                      value={password}
                      onChange={handleSignupInput}
                    />
                  </div>

                  <button>Signup</button>
                </form>
                {message && <div>{message}</div>}
              </div>
            )}
          </div>
        );
      }}
    </AuthContext.Consumer>
  );
}

export default Signup;
