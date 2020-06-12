import React from "react";
import { Redirect, Link } from "react-router-dom";
import { connect } from "react-redux";
import {
  handleLoginInput,
  handleLoginSubmit,
} from "../../../redux/actions/authActions";
import "./Login.css";

const Login = ({
  isLoggedIn,
  username,
  password,
  message,
  handleLoginInput,
  handleLoginSubmit,
  formLogin,
}) => {
  return (
    <React.Fragment>
      <div>
        {isLoggedIn ? (
          <Redirect to="/user-profile" />
        ) : (
          <div className="login">
            <form onSubmit={(e) => handleLoginSubmit(e, formLogin)}>
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
    username: state.authReducer.formLogin.username,
    password: state.authReducer.formLogin.password,
    isLoggedIn: state.authReducer.isLoggedIn,
    message: state.authReducer.message,
    formLogin: state.authReducer.formLogin,
  };
};

const mapDispatchToProps = (dispatch) => ({
  handleLoginInput: (e) => dispatch(handleLoginInput(e)),
  handleLoginSubmit: (e, formLogin) =>
    dispatch(handleLoginSubmit(e, formLogin)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Login);
