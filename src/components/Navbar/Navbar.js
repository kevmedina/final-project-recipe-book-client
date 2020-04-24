import React from "react";
import { NavLink } from "react-router-dom";
import "./NavBar.css";

function Navbar() {
  return (
    <div className="navbar">
      <nav>
        <NavLink className="link" to="/">
          Home
        </NavLink>
        <NavLink className="link" to="/login-page">
          Login
        </NavLink>
        <NavLink className="link" to="/signup-page">
          Sign Up
        </NavLink>
      </nav>
    </div>
  );
}

export default Navbar;
