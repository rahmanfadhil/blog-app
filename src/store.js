import { createStore, applyMiddleware, combineReducers } from "redux";
import promise from "redux-promise-middleware";
import logger from "redux-logger";

import postsReducer from "./reducers/postsReducer";
import editPostReducer from "./reducers/editPostReducer";

const reducers = combineReducers({
  posts: postsReducer,
  edit_post: editPostReducer
});

const store = createStore(reducers, applyMiddleware(logger, promise()));

export default store;
