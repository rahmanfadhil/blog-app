const postsReducer = (
  state = {
    loading: false,
    error: null,
    data: []
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
    default:
      return state;
  }
};

export default postsReducer;
