import React from "react";
import { Redirect, Link } from "react-router-dom";
import { connect } from "react-redux";
import {
  handleLoginInput,
  handleLoginSubmit,
} from "../../../redux/actions/authActions";
import "./Login.css";

const Login = ({ handleLoginInput, handleLoginSubmit }) => {
  return (
    <React.Fragment>
      <div>
        {isLoggedIn ? (
          <Redirect to="/user-profile" />
        ) : (
          <div className="login">
            <form onSubmit={handleLoginSubmit}>
              <h2>Login</h2>
              <div>
                {/* <label htmlFor="username">Username:</label> */}
                <input
                  id="username"
                  name="username"
                  type="text"
                  placeholder="Username"
                  value={username}
                  onChange={handleLoginInput}
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
                  onChange={handleLoginInput}
                />
              </div>
              <div>
                <Link to="/login-page">Forgot Password?</Link>
              </div>

              {message && <div>{message}</div>}
              <button>Login</button>
            </form>
          </div>
        )}
      </div>
    </React.Fragment>
  );
};

const mapStateToProps = (state) => {
  return {
    username: state.authReducer.username,
    password: state.authReducer.password,
    isLoggedIn: state.authReducer.isLoggedIn,
    message: state.authReducer.message,
  };
};

const mapDispatchToProps = (dispatch) => ({
  handleLoginInput: () => dispatch(handleLoginInput()),
  handleLoginSubmit: () => dispatch(handleLoginSubmit()),
});

export default connect(mapStateToProps, mapDispatchToProps)(Login);
