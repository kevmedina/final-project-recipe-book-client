import React, { Component } from "react";
import { NavLink, Link } from "react-router-dom";
import { connect } from "react-redux";
import { logout } from "../../redux/actions/authActions";
import "./ProfileNavbar.css";

class UserProfile extends Component {
  componentDidMount() {
    if (!this.props.isLoggedIn) {
      return this.props.history.push("/signup-page");
    }
  }

  render() {
    const {
      currentUser: { username, image },
      logout,
    } = this.props;

    return (
      <React.Fragment>
        <div className="side-navbar">
          <div>
            <img src={image} alt="cook" />
            <h1>{username}</h1>
          </div>

          <div>
            <ul>
              <li>
                <NavLink className="navlink" to="/user-profile">
                  <i className="fas fa-user fa-fw"></i> Dashboard
                </NavLink>
              </li>
              <li>
                <NavLink className="navlink" to="/search">
                  <i className="fas fa-search fa-fw"></i> Search
                </NavLink>
              </li>
              <li>
                <NavLink className="navlink" to="/new-recipe">
                  <i className="fas fa-plus-square fa-fw"></i> New Recipe
                </NavLink>
              </li>
              <li>
                <NavLink className="navlink" to="/new-recipebook">
                  <i className="fas fa-book fa-fw"></i> Recipe Books
                </NavLink>
              </li>
            </ul>
          </div>

          <div>
            <button onClick={logout}>Logout</button>
            <Link to="/update-profile">
              <button>Update Profile</button>
            </Link>
          </div>
        </div>
      </React.Fragment>
    );
  }
}

// UserProfile.contextType = AuthContext;

const mapStateToProps = (state) => {
  return {
    isLoggedIn: state.authReducer.isLoggedIn,
    currentUser: state.authReducer.currentUser,
  };
};

const mapDispatchToProps = (dispatch) => ({
  logout: () => dispatch(logout()),
});

export default connect(mapStateToProps, mapDispatchToProps)(UserProfile);
