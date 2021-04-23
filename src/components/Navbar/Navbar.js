import React from "react";
import { AuthContext } from "../../context/index";
import { NavLink, Link } from "react-router-dom";
import "./NavBar.css";

const Navbar = () => {
  return (
    <AuthContext.Consumer>
      {(context) => {
        const { isLoggedIn } = context.state;
        const { handleLogout } = context;

        return (
          <nav className="navbar">
            {isLoggedIn ? null : <span>Dish-It-Out</span>}
            {isLoggedIn ? (
              <div className="logged-in-navbar">
                <ul>
                  <li>
                    <NavLink className="link" to="/user-profile">
                      <i title="Dashboard" className="fas fa-user fa-fw"></i>
                    </NavLink>
                  </li>
                  <li>
                    <NavLink className="link" to="/search">
                      <i
                        title="Search Recipes"
                        className="fas fa-search fa-fw"
                      ></i>
                    </NavLink>
                  </li>
                  <li>
                    <NavLink className="link" to="/new-recipe">
                      <i
                        title="Add New Recipe"
                        className="fas fa-plus-square fa-fw"
                      ></i>
                    </NavLink>
                  </li>
                  <li>
                    <NavLink className="link" to="/new-recipebook">
                      <i title="Recipe Books" className="fas fa-book fa-fw"></i>
                    </NavLink>
                  </li>
                </ul>

                <div className="nav-buttons">
                  <Link className="update-profile-link" to="/update-profile">
                    <button>Update Profile</button>
                  </Link>
                  <button onClick={handleLogout}>Logout</button>
                </div>
              </div>
            ) : (
              <div className="logged-out-navlinks">
                <ul>
                  <li>
                    <NavLink className="link" to="/">
                      Home
                    </NavLink>
                  </li>
                  <li>
                    <NavLink className="link" to="/login-page">
                      Login
                    </NavLink>
                  </li>
                  <li>
                    <NavLink className="link" to="/signup-page">
                      Sign Up
                    </NavLink>
                  </li>
                </ul>
              </div>
            )}
          </nav>
        );
      }}
    </AuthContext.Consumer>
  );
};

export default Navbar;
