import React from "react";
import { Redirect } from "react-router-dom";
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
                  {/* Left div with fruit background image */}
                  <div className="picture-div">&nbsp;</div>

                  {/* Right div with the signup form */}
                  <form onSubmit={handleSignupSubmit}>
                    <h1>Welcome to My CookBook</h1>
                    <h2>Signup form</h2>
                    <div className="inner-form-container">
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
                    </div>
                    {message && <div>{message}</div>}
                    <button>Signup</button>
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
