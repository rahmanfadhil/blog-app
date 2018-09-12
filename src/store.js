import { createStore, applyMiddleware } from "redux";
import promise from "redux-promise-middleware";
import logger from "redux-logger";

const reducers = (
  state = { loading: false, error: null, data: [] },
  action
) => {
  switch (action.payload) {
    case "FETCH_POSTS_PENDING":
      return { loading: true };
    case "FETCH_POSTS_REJECTED":
      return { loading: false, error: action.payload };
    case "FETCH_POSTS_FULFILLED":
      return { loading: false, data: action.payload };
    default:
      return state;
  }
};

const store = createStore(reducers, applyMiddleware(logger, promise()));

store.subscribe(() => {
  const currentState = store.getState();
  console.log(currentState);
});

export default store;
