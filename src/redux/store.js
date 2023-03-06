import { applyMiddleware, combineReducers, createStore } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import thunkMiddleware from "redux-thunk";
import authReducer from "./auth-reducer";
import getItemsReducer from "./getItems-reducer";
// import searchReducer from "./search-reducer";

let reducers = combineReducers({
  items: getItemsReducer,
  auth: authReducer,
  // search: searchReducer,
});

let store = createStore(
  reducers,
  composeWithDevTools(applyMiddleware(thunkMiddleware))
);

export default store;
