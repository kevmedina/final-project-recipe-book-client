import React from "react";
import { NavLink } from "react-router-dom";
import { AuthContext } from "../../context/index";
import './NavBar.css'

function Navbar() {
  return (
    <AuthContext.Consumer>
      {context => {
        const { isLoggedIn } = context.state;
        return (
          <div className="navbar">
            <nav>
              <NavLink to="/">Home</NavLink>
              {isLoggedIn ? (
                <NavLink to="/private">Private</NavLink>
              ) : (
                <NavLink to="/signup-page">Sign Up</NavLink>
              )}
            </nav>
          </div>
        );
      }}
    </AuthContext.Consumer>
  );
}

export default Navbar;
