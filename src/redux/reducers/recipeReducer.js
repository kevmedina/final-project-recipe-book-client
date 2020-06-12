const initialState = {
  recipes: [],
  recipesFromDB: [],
  recipeBooks: [],
  favorites: [],
  trivia: {},
};

export const recipeReducer = (state = initialState, action) => {
  switch (action.type) {
    case "SEARCH_RECIPES":
      return {
        ...state,
        recipes: action.recipes.data,
      };
    case "GET_RECIPES":
      return {
        ...state,
        recipesFromDB: action.recipes.data,
      };
    case "ADD_RECIPE":
      const newRecipe = state.recipes.find(
        (recipe) => recipe.id === action.recipeID
      );
      newRecipe.bookID = action.recipeBookID;
      return state;
    case "NEW_RECIPE":
      this.props.history.push("/new-recipebook");
      return state;
    case "ADD_FAVORITE":
      return {
        ...state,
        favorites: action.updatedRecipe,
      };
    case "RANDOM_TRIVIA":
      return {
        ...state,
        trivia: action.randomTrivia.data,
      };
    default:
      return state;
  }
};
