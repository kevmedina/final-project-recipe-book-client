import React, { Component } from "react";
import "./RecipeBook.css";

class RecipeBook extends Component {
  state = {
    title: ''
  }

  handleSubmit = (e) => {
    e.preventDefault();
    console.log('Title: ', this.state.title);

    this.props.createNewRecipeBook(this.state.title);
  };

  handleInputChange = (e) => {
    // here we set the search term to the state
    const { name, value } = e.target;
    this.setState({
      [name]: value,
    });
  };

  render() {
    return (
      <div className="new-recipebook">
        <form onSubmit={(e) => this.handleSubmit(e)}>
          <div>Recipe Book</div>
          <input name="title" type="text" placeholder="Name of Cook Book" onChange={this.handleInputChange} />
          <button>Create Cook Book</button>
        </form>
      </div>
    );
  }
}

export default RecipeBook;
