import { createStore, applyMiddleware } from "redux";
import promise from "redux-promise-middleware";
import logger from "redux-logger";

const reducers = (
  state = {
    loading: false,
    error: null,
    data: [],
    edit_post: { key: 0, content: "", title: "" }
  },
  action
) => {
  switch (action.type) {
    case "FETCH_POSTS_PENDING":
      return { ...state, loading: true };
    case "FETCH_POSTS_FULFILLED":
      console.log(action);
      return { ...state, loading: false, data: action.payload };
    case "FETCH_POSTS_REJECTED":
      return { ...state, loading: false, error: action.payload };
    case "SET_EDIT_POST":
      return { ...state, edit_post: action.payload };
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
