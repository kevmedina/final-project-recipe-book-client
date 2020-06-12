import { combineReducers } from "redux";
import { authReducer } from "./authReducer";
import { recipeReducer } from "./recipeReducer";

export const rootReducer = combineReducers({
  authReducer,
  recipeReducer,
});
