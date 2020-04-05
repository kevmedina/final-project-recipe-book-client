import React from "react";
import { AuthContext } from "../../context/index";
// import "./Recipe.css";

const Recipe = () => {
  return (
    <AuthContext.Consumer>
      {(context) => {
        const { isLoggedIn } = context.state;
        const { handleLogout } = context;
      }}
    </AuthContext.Consumer>
  );
};

export default Recipe;
