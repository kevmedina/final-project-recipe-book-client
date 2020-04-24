import React from "react";
import { Link } from "react-router-dom";
import "./Home.css";

const Home = () => {
  return (
    <div className="home">
      <div>
        <div className="box">
          <h1>Welcome to Recipe Box.</h1>
          <p>
            Sign up for free to search through more than 330,000 recipes from
            across the web.
          </p>
          <div>
            <Link to="/signup-page">Sign Up Now</Link>
          </div>
        </div>
      </div>

      <div></div>
    </div>
  );
};

export default Home;
