import React from "react";
import { NavLink } from "react-router-dom";
import { AuthContext } from "../../context/index";
import "./NavBar.css";

function Navbar() {
  return (
    <AuthContext.Consumer>
      {(context) => {
        const { isLoggedIn } = context.state;
        const { handleLogout } = context;
        return (
          <div className="navbar">
            {isLoggedIn ? (
              <button onClick={handleLogout}>Logout</button>
            ) : (
              <nav>
                <div>
                  <NavLink className="link" to="/">
                    Home
                  </NavLink>
                  <NavLink className="link" to="/login-page">
                    Login
                  </NavLink>
                  <NavLink className="link" to="/signup-page">
                    Sign Up
                  </NavLink>
                </div>
              </nav>
            )}
          </div>
        );
      }}
    </AuthContext.Consumer>
  );
}

export default Navbar;
