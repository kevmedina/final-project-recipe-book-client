import React from "react";
import { Redirect } from "react-router-dom";
import { AuthContext } from "../../../context/index";

function Login() {
  return (
    <AuthContext.Consumer>
      {context => {
        const {
          formSignup: { username, password },
          message,
          isLoggedIn
        } = context.state;

        const { handleLoginInput, handleLoginSubmit } = context;
        return (
          <div>
            {isLoggedIn ? (
              <Redirect to="/" />
            ) : (
              <div className="signup">
                <h2>Login form</h2>
                <form onSubmit={handleLoginSubmit}>
                  <div>
                    <label htmlFor="username">Username:</label>
                    <input
                      id="username"
                      name="username"
                      type="text"
                      value={username}
                      onChange={handleLoginInput}
                    />
                  </div>

                  <div>
                    <label htmlFor="password">Password:</label>
                    <input
                      id="password"
                      name="password"
                      type="password"
                      value={password}
                      onChange={handleLoginInput}
                    />
                  </div>

                  <button>Login</button>
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

export default Login;
