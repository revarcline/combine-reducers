import { combineReducers } from "redux";
import booksReducer from "./booksReducer.js";
import authorsReducer from "./authorsReducer.js";

const rootReducer = combineReducers({
  authors: authorsReducer,
  books: booksReducer,
});

export default rootReducer;
