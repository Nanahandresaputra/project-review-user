import { createStore, combineReducers, compose, applyMiddleware } from "redux";
import forumReducer from "./forum/reducer";
import thunk from "redux-thunk";

const commposeEnhanceer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const rootReducer = combineReducers({
  forum: forumReducer,
});

const store = createStore(rootReducer, commposeEnhanceer(applyMiddleware(thunk)));

export default store;
