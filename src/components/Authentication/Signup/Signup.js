import React from "react";
import { Redirect, Link } from "react-router-dom";
import { AuthContext } from "../../../context/index";
import "./Signup.css";
import NavBar from "../../Navbar/Navbar";

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
              <>
                <header>
                  <NavBar />
                </header>
                <div className="signup">
                  <form onSubmit={handleSignupSubmit}>
                    <h1>Join Now!</h1>
                    <div className="inner-form-container">
                      <div>
                        {/* <label htmlFor="username">Username:</label> */}
                        <input
                          id="username"
                          name="username"
                          type="text"
                          placeholder="Username"
                          value={username}
                          onChange={handleSignupInput}
                        />
                      </div>

                      <div>
                        {/* <label htmlFor="email">Email:</label> */}
                        <input
                          id="email"
                          name="email"
                          type="email"
                          placeholder="Email"
                          value={email}
                          onChange={handleSignupInput}
                        />
                      </div>

                      <div>
                        {/* <label htmlFor="password">Password:</label> */}
                        <input
                          id="password"
                          name="password"
                          type="password"
                          placeholder="Password"
                          value={password}
                          onChange={handleSignupInput}
                        />
                      </div>
                    </div>
                    <div>
                      <Link to="/login-page">Already Registered?</Link>
                    </div>
                    {message && <div>{message}</div>}
                    <button>Create Account</button>
                  </form>
                </div>
              </>
            )}
          </div>
        );
      }}
    </AuthContext.Consumer>
  );
}

export default Signup;
