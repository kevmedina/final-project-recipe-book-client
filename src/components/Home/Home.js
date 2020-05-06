import React from "react";
import { Link } from "react-router-dom";
import "./Home.css";

const Home = () => {
  return (
    <div className="home">
      <section className="hero">
        <div className="box">
          <h1>Welcome to <span>Dish-It-Out</span></h1>
          <p>
            Sign up for free to search through more than 360,000 recipes from
            across the web. Create your profile to build your own personal recipe books.
          </p>
          <div>
            <Link className="hero-link" to="/signup-page">Sign Up Now</Link>
          </div>
        </div>
      </section>

      <footer className="footer">
        <div>
          <div>
            <i className="fas fa-utensils"></i>
            <p>Over 360,000 recipes</p>
          </div>
          <div>
            <i className="fas fa-book"></i>
            <p>Customize recipe books</p>
          </div>
          <div>
            <i className="fas fa-star"></i>
            <p>Choose your favorites</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Home;
