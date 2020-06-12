import React from "react";
import { Redirect, Link } from "react-router-dom";
import { connect } from "react-redux";
import {
  handleSignupInput,
  handleSignupSubmit,
} from "../../../redux/actions/authActions";
import "./Signup.css";

const Signup = ({
  isLoggedIn,
  username,
  email,
  password,
  message,
  handleSignupInput,
  handleSignupSubmit,
  formSignup,
}) => {
  return (
    <React.Fragment>
      <div>
        {isLoggedIn ? (
          <Redirect to="/" />
        ) : (
          <div className="signup">
            <form onSubmit={(e) => handleSignupSubmit(e, formSignup)}>
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
        )}
      </div>
    </React.Fragment>
  );
};

const mapStateToProps = (state) => {
  return {
    username: state.authReducer.formSignup.username,
    password: state.authReducer.formSignup.password,
    email: state.authReducer.formSignup.email,
    isLoggedIn: state.authReducer.isLoggedIn,
    message: state.authReducer.message,
    formSignup: state.authReducer.formSignup,
  };
};

const mapDispatchToProps = (dispatch) => ({
  handleSignupInput: (e) => dispatch(handleSignupInput(e)),
  handleSignupSubmit: (e, formSignup) =>
    dispatch(handleSignupSubmit(e, formSignup)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Signup);
